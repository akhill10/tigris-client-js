/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalFunction } from './AdditionalFunction';

/**
 * Requests the time series metrics
 */
export type QueryTimeSeriesMetricsRequest = {
    db?: string;
    branch?: string;
    collection?: string;
    from?: number;
    to?: number;
    metric_name?: string;
    tigris_operation?: 'ALL' | 'READ' | 'WRITE' | 'METADATA';
    space_aggregation?: 'AVG' | 'MIN' | 'MAX' | 'SUM';
    space_aggregated_by?: Array<string>;
    function?: 'RATE' | 'COUNT' | 'NONE';
    quantile?: number;
    additionalFunctions?: Array<AdditionalFunction>;
};

