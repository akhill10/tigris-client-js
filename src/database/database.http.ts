import { Database } from "./database.interface";
import {
  CreateBranchResponse,
  DatabaseHttpService,
  DeleteBranchResponse,
  ListCollectionsResponse,
} from "../api/http/v1";
import { Log } from "../utils/logger";

const DefaultBranch = "main";

export class DatabaseHttp implements Database {
  projectName: string;
  branchName: string;

  constructor(
    private readonly databaseService: DatabaseHttpService,
    projectName: string,
    branchName?: string
  ) {
    this.databaseService = databaseService;
    this.projectName = projectName;
    this.branchName = branchName ?? DefaultBranch;
  }

  /**
   * Creates a database branch, if not existing already.
   *
   * @example
   * ```
   * const client = new TigrisClient();
   * const db = client.getDatabase();
   * await db.initializeBranch();
   * ```
   *
   * @throws {@link Promise.reject} - Error if branch cannot be created
   */
  public async initializeBranch(): Promise<void> {
    if (this.branchName != DefaultBranch) {
      try {
        await this.createBranch(this.branchName);
      } catch (error) {
        if (error["error"]["code"] === "ALREADY_EXISTS") {
          Log.event(`'${this.branchName}' branch already exists`);
        } else {
          throw error;
        }
      }
    }
    Log.info(`Using database branch: '${this.branchName}'`);
  }

  async createBranch(name: string): Promise<CreateBranchResponse> {
    try {
      return (await this.databaseService.tigrisCreateBranch(
        this.projectName,
        name,
        {}
      )) as CreateBranchResponse;
    } catch (error) {
      throw error["body"] ?? error;
    }
  }

  async deleteBranch(name: string): Promise<DeleteBranchResponse> {
    try {
      return (await this.databaseService.tigrisDeleteBranch(
        this.projectName,
        name,
        {}
      )) as DeleteBranchResponse;
    } catch (error) {
      throw error["body"] ?? error;
    }
  }

  async listCollections(): Promise<ListCollectionsResponse> {
    try {
      return (await this.databaseService.tigrisListCollections(
        this.projectName,
        this.branchName
      )) as ListCollectionsResponse;
    } catch (error) {
      throw error["body"] ?? error;
    }
  }
}
