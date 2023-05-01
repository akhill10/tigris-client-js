/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataPoint } from './DataPoint';

/**
 * Represents series in timeseries based on input query.
 */
export type MetricSeries = {
    from?: number;
    to?: number;
    metric?: string;
    scope?: string;
    dataPoints?: Array<DataPoint>;
};

