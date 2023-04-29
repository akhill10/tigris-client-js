/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DescribeDatabaseRequest = {
    /**
     * Project name whose db is under target to get description.
     */
    project?: string;
    /**
     * Return schema in the requested format. Format can be JSON, Go, TypeScript, Java. Default is JSON.
     */
    schema_format?: string;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

