/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionOptions } from './CollectionOptions';

export type CreateOrUpdateCollectionRequest = {
    /**
     * The schema specifications are same as JSON schema specification defined <a href="https://json-schema.org/specification.html" title="here">here</a>.<p></p> Schema example: `{  "title": "user",  "description": "Collection of documents with details of users",  "properties": {    "id": {      "description": "A unique identifier for the user",      "type": "integer"    },    "name": {      "description": "Name of the user",      "type": "string",      "maxLength": 128    },    "balance": {      "description": "User account balance",      "type": "number"    }  },  "primary_key": ["id"] }`
     */
    schema?: Record<string, any>;
    /**
     * If set to `true` then the update schema request to the collection will fail by returning a conflict with HTTP Status code 409. The default is false.
     */
    only_create?: boolean;
    options?: CollectionOptions;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

