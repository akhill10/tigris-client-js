/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RollupFunction } from './RollupFunction';

/**
 * Additional function to apply on metrics query
 */
export type AdditionalFunction = {
    rollup?: RollupFunction;
};

