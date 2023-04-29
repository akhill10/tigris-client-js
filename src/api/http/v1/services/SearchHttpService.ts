/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateByIdRequest } from '../models/CreateByIdRequest';
import type { CreateByIdResponse } from '../models/CreateByIdResponse';
import type { CreateDocumentRequest } from '../models/CreateDocumentRequest';
import type { CreateDocumentResponse } from '../models/CreateDocumentResponse';
import type { CreateOrReplaceDocumentRequest } from '../models/CreateOrReplaceDocumentRequest';
import type { CreateOrReplaceDocumentResponse } from '../models/CreateOrReplaceDocumentResponse';
import type { CreateOrUpdateIndexRequest } from '../models/CreateOrUpdateIndexRequest';
import type { CreateOrUpdateIndexResponse } from '../models/CreateOrUpdateIndexResponse';
import type { DeleteByQueryRequest } from '../models/DeleteByQueryRequest';
import type { DeleteByQueryResponse } from '../models/DeleteByQueryResponse';
import type { DeleteDocumentRequest } from '../models/DeleteDocumentRequest';
import type { DeleteDocumentResponse } from '../models/DeleteDocumentResponse';
import type { DeleteIndexRequest } from '../models/DeleteIndexRequest';
import type { DeleteIndexResponse } from '../models/DeleteIndexResponse';
import type { GetDocumentResponse } from '../models/GetDocumentResponse';
import type { GetIndexResponse } from '../models/GetIndexResponse';
import type { ListIndexesResponse } from '../models/ListIndexesResponse';
import type { SearchIndexRequest } from '../models/SearchIndexRequest';
import type { SearchIndexResponse } from '../models/SearchIndexResponse';
import type { Status } from '../models/Status';
import type { UpdateDocumentRequest } from '../models/UpdateDocumentRequest';
import type { UpdateDocumentResponse } from '../models/UpdateDocumentResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SearchHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List search indexes
     * @param project Tigris project name.
     * @param filterType An index can be either managed by user explicitly then the type is set as "user" or the index is backed by Tigris collection. In case it is backed by Tigris collection the type is "tigris".
     * @param filterCollection Applicable only in case index is backed by Tigris collection.
     * @param filterBranch Applicable only in case index is backed by Tigris collection. This is the database branch for the above collection. For primary database it can be omitted or "main" can be passed.
     * @returns ListIndexesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchListIndexes(
        project: string,
        filterType?: string,
        filterCollection?: string,
        filterBranch?: string,
    ): CancelablePromise<ListIndexesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/search/indexes',
            path: {
                'project': project,
            },
            query: {
                'filter.type': filterType,
                'filter.collection': filterCollection,
                'filter.branch': filterBranch,
            },
        });
    }

    /**
     * Get a single or multiple documents
     * Retrieves one or more documents by id. The response is an array of documents in the same order it is requests.
     * A null is returned for the documents that are not found.
     * @param project Tigris project name.
     * @param index index name where to create documents.
     * @param ids document id.
     * @returns GetDocumentResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchGet(
        project: string,
        index: string,
        ids?: Array<string>,
    ): CancelablePromise<GetDocumentResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/search/indexes/{index}/documents',
            path: {
                'project': project,
                'index': index,
            },
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Create or replace documents in an index
     * Creates or replaces one or more documents. Each document is a JSON object. A document is replaced
     * if it already exists. An "id" is generated automatically in case it is missing in the document. The
     * document is created if "id" doesn't exists otherwise it is replaced. Returns an array of status indicating
     * the status of each document.
     * @param project Project name whose db is under target to insert documents.
     * @param index index name where to create documents.
     * @param requestBody
     * @returns CreateOrReplaceDocumentResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchCreateOrReplace(
        project: string,
        index: string,
        requestBody: CreateOrReplaceDocumentRequest,
    ): CancelablePromise<CreateOrReplaceDocumentResponse | Status> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{project}/search/indexes/{index}/documents',
            path: {
                'project': project,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create multiple documents
     * Create is used for indexing a single or multiple documents. The API expects an array of documents.
     * Each document is a JSON object. An "id" is optional and the server can automatically generate it for you in
     * case it is missing. In cases when an id is provided in the document and the document already exists then that
     * document will not be indexed and in the response there will be an error corresponding to that document id other
     * documents will succeed. Returns an array of status indicating the status of each document.
     * @param project Tigris project name.
     * @param index index name where to create documents.
     * @param requestBody
     * @returns CreateDocumentResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchCreate(
        project: string,
        index: string,
        requestBody: CreateDocumentRequest,
    ): CancelablePromise<CreateDocumentResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/search/indexes/{index}/documents',
            path: {
                'project': project,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete documents by ids
     * Delete one or more documents by id. Returns an array of status indicating the status of each document. Each status
     * has an error field that is set to null in case document is deleted successfully otherwise it will non null with
     * an error code and message.
     * @param project The project name.
     * @param index The index name of the documents that needs deletion.
     * @param requestBody
     * @returns DeleteDocumentResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchDelete(
        project: string,
        index: string,
        requestBody: DeleteDocumentRequest,
    ): CancelablePromise<DeleteDocumentResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/search/indexes/{index}/documents',
            path: {
                'project': project,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update documents in an index
     * Updates one or more documents by "id". Each document is required to have the
     * "id" field in it. Returns an array of status indicating the status of each document. Each status
     * has an error field that is set to null in case document is updated successfully otherwise the error
     * field is set with a code and message.
     * @param project Project name whose db is under target to insert documents.
     * @param index Index name where to create documents.
     * @param requestBody
     * @returns UpdateDocumentResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchUpdate(
        project: string,
        index: string,
        requestBody: UpdateDocumentRequest,
    ): CancelablePromise<UpdateDocumentResponse | Status> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/projects/{project}/search/indexes/{index}/documents',
            path: {
                'project': project,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete documents by query
     * DeleteByQuery is used to delete documents that match the filter. A filter is required. To delete document by id,
     * you can pass the filter as follows ```{"id": "test"}```. Returns a count of number of documents deleted.
     * @param project The project name.
     * @param index The index name of the documents that needs deletion.
     * @param requestBody
     * @returns DeleteByQueryResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchDeleteByQuery(
        project: string,
        index: string,
        requestBody: DeleteByQueryRequest,
    ): CancelablePromise<DeleteByQueryResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/search/indexes/{index}/documents/deleteByQuery',
            path: {
                'project': project,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Search Documents.
     * Searches an index for the documents matching the query. A search can be a term search or a phrase search.
     * Search API allows filtering the result set using filters as documented
     * <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>. You can also perform
     * a faceted search by passing the fields in the facet parameter. You can find more detailed documentation of the
     * Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.
     * @param project Project name whose db is under target to search documents from.
     * @param index The index name to search documents from.
     * @param requestBody
     * @returns SearchIndexResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchSearch(
        project: string,
        index: string,
        requestBody: SearchIndexRequest,
    ): CancelablePromise<SearchIndexResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/search/indexes/{index}/documents/search',
            path: {
                'project': project,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a single document
     * CreateById is used for indexing a single document. The API expects a single document. An "id" is optional
     * and the server can automatically generate it for you in case it is missing. In cases an id is provided in
     * the document and the document already exists then that document will not be indexed and an error is returned
     * with HTTP status code 409.
     * @param project Tigris project name.
     * @param index index name where to create document.
     * @param id document id.
     * @param requestBody
     * @returns CreateByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchCreateById(
        project: string,
        index: string,
        id: string,
        requestBody: CreateByIdRequest,
    ): CancelablePromise<CreateByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/search/indexes/{index}/documents/{id}',
            path: {
                'project': project,
                'index': index,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get information about a search index
     * @param project Tigris project name.
     * @param name index name.
     * @returns GetIndexResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchGetIndex(
        project: string,
        name: string,
    ): CancelablePromise<GetIndexResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/search/indexes/{name}',
            path: {
                'project': project,
                'name': name,
            },
        });
    }

    /**
     * Creates or updates search index
     * @param project Tigris project name.
     * @param name search index name.
     * @param requestBody
     * @returns CreateOrUpdateIndexResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchCreateOrUpdateIndex(
        project: string,
        name: string,
        requestBody: CreateOrUpdateIndexRequest,
    ): CancelablePromise<CreateOrUpdateIndexResponse | Status> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{project}/search/indexes/{name}',
            path: {
                'project': project,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes search index
     * @param project Tigris project name.
     * @param name index name.
     * @param requestBody
     * @returns DeleteIndexResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public searchDeleteIndex(
        project: string,
        name: string,
        requestBody: DeleteIndexRequest,
    ): CancelablePromise<DeleteIndexResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/search/indexes/{name}',
            path: {
                'project': project,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
