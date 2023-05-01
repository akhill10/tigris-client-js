/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDocumentRequest = {
    /**
     * Project name whose db is under target to insert documents.
     */
    project?: string;
    /**
     * Index name where to create documents.
     */
    index?: string;
    /**
     * An array of documents. Each document should have "id" present which will be used by Tigris for updating the document.
     */
    documents?: Array<Record<string, any>>;
};

