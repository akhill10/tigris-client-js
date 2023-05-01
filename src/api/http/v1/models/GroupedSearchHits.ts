/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SearchHit } from './SearchHit';

export type GroupedSearchHits = {
    group_keys?: Array<string>;
    hits?: Array<SearchHit>;
};

