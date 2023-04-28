import { Database } from "./database.interface";
import { CollectionInfo, CollectionOptions } from "../types";
import { DatabaseHttpService, ListCollectionsResponse } from "../api/http/v1";

export class DatabaseHttp implements Database {
  constructor(private readonly databaseService: DatabaseHttpService) {
    this.databaseService = databaseService;
  }

  async listCollections(options: CollectionOptions): Promise<CollectionInfo[]> {
    const response: ListCollectionsResponse =
      (await this.databaseService.tigrisListCollections(
        options.projectName,
        options.branch
      )) as ListCollectionsResponse;

    return response.collections.map((collection) => {
      return new CollectionInfo(collection.collection, collection.metadata);
    });
  }
}
