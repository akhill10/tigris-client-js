/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOrUpdateIndexRequest = {
    /**
     * Tigris project name.
     */
    project?: string;
    /**
     * search index name.
     */
    name?: string;
    /**
     * schema of the index. The schema specifications are same as JSON schema specification defined <a href="https://json-schema.org/specification.html" title="here">here</a>.<p></p> Schema example: `{  "title": "ecommerce_index",  "description": "an ecommerce store search index",  "properties": {    "name": {      "description": "Name of the product",      "type": "string",      "maxLength": 128    },    "brand": {      "description": "Brand of the product",      "type": "string"    },    "price": {      "description": "Price of the product",      "type": "number"    }  } }`
     */
    schema?: Record<string, any>;
    /**
     * If set to `true` then a conflict with HTTP Status code 409 is returned if an index already exists. The default is false.
     */
    only_create?: boolean;
};

