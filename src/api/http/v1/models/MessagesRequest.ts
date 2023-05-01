/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Message } from './Message';

export type MessagesRequest = {
    project?: string;
    channel?: string;
    messages?: Array<Message>;
};

