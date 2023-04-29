/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Message = {
    /**
     * an optional id if idempotency is needed to ensure only a single time message is published during retries. If not specified then server will automatically add an id to message.
     */
    id?: string;
    name?: string;
    sequence?: string;
    data?: string;
};

