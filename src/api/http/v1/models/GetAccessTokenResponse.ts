/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The response of GetAccessToken which contains access_token and optionally refresh_token.
 */
export type GetAccessTokenResponse = {
    /**
     * An Access Token.
     */
    access_token?: string;
    /**
     * The Refresh Token.
     */
    refresh_token?: string;
    /**
     * Access token expiration timeout in seconds.
     */
    expires_in?: number;
};

