/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseMetadata } from './ResponseMetadata';

export type ReplaceResponse = {
    metadata?: ResponseMetadata;
    /**
     * an enum with value set as "replaced"
     */
    status?: string;
    /**
     * an array returns the value of the primary keys.
     */
    keys?: Array<string>;
};

