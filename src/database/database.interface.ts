import {
  CreateBranchResponse,
  DeleteBranchResponse,
  ListCollectionsResponse,
} from "../api/http/v1";

export interface Database {
  /**
   * Initialize branch
   */
  initializeBranch(): Promise<void>;
  /**
   * Create new branch.
   */
  createBranch(name: string): Promise<CreateBranchResponse>;
  /**
   * Delete branch.
   */
  deleteBranch(name: string): Promise<DeleteBranchResponse>;
  /**
   * List project collections.
   */
  listCollections(): Promise<ListCollectionsResponse>;
}
