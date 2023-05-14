import { Database } from "./database/database.interface";
import { Log } from "./utils/logger";
import { Driver, DriverConfig, DriverProtocols, HTTPDriver } from "./driver";
import { initializeEnvironment } from "./utils/env-loader";
export interface TigrisClientConfig {
  serverUrl?: string;
  projectName?: string;
  /**
   * Use clientId/clientSecret to authenticate production services.
   * Obtains at console.preview.tigrisdata.cloud in `Applications Keys` section
   * or by running `tigris create application {app_name} {app_description}` CLI command
   */
  clientId?: string;
  clientSecret?: string;
  /**
   * Tigris uses custom deserialization to support `bigint`. By default, the `bigint` from JSON
   * string will be converted back to model object as a `string` field. If user wants to
   * convert it back to `bigint`, set this property to `true`.
   */
  supportBigInt?: boolean;

  /**
   * Database branch name
   */
  branch?: string;
}

const DEFAULT_URL = "api.preview.tigrisdata.cloud";

export class Tigris {
  private driverConfig: DriverConfig;
  private driver: Driver;

  constructor(config: TigrisClientConfig) {
    initializeEnvironment();
    if (typeof config === "undefined") {
      config = {};
    }
    if (config.serverUrl === undefined) {
      config.serverUrl = DEFAULT_URL;
      if (process.env.TIGRIS_URI?.trim().length > 0) {
        config.serverUrl = process.env.TIGRIS_URI;
      }
      if (process.env.TIGRIS_URL?.trim().length > 0) {
        config.serverUrl = process.env.TIGRIS_URL;
      }
    }

    if (config.projectName === undefined) {
      if (!("TIGRIS_PROJECT" in process.env)) {
        throw new Error(
          "Unable to resolve TIGRIS_PROJECT environment variable"
        );
      }

      config.projectName = process.env.TIGRIS_PROJECT;
    }

    if (config.clientId === undefined && "TIGRIS_CLIENT_ID" in process.env) {
      config.clientId = process.env.TIGRIS_CLIENT_ID;
    }
    if (
      config.clientSecret === undefined &&
      "TIGRIS_CLIENT_SECRET" in process.env
    ) {
      config.clientSecret = process.env.TIGRIS_CLIENT_SECRET;
    }

    /**
     * Set Http driver
     */
    this.driverConfig = {
      serverUrl: config.serverUrl,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      projectName: config.projectName,
      branch: config.branch,
      protocol: DriverProtocols.HTTP,
    };

    Log.info(`Using Tigris at: ${config.serverUrl}`);
  }

  public async initialize(): Promise<void> {
    if (this.driverConfig.protocol === DriverProtocols.HTTP) {
      let isAuthEnabled = true;
      if (
        (this.driverConfig.serverUrl.includes("localhost") ||
          this.driverConfig.serverUrl.startsWith("tigris-local-server:") ||
          this.driverConfig.serverUrl.includes("127.0.0.1") ||
          this.driverConfig.serverUrl.includes("[::1]")) &&
        this.driverConfig.clientId === undefined &&
        this.driverConfig.clientSecret === undefined
      ) {
        isAuthEnabled = false;
      }
      const httpDriver = new HTTPDriver(this.driverConfig);
      await httpDriver.initialize(isAuthEnabled);
      this.driver = httpDriver;
    }
  }

  public getDatabase(): Database {
    return this.driver.getDatabase();
  }
}
