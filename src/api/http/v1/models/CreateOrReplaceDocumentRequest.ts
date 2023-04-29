/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOrReplaceDocumentRequest = {
    /**
     * Project name whose db is under target to insert documents.
     */
    project?: string;
    /**
     * index name where to create documents.
     */
    index?: string;
    /**
     * An array of documents to create. Each document is a JSON object. In case an id is missing then the server will automatically generate it for you and create the document and in case an id is provided in the document and the document already exists then that document will not index and in the response there will be an error corresponding to that document id other documents will succeed.
     */
    documents?: Array<Record<string, any>>;
};

