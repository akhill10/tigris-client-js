import { Database } from "./database/database.interface";
import { Driver, DriverConfig, HTTPDriver } from "./driver";

export class Tigris {
  private driverConfig: DriverConfig;
  private driver: Driver;

  constructor(driverConfig: DriverConfig) {
    this.driverConfig = driverConfig;
  }

  public async initialize(): Promise<void> {
    await this.setDriver(this.driverConfig);
  }

  private async setDriver(driverConfig: DriverConfig): Promise<void> {
    const httpDriver = new HTTPDriver(driverConfig);
    await httpDriver.initialize();
    this.driver = httpDriver;
  }

  public getDatabase(): Database {
    return this.driver.getDatabase();
  }
}
