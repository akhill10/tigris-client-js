/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetRequest = {
    /**
     * free form byte[] value
     */
    value?: string;
    /**
     * optional - ttl specific to this key in second
     */
    ex?: number;
    /**
     * optional - ttl specific to this key in millisecond
     */
    px?: number;
    /**
     * set only if the key doesn't exist
     */
    nx?: boolean;
    /**
     * set only if the key exist
     */
    xx?: boolean;
};

