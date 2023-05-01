/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionIndex } from './CollectionIndex';
import type { CollectionMetadata } from './CollectionMetadata';

/**
 * A detailed description of the collection. The description returns collection metadata and the schema.
 */
export type DescribeCollectionResponse = {
    /**
     * Name of the collection.
     */
    collection?: string;
    metadata?: CollectionMetadata;
    /**
     * Schema of this collection.
     */
    schema?: Record<string, any>;
    /**
     * The size of this collection in bytes.
     */
    size?: number;
    /**
     * The index infromation
     */
    indexes?: Array<CollectionIndex>;
};

