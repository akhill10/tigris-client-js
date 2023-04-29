/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectRequest } from '../models/CreateProjectRequest';
import type { CreateProjectResponse } from '../models/CreateProjectResponse';
import type { DeleteProjectRequest } from '../models/DeleteProjectRequest';
import type { DeleteProjectResponse } from '../models/DeleteProjectResponse';
import type { ListProjectsResponse } from '../models/ListProjectsResponse';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectsHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Projects
     * List returns all the projects.
     * @returns ListProjectsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisListProjects(): CancelablePromise<ListProjectsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects',
        });
    }

    /**
     * Create Project
     * Creates a new project. Returns an AlreadyExists error with a status code 409 if the project already exists.
     * @param project Create project with this name.
     * @param requestBody
     * @returns CreateProjectResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisCreateProject(
        project: string,
        requestBody: CreateProjectRequest,
    ): CancelablePromise<CreateProjectResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{project}/create',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Project and all resources under project
     * Delete Project deletes all the collections in this project along with all of the documents, and associated metadata for these collections.
     * @param project Delete Project with this name. <p></p>**Note**: Deletes all resources under this project. Use with caution.
     * @param requestBody
     * @returns DeleteProjectResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public tigrisDeleteProject(
        project: string,
        requestBody: DeleteProjectRequest,
    ): CancelablePromise<DeleteProjectResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{project}/delete',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
