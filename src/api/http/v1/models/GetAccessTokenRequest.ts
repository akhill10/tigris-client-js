/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The Request message for the GetAccessToken. The grant type is a required field and based on the grant type the other fields are used as mentioned below.
 */
export type GetAccessTokenRequest = {
    grant_type?: 'REFRESH_TOKEN' | 'CLIENT_CREDENTIALS';
    /**
     * Refresh token is required when grant type is set as `REFRESH_TOKEN`.
     */
    refresh_token?: string;
    /**
     * Client Id is required when grant type is set as `CLIENT_CREDENTIALS`.
     */
    client_id?: string;
    /**
     * Your Tigris API Key is required when grant type is set as `CLIENT_CREDENTIALS`.
     */
    client_secret?: string;
};

