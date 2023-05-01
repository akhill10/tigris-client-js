/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Error } from './Error';

export type DocStatus = {
    /**
     * An id of the document.
     */
    id?: string;
    error?: Error;
};

