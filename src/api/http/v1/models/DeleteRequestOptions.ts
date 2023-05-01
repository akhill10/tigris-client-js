/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collation } from './Collation';
import type { WriteOptions } from './WriteOptions';

/**
 * Additional options for deleted requests.
 */
export type DeleteRequestOptions = {
    write_options?: WriteOptions;
    collation?: Collation;
    /**
     * Limit the number of documents to be deleted
     */
    limit?: number;
};

