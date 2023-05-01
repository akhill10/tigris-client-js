/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseMetadata } from './ResponseMetadata';

export type ReadResponse = {
    /**
     * Object containing the collection document.
     */
    data?: Record<string, any>;
    /**
     * An internal key, used for pagination.
     */
    resume_token?: string;
    metadata?: ResponseMetadata;
};

