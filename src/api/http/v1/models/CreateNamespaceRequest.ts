/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateNamespaceRequest = {
    /**
     * Optional: unique id
     */
    code?: number;
    /**
     * Optional: unique string id
     */
    id?: string;
    /**
     * Required: The display name for namespace.
     */
    name?: string;
};

