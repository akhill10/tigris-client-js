/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateDocumentRequest = {
    /**
     * Tigris project name.
     */
    project?: string;
    /**
     * index name where to create documents.
     */
    index?: string;
    /**
     * An array of documents to be created or replaced. Each document is a JSON object.
     */
    documents?: Array<Record<string, any>>;
};

