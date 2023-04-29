/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupedSearchHits } from './GroupedSearchHits';
import type { SearchFacet } from './SearchFacet';
import type { SearchHit } from './SearchHit';
import type { SearchMetadata } from './SearchMetadata';

/**
 * Response struct for search
 */
export type SearchResponse = {
    hits?: Array<SearchHit>;
    facets?: Record<string, SearchFacet>;
    meta?: SearchMetadata;
    /**
     * Group is returned when group_by is used in the search request. In this case the above hits will be empty and hits are returned by the group keys.
     */
    group?: Array<GroupedSearchHits>;
};

