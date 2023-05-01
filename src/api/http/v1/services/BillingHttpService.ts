/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BillingHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists all invoices for the user
     * ListInvoices fetches past invoices for this user
     * @param startingOnSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param startingOnNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @param endingBeforeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param endingBeforeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @param invoiceId optionally filter by a specific invoice_id
     * @param pageSize maximum number of items to include in result set
     * @param nextPage pagination token for fetching a particular result page, first page will be fetched if `null`
     * @returns ListInvoicesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public billingListInvoices(
        startingOnSeconds?: number,
        startingOnNanos?: number,
        endingBeforeSeconds?: number,
        endingBeforeNanos?: number,
        invoiceId?: string,
        pageSize?: number,
        nextPage?: string,
    ): CancelablePromise<ListInvoicesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/billing/invoices',
            query: {
                'starting_on.seconds': startingOnSeconds,
                'starting_on.nanos': startingOnNanos,
                'ending_before.seconds': endingBeforeSeconds,
                'ending_before.nanos': endingBeforeNanos,
                'invoice_id': invoiceId,
                'page_size': pageSize,
                'next_page': nextPage,
            },
        });
    }

}
