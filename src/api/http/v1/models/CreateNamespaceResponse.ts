/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamespaceInfo } from './NamespaceInfo';

export type CreateNamespaceResponse = {
    /**
     * A detailed response message.
     */
    message?: string;
    /**
     * An enum with value set as "created".
     */
    status?: string;
    namespace?: NamespaceInfo;
};

