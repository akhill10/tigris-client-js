/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocStatus } from './DocStatus';

export type UpdateDocumentResponse = {
    /**
     * An array of statuses of all the documents received in the request. Order is same as it is received in the request. Each item of this array has an “id” and “error” key. Id is set as document id and error will be null in case of success, otherwise error is set with an error code and message.
     */
    status?: Array<DocStatus>;
};

