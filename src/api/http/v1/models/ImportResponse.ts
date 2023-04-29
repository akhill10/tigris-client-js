/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseMetadata } from './ResponseMetadata';

export type ImportResponse = {
    metadata?: ResponseMetadata;
    /**
     * An enum with value set as "inserted"
     */
    status?: string;
    /**
     * an array returns the value of the primary keys.
     */
    keys?: Array<string>;
};

