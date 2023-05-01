/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteByQueryRequest = {
    /**
     * The project name.
     */
    project?: string;
    /**
     * The index name of the documents that needs deletion.
     */
    index?: string;
    /**
     * A filter is required to delete matching documents. To delete document by id, you can pass the filter as follows ```{"id": "test"}```
     */
    filter?: Record<string, any>;
};

