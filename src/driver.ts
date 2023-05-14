import { OpenApiClient } from "./api/http/v1";
import { HttpAuthorization } from "./auth";
import { DatabaseHttp } from "./database/database.http";
import { Database } from "./database/database.interface";

export enum DriverProtocols {
  HTTP,
  gRPC,
}

export interface DriverConfig {
  clientId: string;
  clientSecret: string;
  projectName: string;
  branch?: string;
  token?: string;
  serverUrl?: string;
  protocol: DriverProtocols;
  disablePing?: boolean;
  pingIntervalInMs?: number;
}

export interface Driver {
  getDatabase(): Database;
}

export class HTTPDriver implements Driver {
  private openApiClient: OpenApiClient;
  private accessToken: string;

  constructor(private readonly driverConfig: DriverConfig) {
    this.driverConfig = driverConfig;
  }

  public getDatabase(): Database {
    return new DatabaseHttp(
      this.openApiClient.database,
      this.driverConfig.projectName,
      this.driverConfig.branch
    );
  }

  public async initialize(authEnabled?: boolean) {
    if (authEnabled) {
      this.accessToken = await new HttpAuthorization(
        {
          clientId: this.driverConfig.clientId,
          clientSecret: this.driverConfig.clientSecret,
        },
        this.driverConfig.serverUrl
      ).getAuthorizationHeader();
    }

    this.openApiClient = new OpenApiClient({
      BASE: this.driverConfig.serverUrl,
      ...(authEnabled && { TOKEN: this.accessToken }),
    });
  }
}
