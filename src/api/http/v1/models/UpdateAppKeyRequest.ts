/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * To update the description of the app key
 */
export type UpdateAppKeyRequest = {
    /**
     * app key id - this is not allowed to update
     */
    id?: string;
    /**
     * A new human readable app name
     */
    name?: string;
    /**
     * A new human readable app description
     */
    description?: string;
};

