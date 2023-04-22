import { ListCollections, ListCollectionsQueryParams } from "./types";
import { Base } from "../base";

export class Database extends Base {
  listCollections(
    projectName: string,
    params?: ListCollectionsQueryParams
  ): Promise<ListCollections> {
    const path = `projects/${projectName}/database/collections`;

    return this.request<ListCollections>({
      url: path,
      method: "GET",
      params,
    });
  }
}
