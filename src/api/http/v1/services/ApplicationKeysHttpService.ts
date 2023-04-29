/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAppKeyRequest } from '../models/CreateAppKeyRequest';
import type { CreateAppKeyResponse } from '../models/CreateAppKeyResponse';
import type { DeleteAppKeyRequest } from '../models/DeleteAppKeyRequest';
import type { DeleteAppKeyResponse } from '../models/DeleteAppKeyResponse';
import type { ListAppKeysResponse } from '../models/ListAppKeysResponse';
import type { RotateAppKeyRequest } from '../models/RotateAppKeyRequest';
import type { RotateAppKeyResponse } from '../models/RotateAppKeyResponse';
import type { Status } from '../models/Status';
import type { UpdateAppKeyRequest } from '../models/UpdateAppKeyRequest';
import type { UpdateAppKeyResponse } from '../models/UpdateAppKeyResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApplicationKeysHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all the app keys
     * Lists all app keys visible to requesting actor.
     * @param project Project name filter
     * @returns ListAppKeysResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisListAppKeys(
        project: string,
    ): CancelablePromise<ListAppKeysResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/apps/keys',
            path: {
                'project': project,
            },
        });
    }

    /**
     * Creates the app key
     * Create an app key.
     * @param project Project name
     * @param requestBody
     * @returns CreateAppKeyResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisCreateAppKey(
        project: string,
        requestBody: CreateAppKeyRequest,
    ): CancelablePromise<CreateAppKeyResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/apps/keys/create',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes the app key
     * Delete an app key.
     * @param project project name
     * @param requestBody
     * @returns DeleteAppKeyResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDeleteAppKey(
        project: string,
        requestBody: DeleteAppKeyRequest,
    ): CancelablePromise<DeleteAppKeyResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/apps/keys/delete',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Rotates the app key secret
     * Endpoint is used to rotate the secret for the app key.
     * @param project project name
     * @param requestBody
     * @returns RotateAppKeyResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisRotateAppKeySecret(
        project: string,
        requestBody: RotateAppKeyRequest,
    ): CancelablePromise<RotateAppKeyResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/apps/keys/rotate',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updates the description of the app key
     * Update the description of an app key.
     * @param project project name -  this is not allowed to update
     * @param requestBody
     * @returns UpdateAppKeyResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisUpdateAppKey(
        project: string,
        requestBody: UpdateAppKeyRequest,
    ): CancelablePromise<UpdateAppKeyResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/apps/keys/update',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
