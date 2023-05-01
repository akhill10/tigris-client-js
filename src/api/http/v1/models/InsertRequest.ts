/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InsertRequestOptions } from './InsertRequestOptions';

export type InsertRequest = {
    /**
     * Array of documents to insert. Each document is a JSON object.
     */
    documents?: Array<Record<string, any>>;
    options?: InsertRequestOptions;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

