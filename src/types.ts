export class CollectionMetadata {}

export class CollectionInfo {
  private readonly _name: string;
  private readonly _metadata: CollectionMetadata;

  constructor(name: string, metadata: CollectionMetadata) {
    this._name = name;
    this._metadata = metadata;
  }

  get name(): string {
    return this._name;
  }

  get metadata(): CollectionMetadata {
    return this._metadata;
  }
}

export class CollectionOptions {
  projectName: string;
  branch?: string;
}
