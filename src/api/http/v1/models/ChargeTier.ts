/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChargeTier = {
    /**
     * Starting point where this Tier is applicable. Ex - A charge could be tiered as "Tier 1 (0-5)", "Tier 2 (5-10)"; starting_at will be 0, 5 etc.
     */
    starting_at?: number;
    quantity?: number;
    price?: number;
    subtotal?: number;
};

