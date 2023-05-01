/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MatchField } from './MatchField';

export type Match = {
    fields?: Array<MatchField>;
    score?: string;
    vector_distance?: number;
};

