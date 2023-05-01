/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collation } from './Collation';

export type SearchIndexRequest = {
    /**
     * Project name whose db is under target to search documents from.
     */
    project?: string;
    /**
     * The index name to search documents from.
     */
    index?: string;
    /**
     * Query string for searching across text fields
     */
    'q'?: string;
    /**
     * Array of fields to project search query against
     */
    search_fields?: Array<string>;
    /**
     * Filter stacks on top of query results to further narrow down the results. Similar to `ReadRequest.filter`
     */
    filter?: Record<string, any>;
    /**
     * Facet query to aggregate results on given fields. The field name for the facet search can be passed like this `{"brand": { "size": 10 }}` where the size controls the total facets for this field.
     */
    facet?: Record<string, any>;
    /**
     * Array of fields and corresponding sort orders to order the results `[{ "salary": "$desc" }]`
     */
    sort?: Array<Record<string, any>>;
    /**
     * Array of document field names to include in results. By default, all fields are included.
     */
    include_fields?: Array<string>;
    /**
     * Array of document field names to exclude from results. `include_fields`, if specified, takes precedence over `exclude_fields`.
     */
    exclude_fields?: Array<string>;
    /**
     * Optionally can set the number of hits to be returned per page, default is 20.
     */
    page_size?: number;
    /**
     * Optionally can specify the page to retrieve. If page is set then only hits for this page is returned
     */
    page?: number;
    collation?: Collation;
    /**
     * Group by can be used to group search results. For example, to group by city field the syntax would be: `{ "fields": ["city"]}`. Optionally a grouping limit can be set. By default it is 3 per group.
     */
    group_by?: string;
    /**
     * Vector is an object that is used for vector search. For example, to vector search on a "vec" field the syntax would be: `{ "vec": [0.34, 0.12, 0.95], "top_k": 10}`.
     */
    vector?: string;
};

