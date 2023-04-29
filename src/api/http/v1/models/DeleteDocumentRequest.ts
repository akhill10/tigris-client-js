/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDocumentRequest = {
    /**
     * The project name.
     */
    project?: string;
    /**
     * The index name of the documents that needs deletion.
     */
    index?: string;
    /**
     * A list of ids
     */
    ids?: Array<string>;
};

