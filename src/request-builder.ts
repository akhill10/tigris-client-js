import { stringify } from "node:querystring";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { Logger } from "winston";

/**
 * Axios layer setting automatically an authorization header
 */
export class RequestBuilder {
  /**
   * Axios instance
   */
  protected axiosInstance: AxiosInstance;
  /**
   * Access token instance
   */
  private accessTokenInstance?: AccessToken;
  /**
   * API version , default is v1
   */
  public apiVersion: string;

  constructor(
    private readonly baseUrl: string,
    private readonly credentials?: Credentials,
    options?: { debug?: boolean; logger?: Logger; version?: string },
    private _authorizationHeader?: string
  ) {
    this.apiVersion = options?.version ?? "v1";
    this.axiosInstance = axios.create({
      baseURL: `${this.baseUrl}/${this.apiVersion}`,
    });
    this.axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        config.headers = config.headers ?? {};
        // If credentials are passed then authenticate.
        if (credentials?.clientId && credentials?.clientSecret) {
          config.headers.Authorization =
            config.headers.Authorization ??
            (this.authorizationHeader as string) ??
            (await this.getAuthorizationHeader());
        }
        return config;
      }
    );
    if (options?.debug === true && options.logger !== undefined) {
      const logger: Logger = options.logger;
      this.axiosInstance.interceptors.request.use(
        async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
          logger.info(`[${config.method} ${config.url}] Incoming request`, {
            headers: config.headers,
            data: config.data,
          });

          return config;
        }
      );

      this.axiosInstance.interceptors.response.use(
        <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
          logger.info(
            `[${response.status} ${response.config.method} ${response.config.url}] Outgoing request`,
            {
              headers: response.headers,
              data: response.data,
            }
          );

          return response;
        },
        async <T>(error: AxiosError<T>): Promise<AxiosError<T>> => {
          logger.error(
            `ERROR [${error?.response?.status} ${error.config?.method} ${error.config?.url}] Outgoing request`,
            {
              data: error?.response?.data,
            }
          );

          throw error;
        }
      );
    }
  }

  /**
   * Set the authorization header
   */
  public async getAuthorizationHeader(): Promise<string> {
    /*
     * If the access token is already defined, check if it is expired
     */
    const { isAccessTokenExpired } = this.isExpired();

    if (this.accessTokenInstance !== undefined && !isAccessTokenExpired) {
      return `Bearer ${this.accessTokenInstance.access_token}`;
    }

    if (this.accessTokenInstance !== undefined && isAccessTokenExpired) {
      let token: AxiosResponse<OAuthResponse>;
      try {
        token = await this.generateToken(true);
      } catch {
        token = await this.generateToken();
      }

      this.accessTokenInstance = this.getAccessTokenInstance(token.data);

      return `Bearer ${this.accessTokenInstance.access_token}`;
    }

    const request: AxiosResponse<OAuthResponse> = await this.generateToken();

    this.accessTokenInstance = this.getAccessTokenInstance(request.data);

    return `Bearer ${this.accessTokenInstance.access_token}`;
  }

  /**
   * Get expiration date from an access token instance
   */
  private readonly getAccessTokenInstance = (
    apiResponse: OAuthResponse
  ): AccessToken => {
    const toMs = 1000;

    return {
      ...apiResponse,
      expiresAt: new Date(Date.now() + apiResponse.expires_in * toMs),
    };
  };

  /**
   * Check if the access token or the refresh token is expired
   */
  private isExpired(): { isAccessTokenExpired: boolean } {
    if (this.accessTokenInstance === undefined) {
      return { isAccessTokenExpired: true };
    }
    const expirationWindow = 300;
    const minThreshold: number =
      this.accessTokenInstance.expiresAt.getTime() - expirationWindow;

    return {
      isAccessTokenExpired: minThreshold < Date.now(),
    };
  }

  /**
   * Request builder
   */
  public async request<T>(config: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.request(config);

    return response.data;
  }

  /**
   * Set the property authorizationHeader
   */
  public set authorizationHeader(authorizationHeader: string | undefined) {
    this._authorizationHeader = authorizationHeader;
  }

  /**
   * Get the property authorizationHeader
   */
  public get authorizationHeader(): string | undefined {
    return this._authorizationHeader;
  }

  private generateToken(
    fromRefreshToken = false
  ): Promise<AxiosResponse<OAuthResponse>> {
    const body = fromRefreshToken
      ? {
          grant_type: "REFRESH_TOKEN",
          refresh_token: (this.accessTokenInstance as AccessToken)
            .refresh_token,
        }
      : {
          grant_type: "CLIENT_CREDENTIALS",
          client_id: this.credentials?.clientId,
          client_secret: this.credentials?.clientSecret,
        };
    return axios.post<OAuthResponse>("/auth/token", stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
}

/**
 * Credentials parameters
 */
interface Credentials {
  clientId: string;
  clientSecret: string;
}

/**
 * Tigris OAuth server response
 */
interface OAuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

/**
 * Additional information calculated after getting access token
 */
interface ExpirationDate {
  expiresAt: Date;
}

/**
 * Access token type
 */
type AccessToken = OAuthResponse & ExpirationDate;
