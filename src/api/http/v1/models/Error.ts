/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The Error type defines a logical error model
 */
export type Error = {
    /**
     * The status code is a short, machine parsable string, which uniquely identifies the error type. Tigris to HTTP code mapping [here](/reference/http-code)
     */
    code?: 'OK' | 'CANCELLED' | 'UNKNOWN' | 'INVALID_ARGUMENT' | 'DEADLINE_EXCEEDED' | 'NOT_FOUND' | 'ALREADY_EXISTS' | 'PERMISSION_DENIED' | 'RESOURCE_EXHAUSTED' | 'FAILED_PRECONDITION' | 'ABORTED' | 'OUT_OF_RANGE' | 'UNIMPLEMENTED' | 'INTERNAL' | 'UNAVAILABLE' | 'DATA_LOSS' | 'UNAUTHENTICATED' | 'CONFLICT' | 'BAD_GATEWAY' | 'METHOD_NOT_ALLOWED' | 'CONTENT_TOO_LARGE';
    /**
     * A developer-facing descriptive error message
     */
    message?: string;
};

