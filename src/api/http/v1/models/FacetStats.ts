/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Additional stats for faceted field
 */
export type FacetStats = {
    /**
     * Average of all values in a field. Only available for numeric fields
     */
    avg?: number;
    /**
     * Maximum of all values in a field. Only available for numeric fields
     */
    max?: number;
    /**
     * Minimum of all values in a field. Only available for numeric fields
     */
    min?: number;
    /**
     * Sum of all values in a field. Only available for numeric fields
     */
    sum?: number;
    /**
     * Total number of values in a field
     */
    count?: number;
};

