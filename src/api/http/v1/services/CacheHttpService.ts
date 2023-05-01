/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCacheRequest } from '../models/CreateCacheRequest';
import type { CreateCacheResponse } from '../models/CreateCacheResponse';
import type { DeleteCacheRequest } from '../models/DeleteCacheRequest';
import type { DeleteCacheResponse } from '../models/DeleteCacheResponse';
import type { DelRequest } from '../models/DelRequest';
import type { DelResponse } from '../models/DelResponse';
import type { GetResponse } from '../models/GetResponse';
import type { GetSetRequest } from '../models/GetSetRequest';
import type { GetSetResponse } from '../models/GetSetResponse';
import type { KeysResponse } from '../models/KeysResponse';
import type { ListCachesResponse } from '../models/ListCachesResponse';
import type { SetRequest } from '../models/SetRequest';
import type { SetResponse } from '../models/SetResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CacheHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists all the caches for the given project
     * @param project Tigris project name
     * @returns ListCachesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheListCaches(
        project: string,
    ): CancelablePromise<ListCachesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/caches/list',
            path: {
                'project': project,
            },
        });
    }

    /**
     * Creates the cache
     * @param project Tigris project name
     * @param name cache name
     * @param requestBody
     * @returns CreateCacheResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheCreateCache(
        project: string,
        name: string,
        requestBody: CreateCacheRequest,
    ): CancelablePromise<CreateCacheResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/caches/{name}/create',
            path: {
                'project': project,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes the cache
     * @param project Tigris project name
     * @param name cache name
     * @param requestBody
     * @returns DeleteCacheResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheDeleteCache(
        project: string,
        name: string,
        requestBody: DeleteCacheRequest,
    ): CancelablePromise<DeleteCacheResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/caches/{name}/delete',
            path: {
                'project': project,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Lists all the key for this cache
     * @param project Tigris project name
     * @param name cache name
     * @param cursor optional - cursor - skip this argument if no cursor is associated
     * @param count optional - count of keys to return a stream response line.
     * @param pattern optional key pattern
     * @returns KeysResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheKeys(
        project: string,
        name: string,
        cursor?: number,
        count?: number,
        pattern?: string,
    ): CancelablePromise<KeysResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/caches/{name}/keys',
            path: {
                'project': project,
                'name': name,
            },
            query: {
                'cursor': cursor,
                'count': count,
                'pattern': pattern,
            },
        });
    }

    /**
     * Deletes an entry from cache
     * @param project Tigris project name
     * @param name cache name
     * @param key cache key
     * @param requestBody
     * @returns DelResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheDel(
        project: string,
        name: string,
        key: string,
        requestBody: DelRequest,
    ): CancelablePromise<DelResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/caches/{name}/{key}/delete',
            path: {
                'project': project,
                'name': name,
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reads an entry from cache
     * @param project Tigris project name
     * @param name cache name
     * @param key cache key
     * @returns GetResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheGet(
        project: string,
        name: string,
        key: string,
    ): CancelablePromise<GetResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/caches/{name}/{key}/get',
            path: {
                'project': project,
                'name': name,
                'key': key,
            },
        });
    }

    /**
     * Sets an entry in the cache and returns the previous value if exists
     * @param project Tigris project name
     * @param name cache name
     * @param key cache key
     * @param requestBody
     * @returns GetSetResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheGetSet(
        project: string,
        name: string,
        key: string,
        requestBody: GetSetRequest,
    ): CancelablePromise<GetSetResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/caches/{name}/{key}/getset',
            path: {
                'project': project,
                'name': name,
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Sets an entry in the cache
     * @param project Tigris project name
     * @param name cache name
     * @param key cache key
     * @param requestBody
     * @returns SetResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public cacheSet(
        project: string,
        name: string,
        key: string,
        requestBody: SetRequest,
    ): CancelablePromise<SetResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/caches/{name}/{key}/set',
            path: {
                'project': project,
                'name': name,
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
