/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReplaceRequestOptions } from './ReplaceRequestOptions';

export type ReplaceRequest = {
    /**
     * Array of documents to be replaced. Each document is a JSON object.
     */
    documents?: Array<Record<string, any>>;
    options?: ReplaceRequestOptions;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

