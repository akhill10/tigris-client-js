/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChargeTier } from './ChargeTier';

export type Charge = {
    /**
     * Charge name
     */
    name?: string;
    quantity?: number;
    subtotal?: number;
    /**
     * Tiered charges, if any
     */
    tiers?: Array<ChargeTier>;
};

