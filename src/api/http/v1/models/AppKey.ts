/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An user AppKey
 */
export type AppKey = {
    /**
     * Generated client id
     */
    id?: string;
    /**
     * A human readable app name
     */
    name?: string;
    /**
     * A human readable app description
     */
    description?: string;
    /**
     * Generated app secret
     */
    secret?: string;
    /**
     * Created at
     */
    created_at?: number;
    /**
     * Created by
     */
    created_by?: string;
    /**
     * Updated at
     */
    updated_at?: number;
    /**
     * Updated by
     */
    updated_by?: string;
    /**
     * Project it belongs to
     */
    project?: string;
};

