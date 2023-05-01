/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CountRequest = {
    /**
     * Project name whose db is under target to count documents from.
     */
    project?: string;
    /**
     * Collection name to count documents from.
     */
    collection?: string;
    /**
     * Count documents matching this filter. An empty filter means count all documents. A filter can simply be a key, value pair where a key is the field name and the value would be the value for this field. Tigris also allows complex filtering by passing logical expressions. Logical filters are applied on two or more fields using `$or` and `$and`. The detailed documentation of the filter is <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>.
     */
    filter?: string;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

