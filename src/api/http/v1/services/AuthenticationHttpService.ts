/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAccessTokenRequest } from '../models/GetAccessTokenRequest';
import type { GetAccessTokenResponse } from '../models/GetAccessTokenResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthenticationHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Access Token
     * Endpoint for receiving access token from Tigris Server. The endpoint
     * requires Grant Type(`grant_type`) which has two possible values
     * <i>"REFRESH_TOKEN"</i> or <i>"CLIENT_CREDENTIALS"</i> based on which either
     * Refresh token(`refresh_token`) needs to be set or client
     * credentials(`client_id`, `client_secret`).
     * @param requestBody
     * @returns GetAccessTokenResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public authGetAccessToken(
        requestBody: GetAccessTokenRequest,
    ): CancelablePromise<GetAccessTokenResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/token',
            body: requestBody,
            mediaType: 'x-www-form-urlencoded',
        });
    }

}
