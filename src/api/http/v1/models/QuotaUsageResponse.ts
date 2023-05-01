/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Contains current quota usage
 */
export type QuotaUsageResponse = {
    /**
     * Number of read units used per second
     */
    ReadUnits?: number;
    /**
     * Number of write units used per second
     */
    WriteUnits?: number;
    /**
     * Number of bytes stored
     */
    StorageSize?: number;
    /**
     * Number of read units throttled per second. Units which was rejected with "resource exhausted error".
     */
    ReadUnitsThrottled?: number;
    /**
     * Number of write units throttled per second. Units which was rejected with "resource exhausted error".
     */
    WriteUnitsThrottled?: number;
    /**
     * Number of bytes throttled. Number of bytes which were attempted to write in excess of quota and were rejected.
     */
    StorageSizeThrottled?: number;
};

