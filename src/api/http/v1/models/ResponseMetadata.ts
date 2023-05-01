/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Has metadata related to the documents stored.
 */
export type ResponseMetadata = {
    /**
     * Time at which the document was inserted/replaced. Measured in nano-seconds since the Unix epoch.
     */
    created_at?: string;
    /**
     * Time at which the document was updated. Measured in nano-seconds since the Unix epoch.
     */
    updated_at?: string;
    /**
     * Time at which the document was deleted. Measured in nano-seconds since the Unix epoch.
     */
    deleted_at?: string;
};

