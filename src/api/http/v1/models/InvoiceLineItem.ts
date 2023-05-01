/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Charge } from './Charge';

export type InvoiceLineItem = {
    /**
     * Product name
     */
    name?: string;
    /**
     * Quantity
     */
    quantity?: number;
    /**
     * Total amount for the product
     */
    total?: number;
    /**
     * Broken down charges
     */
    charges?: Array<Charge>;
};

