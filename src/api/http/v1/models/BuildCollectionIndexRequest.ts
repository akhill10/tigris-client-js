/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BuildCollectionIndexRequest = {
    /**
     * Project name whose db is under target to index documents.
     */
    project?: string;
    /**
     * Name of the collection.
     */
    collection?: string;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

