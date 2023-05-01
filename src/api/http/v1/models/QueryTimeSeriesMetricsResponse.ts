/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricSeries } from './MetricSeries';

/**
 * QueryTimeSeriesMetric responds with this type.
 */
export type QueryTimeSeriesMetricsResponse = {
    from?: number;
    to?: number;
    query?: string;
    series?: Array<MetricSeries>;
};

