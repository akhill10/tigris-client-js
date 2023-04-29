/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildCollectionIndexRequest } from '../models/BuildCollectionIndexRequest';
import type { BuildCollectionIndexResponse } from '../models/BuildCollectionIndexResponse';
import type { CountRequest } from '../models/CountRequest';
import type { CountResponse } from '../models/CountResponse';
import type { CreateOrUpdateCollectionRequest } from '../models/CreateOrUpdateCollectionRequest';
import type { CreateOrUpdateCollectionResponse } from '../models/CreateOrUpdateCollectionResponse';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { DescribeCollectionRequest } from '../models/DescribeCollectionRequest';
import type { DescribeCollectionResponse } from '../models/DescribeCollectionResponse';
import type { DropCollectionRequest } from '../models/DropCollectionRequest';
import type { DropCollectionResponse } from '../models/DropCollectionResponse';
import type { ExplainResponse } from '../models/ExplainResponse';
import type { ImportRequest } from '../models/ImportRequest';
import type { ImportResponse } from '../models/ImportResponse';
import type { InsertRequest } from '../models/InsertRequest';
import type { InsertResponse } from '../models/InsertResponse';
import type { ReadRequest } from '../models/ReadRequest';
import type { ReplaceRequest } from '../models/ReplaceRequest';
import type { ReplaceResponse } from '../models/ReplaceResponse';
import type { SearchRequest } from '../models/SearchRequest';
import type { Status } from '../models/Status';
import type { StreamingReadResponse } from '../models/StreamingReadResponse';
import type { StreamingSearchResponse } from '../models/StreamingSearchResponse';
import type { UpdateRequest } from '../models/UpdateRequest';
import type { UpdateResponse } from '../models/UpdateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CollectionsHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create or update a collection
     * Creates a new collection or atomically upgrades the collection to the new schema provided in the request.
     * Schema changes are applied atomically and immediately without any downtime.
     * Tigris Offers two types of collections: <p></p>
     * <li> `DOCUMENTS`: Offers rich CRUD APIs.
     * <li> `MESSAGES`: Offers event streaming APIs.
     * @param project Project name whose db is under target to create or update collection.
     * @param collection Collection name to create.
     * @param requestBody
     * @returns CreateOrUpdateCollectionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisCreateOrUpdateCollection(
        project: string,
        collection: string,
        requestBody: CreateOrUpdateCollectionRequest,
    ): CancelablePromise<CreateOrUpdateCollectionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/createOrUpdate',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Describe Collection
     * Returns the information related to the collection. This can be used to retrieve the schema or size of the collection.
     * @param project Project name whose db is under target to get description of its collection.
     * @param collection Name of the collection.
     * @param requestBody
     * @returns DescribeCollectionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDescribeCollection(
        project: string,
        collection: string,
        requestBody: DescribeCollectionRequest,
    ): CancelablePromise<DescribeCollectionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/describe',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Count Documents
     * Count returns the number of documents in the collection. The filter parameter
     * can be used to select which documents contribute to the count. An empty filter means
     * count all documents in the collection.
     * @param project Project name whose db is under target to count documents from.
     * @param collection Collection name to count documents from.
     * @param requestBody
     * @returns CountResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisCount(
        project: string,
        collection: string,
        requestBody: CountRequest,
    ): CancelablePromise<CountResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/count',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Documents
     * Delete a range of documents in the collection using the condition provided in the filter.
     * @param project Project name whose db is under target to delete documents.
     * @param collection Collection name where to insert documents.
     * @param requestBody
     * @returns DeleteResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDelete(
        project: string,
        collection: string,
        requestBody: DeleteRequest,
    ): CancelablePromise<DeleteResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/delete',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Explain Read Documents
     * Explain takes the same parameters as Read and returns how the Tigris Query Planner would process the
     * response
     * @param project Project name whose db is under target to read documents from.
     * @param collection Collection name to read documents from.
     * @param requestBody
     * @returns ExplainResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisExplain(
        project: string,
        collection: string,
        requestBody: ReadRequest,
    ): CancelablePromise<ExplainResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/explain',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Import Documents
     * Imports documents into the collection.
     *
     * It automatically:
     * * Detects the schema of the documents in the batch
     * * Evolves the schema as soon as it's backward compatible
     * * Creates collection with inferred schema (if requested)
     * @param project Project name whose db is under target to import documents.
     * @param collection Collection name where to import documents.
     * @param requestBody
     * @returns ImportResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisImport(
        project: string,
        collection: string,
        requestBody: ImportRequest,
    ): CancelablePromise<ImportResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/import',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Index all documents in the collection
     * Index Collection will do a full scan off all documents in the collection and rebuild
     * all indexes in the collection
     * @param project Project name whose db is under target to index documents.
     * @param collection Name of the collection.
     * @param requestBody
     * @returns BuildCollectionIndexResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisBuildCollectionIndex(
        project: string,
        collection: string,
        requestBody: BuildCollectionIndexRequest,
    ): CancelablePromise<BuildCollectionIndexResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/index',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Insert Documents
     * Inserts new documents in the collection and returns an AlreadyExists error if any of the documents
     * in the request already exists. Insert provides idempotency by returning an error if the document
     * already exists. To replace documents, use REPLACE API instead of INSERT.
     * @param project Project name whose db is under target to insert documents.
     * @param collection Collection name where to insert documents.
     * @param requestBody
     * @returns InsertResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisInsert(
        project: string,
        collection: string,
        requestBody: InsertRequest,
    ): CancelablePromise<InsertResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/insert',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Read Documents
     * Reads a range of documents from the collection, or messages from a collection in case of event streaming. Tigris does not require you to
     * index any fields and automatically index all the fields which means you can filter by any field in the document.
     * An empty filter will trigger reading all the documents inside this collection. The API supports pagination that
     * can be used by passing `Limit/Skip` parameters. The `skip` parameter skips the number of documents from the start and
     * the `limit` parameter is used to specify the number of documents to read. You can find more detailed documentation
     * of the Read API <a href="https://docs.tigrisdata.com/overview/query" title="here">here</a>.
     * @param project Project name whose db is under target to read documents from.
     * @param collection Collection name to read documents from.
     * @param requestBody
     * @returns StreamingReadResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisRead(
        project: string,
        collection: string,
        requestBody: ReadRequest,
    ): CancelablePromise<StreamingReadResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/read',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Insert or Replace Documents
     * Inserts the documents or replaces the existing documents in the collections.
     * @param project Project name whose db is under target to replace documents.
     * @param collection Collection name where to replace documents.
     * @param requestBody
     * @returns ReplaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisReplace(
        project: string,
        collection: string,
        requestBody: ReplaceRequest,
    ): CancelablePromise<ReplaceResponse | Status> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/replace',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Search Documents.
     * Searches a collection for the documents matching the query, or messages in case of event streaming. A search can be
     * a term search or a phrase search. Search API allows filtering the result set using filters as documented <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>.
     * You can also perform a faceted search by passing the fields in the facet parameter.
     * You can find more detailed documentation of the Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.
     * @param project Project name whose db is under target to search documents from.
     * @param collection Collection name to search documents from.
     * @param requestBody
     * @returns StreamingSearchResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisSearch(
        project: string,
        collection: string,
        requestBody: SearchRequest,
    ): CancelablePromise<StreamingSearchResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/search',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Documents.
     * Update a range of documents in the collection using the condition provided in the filter.
     * @param project Project name whose db is under target  to update documents
     * @param collection Collection name where to update documents
     * @param requestBody
     * @returns UpdateResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisUpdate(
        project: string,
        collection: string,
        requestBody: UpdateRequest,
    ): CancelablePromise<UpdateResponse | Status> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{project}/database/collections/{collection}/documents/update',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Drop Collection
     * Drops the collection inside this project. This API deletes all of the
     * documents inside this collection and any metadata associated with it.
     * @param project Project name whose db is under target to delete collection.
     * @param collection Collection name to delete.
     * @param requestBody
     * @returns DropCollectionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDropCollection(
        project: string,
        collection: string,
        requestBody: DropCollectionRequest,
    ): CancelablePromise<DropCollectionResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/database/collections/{collection}/drop',
            path: {
                'project': project,
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
