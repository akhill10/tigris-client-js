/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchInfo } from './BranchInfo';

export type ListBranchesResponse = {
    /**
     * List of all the branches in this database
     */
    branches?: Array<BranchInfo>;
};

