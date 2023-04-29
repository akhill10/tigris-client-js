/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Contains ID which uniquely identifies transaction This context is returned by BeginTransaction request and should be passed in the metadata (headers) of subsequent requests in order to run them in the context of the same transaction.
 */
export type TransactionCtx = {
    /**
     * Unique for a single transactional request.
     */
    id?: string;
    /**
     * Serves as an internal identifier.
     */
    origin?: string;
};

