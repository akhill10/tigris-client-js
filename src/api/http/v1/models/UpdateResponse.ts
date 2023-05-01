/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseMetadata } from './ResponseMetadata';

export type UpdateResponse = {
    metadata?: ResponseMetadata;
    /**
     * Returns the number of documents modified.
     */
    modified_count?: number;
    /**
     * an enum with value set as "updated".
     */
    status?: string;
};

