import { CollectionInfo, CollectionOptions } from "../types";

export interface Database {
  listCollections(options: CollectionOptions): Promise<CollectionInfo[]>;
}
