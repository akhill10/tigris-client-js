/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInvitationsRequest } from '../models/CreateInvitationsRequest';
import type { CreateInvitationsResponse } from '../models/CreateInvitationsResponse';
import type { CreateNamespaceRequest } from '../models/CreateNamespaceRequest';
import type { CreateNamespaceResponse } from '../models/CreateNamespaceResponse';
import type { DeleteInvitationsRequest } from '../models/DeleteInvitationsRequest';
import type { DeleteInvitationsResponse } from '../models/DeleteInvitationsResponse';
import type { DeleteNamespaceResponse } from '../models/DeleteNamespaceResponse';
import type { GetNamespaceMetadataRequest } from '../models/GetNamespaceMetadataRequest';
import type { GetNamespaceMetadataResponse } from '../models/GetNamespaceMetadataResponse';
import type { GetUserMetadataRequest } from '../models/GetUserMetadataRequest';
import type { GetUserMetadataResponse } from '../models/GetUserMetadataResponse';
import type { InsertNamespaceMetadataRequest } from '../models/InsertNamespaceMetadataRequest';
import type { InsertNamespaceMetadataResponse } from '../models/InsertNamespaceMetadataResponse';
import type { InsertUserMetadataRequest } from '../models/InsertUserMetadataRequest';
import type { InsertUserMetadataResponse } from '../models/InsertUserMetadataResponse';
import type { ListInvitationsResponse } from '../models/ListInvitationsResponse';
import type { ListNamespacesResponse } from '../models/ListNamespacesResponse';
import type { ListUsersResponse } from '../models/ListUsersResponse';
import type { Status } from '../models/Status';
import type { UpdateNamespaceMetadataRequest } from '../models/UpdateNamespaceMetadataRequest';
import type { UpdateNamespaceMetadataResponse } from '../models/UpdateNamespaceMetadataResponse';
import type { UpdateUserMetadataRequest } from '../models/UpdateUserMetadataRequest';
import type { UpdateUserMetadataResponse } from '../models/UpdateUserMetadataResponse';
import type { VerifyInvitationRequest } from '../models/VerifyInvitationRequest';
import type { VerifyInvitationResponse } from '../models/VerifyInvitationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ManagementHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates invitations to join the namespace
     * Creates invitations to the namespace
     * @param requestBody
     * @returns CreateInvitationsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public authCreateInvitations(
        requestBody: CreateInvitationsRequest,
    ): CancelablePromise<CreateInvitationsResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/namespace/invitations/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes invitations to join the namespace
     * Deletes invitations to the namespace
     * @param requestBody
     * @returns DeleteInvitationsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public authDeleteInvitations(
        requestBody: DeleteInvitationsRequest,
    ): CancelablePromise<DeleteInvitationsResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/auth/namespace/invitations/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Lists all the invitations to join the namespace
     * Lists all the invitations to the namespace
     * @param status optional status - an enum [PENDING, EXPIRED, ACCEPTED]
     * @returns ListInvitationsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public authListInvitations(
        status?: string,
    ): CancelablePromise<ListInvitationsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/auth/namespace/invitations/list',
            query: {
                'status': status,
            },
        });
    }

    /**
     * Verifies the invitation
     * Verify invitation
     * @param requestBody
     * @returns VerifyInvitationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public authVerifyInvitation(
        requestBody: VerifyInvitationRequest,
    ): CancelablePromise<VerifyInvitationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/namespace/invitations/verify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Lists the users in current namespace
     * List users
     * @returns ListUsersResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public authListUsers(): CancelablePromise<ListUsersResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/auth/namespace/users',
        });
    }

    /**
     * Reads the Namespace Metadata
     * GetNamespaceMetadata inserts the user metadata object
     * @param metadataKey
     * @param requestBody
     * @returns GetNamespaceMetadataResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementGetNamespaceMetadata(
        metadataKey: string,
        requestBody: GetNamespaceMetadataRequest,
    ): CancelablePromise<GetNamespaceMetadataResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/namespace/metadata/{metadataKey}/get',
            path: {
                'metadataKey': metadataKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Inserts Namespace Metadata
     * InsertNamespaceMetadata inserts the namespace metadata object
     * @param metadataKey
     * @param requestBody
     * @returns InsertNamespaceMetadataResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementInsertNamespaceMetadata(
        metadataKey: string,
        requestBody: InsertNamespaceMetadataRequest,
    ): CancelablePromise<InsertNamespaceMetadataResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/namespace/metadata/{metadataKey}/insert',
            path: {
                'metadataKey': metadataKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updates Namespace Metadata
     * UpdateNamespaceMetadata updates the user metadata object
     * @param metadataKey
     * @param requestBody
     * @returns UpdateNamespaceMetadataResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementUpdateNamespaceMetadata(
        metadataKey: string,
        requestBody: UpdateNamespaceMetadataRequest,
    ): CancelablePromise<UpdateNamespaceMetadataResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/namespace/metadata/{metadataKey}/update',
            path: {
                'metadataKey': metadataKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Creates a Namespace
     * Creates a new namespace, if it does not exist
     * @param requestBody
     * @returns CreateNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementCreateNamespace(
        requestBody: CreateNamespaceRequest,
    ): CancelablePromise<CreateNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/namespaces/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Lists all Namespaces
     * List all namespace and optionally lists specific namespace by namespaceId filter, also supports `describe` request.
     * @param namespaceId Optionally filter by specific namespaceId
     * @param describe Optionally specify if the description of each namespace is requested
     * @returns ListNamespacesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementListNamespaces(
        namespaceId: string,
        describe?: boolean,
    ): CancelablePromise<ListNamespacesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/management/namespaces/{namespace_id}',
            path: {
                'namespace_id': namespaceId,
            },
            query: {
                'describe': describe,
            },
        });
    }

    /**
     * Deletes the namespace
     * DeleteNamespace deletes the namespace and all the data inside it
     * @param namespaceId string namespace id to delete.
     * @returns DeleteNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementDeleteNamespace(
        namespaceId: string,
    ): CancelablePromise<DeleteNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/management/namespaces/{namespace_id}',
            path: {
                'namespace_id': namespaceId,
            },
        });
    }

    /**
     * Reads the User Metadata
     * GetUserMetadata inserts the user metadata object
     * @param metadataKey
     * @param requestBody
     * @returns GetUserMetadataResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementGetUserMetadata(
        metadataKey: string,
        requestBody: GetUserMetadataRequest,
    ): CancelablePromise<GetUserMetadataResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/users/metadata/{metadataKey}/get',
            path: {
                'metadataKey': metadataKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Inserts User Metadata
     * insertUserMetadata inserts the user metadata object
     * @param metadataKey
     * @param requestBody
     * @returns InsertUserMetadataResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementInsertUserMetadata(
        metadataKey: string,
        requestBody: InsertUserMetadataRequest,
    ): CancelablePromise<InsertUserMetadataResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/users/metadata/{metadataKey}/insert',
            path: {
                'metadataKey': metadataKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updates User Metadata
     * updateUserMetadata updates the user metadata object
     * @param metadataKey
     * @param requestBody
     * @returns UpdateUserMetadataResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public managementUpdateUserMetadata(
        metadataKey: string,
        requestBody: UpdateUserMetadataRequest,
    ): CancelablePromise<UpdateUserMetadataResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/management/users/metadata/{metadataKey}/update',
            path: {
                'metadataKey': metadataKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
