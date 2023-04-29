/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Contains current quota limits
 */
export type QuotaLimitsResponse = {
    /**
     * Number of allowed read units per second
     */
    ReadUnits?: number;
    /**
     * Number of allowed write units per second
     */
    WriteUnits?: number;
    /**
     * Maximum number of bytes allowed to store
     */
    StorageSize?: number;
};

