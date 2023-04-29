/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateByIdRequest = {
    /**
     * Tigris project name.
     */
    project?: string;
    /**
     * index name where to create document.
     */
    index?: string;
    /**
     * document id.
     */
    id?: string;
    /**
     * A JSON document that needs to be indexed.
     */
    document?: Record<string, any>;
};

