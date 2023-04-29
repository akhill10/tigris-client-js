/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReadRequestOptions } from './ReadRequestOptions';

export type ReadRequest = {
    /**
     * Returns documents matching this filter. A filter can simply be a key, value pair where a key is the field name and the value would be the value for this field. Tigris also allows complex filtering by passing logical expressions. Logical filters are applied on two or more fields using `$or` and `$and`. A few examples of filters: <li> To read a user document where the id has a value 1: ```{"id": 1 }``` <li> To read all the user documents where the key "id" has a value 1 or 2 or 3: `{"$or": [{"id": 1}, {"id": 2}, {"id": 3}]}` Filter allows setting collation on an individual field level. To set collation for all the fields see options. The detailed documentation of the filter is <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>.
     */
    filter?: Record<string, any>;
    /**
     * To read specific fields from a document. Default is all.
     */
    fields?: Record<string, any>;
    options?: ReadRequestOptions;
    /**
     * Array of fields and corresponding sort orders to order the results. Ex: 1 `[{ "salary": "$desc" }]`, Ex: 2  `[{ "salary": "$asc"}]`
     */
    sort?: Array<Record<string, any>>;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

