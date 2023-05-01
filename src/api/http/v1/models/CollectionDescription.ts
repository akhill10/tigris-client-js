/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionIndex } from './CollectionIndex';
import type { CollectionMetadata } from './CollectionMetadata';

export type CollectionDescription = {
    /**
     * Name of the collection.
     */
    collection?: string;
    metadata?: CollectionMetadata;
    /**
     * Collections schema
     */
    schema?: Record<string, any>;
    /**
     * Collection size in bytes
     */
    size?: number;
    /**
     * The index infromation
     */
    indexes?: Array<CollectionIndex>;
};

