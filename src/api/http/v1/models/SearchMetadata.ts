/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Page } from './Page';

export type SearchMetadata = {
    /**
     * Total number of search results across all pages
     */
    found?: number;
    /**
     * Number representing the total pages of results
     */
    total_pages?: number;
    page?: Page;
    matched_fields?: Array<string>;
};

