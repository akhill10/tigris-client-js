/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BeginTransactionRequest } from '../models/BeginTransactionRequest';
import type { BeginTransactionResponse } from '../models/BeginTransactionResponse';
import type { CommitTransactionRequest } from '../models/CommitTransactionRequest';
import type { CommitTransactionResponse } from '../models/CommitTransactionResponse';
import type { CreateBranchRequest } from '../models/CreateBranchRequest';
import type { CreateBranchResponse } from '../models/CreateBranchResponse';
import type { DeleteBranchRequest } from '../models/DeleteBranchRequest';
import type { DeleteBranchResponse } from '../models/DeleteBranchResponse';
import type { DescribeDatabaseRequest } from '../models/DescribeDatabaseRequest';
import type { DescribeDatabaseResponse } from '../models/DescribeDatabaseResponse';
import type { ListBranchesResponse } from '../models/ListBranchesResponse';
import type { ListCollectionsResponse } from '../models/ListCollectionsResponse';
import type { RollbackTransactionRequest } from '../models/RollbackTransactionRequest';
import type { RollbackTransactionResponse } from '../models/RollbackTransactionResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DatabaseHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List database branches
     * List database branches
     * @param project List database branches in this project
     * @returns ListBranchesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisListBranches(
        project: string,
    ): CancelablePromise<ListBranchesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/database/branches',
            path: {
                'project': project,
            },
        });
    }

    /**
     * Create a database branch
     * Creates a new database branch, if not already existing.
     * @param project Create a database branch in this project
     * @param branch Name of the database branch to be created. <p></p>**Note**: `main` is a reserved branch name for primary database and is automatically created with CreateProject
     * @param requestBody
     * @returns CreateBranchResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisCreateBranch(
        project: string,
        branch: string,
        requestBody: CreateBranchRequest,
    ): CancelablePromise<CreateBranchResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/branches/{branch}/create',
            path: {
                'project': project,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a database branch
     * Deletes a database branch, if exists.
     * Throws 400 Bad Request if "main" branch is being deleted
     * @param project Delete a database branch in this project
     * @param branch Name of the database branch to delete. <p></p>**Note**: `main` branch cannot be deleted, use DeleteProject instead
     * @param requestBody
     * @returns DeleteBranchResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDeleteBranch(
        project: string,
        branch: string,
        requestBody: DeleteBranchRequest,
    ): CancelablePromise<DeleteBranchResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/database/branches/{branch}/delete',
            path: {
                'project': project,
                'branch': branch,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Collections
     * List all the collections present in the project passed in the request.
     * @param project Project name whose db is under target to list collections.
     * @param branch Optionally specify a database branch name to perform operation on
     * @returns ListCollectionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisListCollections(
        project: string,
        branch?: string,
    ): CancelablePromise<ListCollectionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/database/collections',
            path: {
                'project': project,
            },
            query: {
                'branch': branch,
            },
        });
    }

    /**
     * Describe database
     * This API returns information related to the project along with all the collections inside the project.
     * This can be used to retrieve the size of the project or to retrieve schemas, branches and the size of all the collections present in this project.
     * @param project Project name whose db is under target to get description.
     * @param requestBody
     * @returns DescribeDatabaseResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDescribeDatabase(
        project: string,
        requestBody: DescribeDatabaseRequest,
    ): CancelablePromise<DescribeDatabaseResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/describe',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Begin a transaction
     * Starts a new transaction and returns a transactional object. All reads/writes performed
     * within a transaction will run with serializable isolation. Tigris offers global transactions,
     * with ACID properties and strict serializability.
     * @param project Project name whose DB this transaction belongs to.
     * @param requestBody
     * @returns BeginTransactionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisBeginTransaction(
        project: string,
        requestBody: BeginTransactionRequest,
    ): CancelablePromise<BeginTransactionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/transactions/begin',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Commit a Transaction
     * Atomically commit all the changes performed in the context of the transaction. Commit provides all
     * or nothing semantics by ensuring no partial updates are in the project due to a transaction failure.
     * @param project Project name whose DB this transaction belongs to.
     * @param requestBody
     * @returns CommitTransactionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisCommitTransaction(
        project: string,
        requestBody: CommitTransactionRequest,
    ): CancelablePromise<CommitTransactionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/transactions/commit',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Rollback a transaction
     * Rollback transaction discards all the changes
     * performed in the transaction
     * @param project Project name whose DB this transaction belongs to.
     * @param requestBody
     * @returns RollbackTransactionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisRollbackTransaction(
        project: string,
        requestBody: RollbackTransactionRequest,
    ): CancelablePromise<RollbackTransactionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/transactions/rollback',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
