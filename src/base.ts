import { AxiosRequestConfig } from "axios";
import { RequestBuilder } from "./request-builder";
const DEFAULT_BASE_URL = "https://api.preview.tigrisdata.cloud";

export abstract class Base {
  /**
   * Public base URL
   */
  public baseUrl: string;
  /**
   * API version
   */
  public version: string;

  /**
   * Request builder instance
   */
  private readonly requestBuilder: RequestBuilder;

  constructor(config: ConfigOptions) {
    this.baseUrl = config.serverUrl ?? DEFAULT_BASE_URL;
    this.version = config.apiVersion ?? "v1";

    this.requestBuilder = new RequestBuilder(
      this.baseUrl,
      config.clientId && config.clientSecret
        ? {
            clientId: config.clientId,
            clientSecret: config.clientSecret,
          }
        : undefined,
      {
        version: this.version,
      }
    );
  }

  protected request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.requestBuilder.request<T>(config);
  }
}

interface ConfigOptions {
  serverUrl?: string;
  apiVersion?: string;
  /**
   * Use clientId/clientSecret to authenticate production services.
   * Obtains at console.preview.tigrisdata.cloud in `Applications Keys` section
   * or by running `tigris create application {app_name} {app_description}` CLI command
   */
  clientId?: string;
  clientSecret?: string;
  /**
   * Database branch name
   */
  branch?: string;
}
