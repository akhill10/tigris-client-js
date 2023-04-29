/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetRTChannelResponse } from '../models/GetRTChannelResponse';
import type { GetRTChannelsResponse } from '../models/GetRTChannelsResponse';
import type { ListSubscriptionResponse } from '../models/ListSubscriptionResponse';
import type { MessagesRequest } from '../models/MessagesRequest';
import type { MessagesResponse } from '../models/MessagesResponse';
import type { PresenceResponse } from '../models/PresenceResponse';
import type { ReadMessagesResponse } from '../models/ReadMessagesResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RealtimeHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all channels for your application project
     * @param project
     * @returns GetRTChannelsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public realtimeGetRtChannels(
        project: string,
    ): CancelablePromise<GetRTChannelsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/realtime/channels',
            path: {
                'project': project,
            },
        });
    }

    /**
     * Get the details about a channel
     * @param project
     * @param channel
     * @returns GetRTChannelResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public realtimeGetRtChannel(
        project: string,
        channel: string,
    ): CancelablePromise<GetRTChannelResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/realtime/channels/{channel}',
            path: {
                'project': project,
                'channel': channel,
            },
        });
    }

    /**
     * Get all messages for a channel
     * @param project
     * @param channel
     * @param sessionId
     * @param socketId
     * @param event
     * @param start
     * @param end
     * @param limit
     * @returns ReadMessagesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public realtimeReadMessages(
        project: string,
        channel: string,
        sessionId?: string,
        socketId?: string,
        event?: string,
        start?: string,
        end?: string,
        limit?: number,
    ): CancelablePromise<ReadMessagesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/realtime/channels/{channel}/messages',
            path: {
                'project': project,
                'channel': channel,
            },
            query: {
                'session_id': sessionId,
                'socket_id': socketId,
                'event': event,
                'start': start,
                'end': end,
                'limit': limit,
            },
        });
    }

    /**
     * push messages to a single channel
     * @param project
     * @param channel
     * @param requestBody
     * @returns MessagesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public realtimeMessages(
        project: string,
        channel: string,
        requestBody: MessagesRequest,
    ): CancelablePromise<MessagesResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/realtime/channels/{channel}/messages',
            path: {
                'project': project,
                'channel': channel,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Presence about the channel
     * @param project
     * @param channel
     * @returns PresenceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public realtimePresence(
        project: string,
        channel: string,
    ): CancelablePromise<PresenceResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/realtime/channels/{channel}/presence',
            path: {
                'project': project,
                'channel': channel,
            },
        });
    }

    /**
     * Get the subscriptions details about a channel
     * @param project
     * @param channel
     * @param pageSize
     * @param page
     * @returns ListSubscriptionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public realtimeListSubscriptions(
        project: string,
        channel: string,
        pageSize?: number,
        page?: number,
    ): CancelablePromise<ListSubscriptionResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{project}/realtime/channels/{channel}/subscriptions',
            path: {
                'project': project,
                'channel': channel,
            },
            query: {
                'page_size': pageSize,
                'page': page,
            },
        });
    }

}
