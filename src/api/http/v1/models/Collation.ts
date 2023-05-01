/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A collation allows you to specify string comparison rules. Default is case-sensitive, to override it you can set this option to 'ci' that will apply to all the text fields in the filters.
 */
export type Collation = {
    case?: string;
};

