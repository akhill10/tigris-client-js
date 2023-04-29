/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SearchHitMeta } from './SearchHitMeta';

export type SearchHit = {
    /**
     * Actual search document
     */
    data?: Record<string, any>;
    metadata?: SearchHitMeta;
};

