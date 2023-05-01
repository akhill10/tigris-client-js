/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionInfo } from './CollectionInfo';

export type ListCollectionsResponse = {
    /**
     * List of the collections info in the database.
     */
    collections?: Array<CollectionInfo>;
};

