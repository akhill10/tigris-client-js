/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type KeysResponse = {
    /**
     * keys
     */
    keys?: Array<string>;
    /**
     * cursor - 0 is the keys scan is finished, non-zero cursor can be passed in next keys request to continue the scan this is useful if streaming breaks and user wants to resume stream
     */
    cursor?: number;
};

