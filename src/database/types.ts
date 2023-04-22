export type ListCollections = {
  collections: Collection[];
};

export type Collection = {
  collection: string;
  metadata: object;
};

export type ListCollectionsQueryParams = {
  branch?: string;
};
