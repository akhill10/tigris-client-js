/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExplainResponse = {
    /**
     * The collection that the explain response is run against
     */
    collection?: string;
    /**
     * The Type of read can be either Scan or Secondary Index
     */
    read_type?: string;
    /**
     * The filter used in the query
     */
    filter?: string;
    /**
     * The type of sort used
     */
    sorting?: string;
    /**
     * the key range
     */
    key_range?: Array<string>;
    /**
     * the name of the field
     */
    field?: string;
};

