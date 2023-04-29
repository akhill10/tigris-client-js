/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionOptions } from './CollectionOptions';

export type DescribeCollectionRequest = {
    /**
     * Project name whose db is under target to get description of its collection.
     */
    project?: string;
    /**
     * Name of the collection.
     */
    collection?: string;
    /**
     * Return schema in the requested format. Format can be JSON, Go, TypeScript, Java. Default is JSON.
     */
    schema_format?: string;
    options?: CollectionOptions;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

