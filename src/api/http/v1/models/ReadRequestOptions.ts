/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collation } from './Collation';

/**
 * Options that can be used to modify the results, for example "limit" to control the number of documents returned by the server.
 */
export type ReadRequestOptions = {
    /**
     * Limit the number of documents returned by the read operation.
     */
    limit?: number;
    /**
     * Number of documents to skip before starting to return resulting documents.
     */
    skip?: number;
    /**
     * A cursor for use in pagination. The next streams will return documents after this offset.
     */
    offset?: string;
    collation?: Collation;
};

