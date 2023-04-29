/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collation } from './Collation';
import type { WriteOptions } from './WriteOptions';

/**
 * Additional options for update requests.
 */
export type UpdateRequestOptions = {
    write_options?: WriteOptions;
    collation?: Collation;
    /**
     * Limit the number of documents to be updated
     */
    limit?: number;
};

