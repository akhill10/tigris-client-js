/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Invoice } from './Invoice';

export type ListInvoicesResponse = {
    /**
     * Array of invoices
     */
    data?: Array<Invoice>;
    /**
     * token for next page if it exists, else `null`
     */
    next_page?: string;
};

