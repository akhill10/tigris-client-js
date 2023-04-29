/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Error } from './Error';
import type { SearchResponse } from './SearchResponse';

export type StreamingSearchResponse = {
    result?: SearchResponse;
    error?: Error;
};

