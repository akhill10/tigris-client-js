/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionOptions } from './TransactionOptions';

/**
 * Start new transaction in project specified by "project".
 */
export type BeginTransactionRequest = {
    options?: TransactionOptions;
    /**
     * Optionally specify a project branch name to perform operation on
     */
    branch?: string;
};

