/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionCtx } from './TransactionCtx';

/**
 * Start transaction returns transaction context  which uniquely identifies the transaction
 */
export type BeginTransactionResponse = {
    tx_ctx?: TransactionCtx;
};

