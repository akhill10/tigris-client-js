/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Error } from './Error';
import type { ReadResponse } from './ReadResponse';

export type StreamingReadResponse = {
    result?: ReadResponse;
    error?: Error;
};

