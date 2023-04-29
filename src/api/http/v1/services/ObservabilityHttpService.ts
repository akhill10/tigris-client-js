/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetInfoResponse } from '../models/GetInfoResponse';
import type { HealthCheckResponse } from '../models/HealthCheckResponse';
import type { QueryTimeSeriesMetricsRequest } from '../models/QueryTimeSeriesMetricsRequest';
import type { QueryTimeSeriesMetricsResponse } from '../models/QueryTimeSeriesMetricsResponse';
import type { QuotaLimitsRequest } from '../models/QuotaLimitsRequest';
import type { QuotaLimitsResponse } from '../models/QuotaLimitsResponse';
import type { QuotaUsageRequest } from '../models/QuotaUsageRequest';
import type { QuotaUsageResponse } from '../models/QuotaUsageResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ObservabilityHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Health Check
     * This endpoint can be used to check the liveness of the server.
     * @returns HealthCheckResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public healthApiHealth(): CancelablePromise<HealthCheckResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/health',
        });
    }

    /**
     * Information about the server
     * Provides the information about the server. This information includes returning the server version, etc.
     * @returns GetInfoResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public observabilityGetInfo(): CancelablePromise<GetInfoResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/observability/info',
        });
    }

    /**
     * Queries time series metrics
     * Queries time series metrics
     * @param requestBody
     * @returns QueryTimeSeriesMetricsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public observabilityQueryTimeSeriesMetrics(
        requestBody: QueryTimeSeriesMetricsRequest,
    ): CancelablePromise<QueryTimeSeriesMetricsResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/observability/metrics/timeseries/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Queries current namespace quota limits
     * Returns current namespace quota limits
     * @param requestBody
     * @returns QuotaLimitsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public observabilityQuotaLimits(
        requestBody: QuotaLimitsRequest,
    ): CancelablePromise<QuotaLimitsResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/observability/quota/limits',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Queries current namespace quota usage
     * Returns current namespace quota limits
     * @param requestBody
     * @returns QuotaUsageResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public observabilityQuotaUsage(
        requestBody: QuotaUsageRequest,
    ): CancelablePromise<QuotaUsageResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/observability/quota/usage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
