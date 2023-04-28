import {
  GetAccessTokenRequest,
  GetAccessTokenResponse,
  OpenAPI,
  OpenApiClient,
  Status,
} from "./api/http/v1";

/**
 * Axios layer setting automatically an authorization header
 */
export class HttpAuthorization {
  /**
   * Access token instance
   */
  private accessTokenInstance?: AccessToken;

  constructor(private readonly credentials: Credentials) {}

  /**
   * Get Access Token
   */
  public async getAuthorizationHeader(): Promise<string> {
    /*
     * If the access token is already defined, check if it is expired
     */
    const { isAccessTokenExpired } = this.isExpired();

    if (this.accessTokenInstance !== undefined && !isAccessTokenExpired) {
      return this.accessTokenInstance.access_token;
    }

    if (this.accessTokenInstance !== undefined && isAccessTokenExpired) {
      let token: GetAccessTokenResponse | Status;
      try {
        token = await this.generateToken(true);
      } catch {
        token = await this.generateToken();
      }

      this.accessTokenInstance = this.getAccessTokenInstance(token);

      return this.accessTokenInstance.access_token;
    }

    const request = await this.generateToken();

    this.accessTokenInstance = this.getAccessTokenInstance(request);

    return this.accessTokenInstance.access_token;
  }

  /**
   * Get expiration date from an access token instance
   */
  private readonly getAccessTokenInstance = (
    apiResponse: GetAccessTokenResponse
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

  private generateToken(
    fromRefreshToken = false
  ): Promise<GetAccessTokenResponse> {
    const body = fromRefreshToken
      ? {
          grant_type: GetAccessTokenRequest.grant_type.REFRESH_TOKEN,
          refresh_token: (this.accessTokenInstance as AccessToken)
            .refresh_token,
        }
      : {
          grant_type: GetAccessTokenRequest.grant_type.CLIENT_CREDENTIALS,
          client_id: this.credentials?.clientId,
          client_secret: this.credentials?.clientSecret,
        };

    return new OpenApiClient({
      WITH_CREDENTIALS: true,
    }).authentication
      .authGetAccessToken(body)
      .then((value) => {
        return value as GetAccessTokenResponse;
      })
      .catch((error) => {
        throw error;
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
  access_token?: string;
  expires_in?: number;
  refresh_token?: string;
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
