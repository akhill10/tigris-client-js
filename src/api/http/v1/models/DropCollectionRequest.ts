/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionOptions } from './CollectionOptions';

export type DropCollectionRequest = {
    options?: CollectionOptions;
    /**
     * Optionally specify a project branch name to perform operation on
     */
    branch?: string;
};

