/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FacetCount } from './FacetCount';
import type { FacetStats } from './FacetStats';

export type SearchFacet = {
    counts?: Array<FacetCount>;
    stats?: FacetStats;
};

