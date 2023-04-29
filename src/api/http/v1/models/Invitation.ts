/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Invitation = {
    /**
     * invited email address
     */
    email?: string;
    /**
     * invited user's role
     */
    role?: string;
    /**
     * status of invitation
     */
    status?: string;
    /**
     * invited namespace
     */
    tigris_namespace?: string;
    /**
     * invited namespace (display friendly)
     */
    tigris_namespace_name?: string;
    /**
     * created by sub
     */
    created_by?: string;
    /**
     * created by name (display friendly)
     */
    created_by_name?: string;
    /**
     * expiration time
     */
    expiration_time?: number;
};

