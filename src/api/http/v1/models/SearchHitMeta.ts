/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Match } from './Match';

/**
 * Contains metadata related to the search hit, has information about document created_at/updated_at as well.
 */
export type SearchHitMeta = {
    /**
     * Time at which the document was inserted/replaced. Measured in nano-seconds since the Unix epoch.
     */
    created_at?: string;
    /**
     * Time at which the document was updated. Measured in nano-seconds since the Unix epoch.
     */
    updated_at?: string;
    match?: Match;
};

