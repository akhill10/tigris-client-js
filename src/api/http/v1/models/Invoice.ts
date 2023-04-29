/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceLineItem } from './InvoiceLineItem';

export type Invoice = {
    /**
     * unique identifier for this invoice
     */
    id?: string;
    /**
     * entries that make up the invoice
     */
    entries?: Array<InvoiceLineItem>;
    /**
     * RFC 3339 starting time for usage period during which items were added to this invoice
     */
    start_time?: string;
    /**
     * RFC 3339 ending time for usage period during which items were added to this invoice
     */
    end_time?: string;
    /**
     * invoice subtotal
     */
    subtotal?: number;
    /**
     * total invoice amount
     */
    total?: number;
    /**
     * Tigris price plan name
     */
    plan_name?: string;
};

