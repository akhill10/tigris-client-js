/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Rollup function aggregates the slices of metrics returned by original query and lets you operate on the slices using aggregator and constructs the bigger slice of your choice of interval (specified in seconds).
 */
export type RollupFunction = {
    aggregator?: 'ROLLUP_AGGREGATOR_SUM' | 'ROLLUP_AGGREGATOR_COUNT' | 'ROLLUP_AGGREGATOR_MIN' | 'ROLLUP_AGGREGATOR_MAX' | 'ROLLUP_AGGREGATOR_AVG';
    interval?: number;
};

