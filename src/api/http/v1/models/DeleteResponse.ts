/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseMetadata } from './ResponseMetadata';

export type DeleteResponse = {
    metadata?: ResponseMetadata;
    /**
     * an enum with value set as "deleted"
     */
    status?: string;
    /**
     * Returns the number of documents deleted.
     */
    deleted_count?: number;
};

