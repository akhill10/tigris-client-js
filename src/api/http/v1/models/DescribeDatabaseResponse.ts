/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionDescription } from './CollectionDescription';
import type { DatabaseMetadata } from './DatabaseMetadata';

/**
 * A detailed description of the database and all the associated collections. Description of the collection includes schema details as well.
 */
export type DescribeDatabaseResponse = {
    metadata?: DatabaseMetadata;
    /**
     * A detailed description about all the collections. The description returns collection metadata and the schema.
     */
    collections?: Array<CollectionDescription>;
    /**
     * Sum of all the collections sizes present in this database
     */
    size?: number;
    /**
     * List of all the branches in this database
     */
    branches?: Array<string>;
};

