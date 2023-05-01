/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ApplicationKeysHttpService } from './services/ApplicationKeysHttpService';
import { AuthenticationHttpService } from './services/AuthenticationHttpService';
import { BillingHttpService } from './services/BillingHttpService';
import { CacheHttpService } from './services/CacheHttpService';
import { CollectionsHttpService } from './services/CollectionsHttpService';
import { DatabaseHttpService } from './services/DatabaseHttpService';
import { ManagementHttpService } from './services/ManagementHttpService';
import { ObservabilityHttpService } from './services/ObservabilityHttpService';
import { ProjectsHttpService } from './services/ProjectsHttpService';
import { RealtimeHttpService } from './services/RealtimeHttpService';
import { SearchHttpService } from './services/SearchHttpService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class OpenApiClient {

    public readonly applicationKeys: ApplicationKeysHttpService;
    public readonly authentication: AuthenticationHttpService;
    public readonly billing: BillingHttpService;
    public readonly cache: CacheHttpService;
    public readonly collections: CollectionsHttpService;
    public readonly database: DatabaseHttpService;
    public readonly management: ManagementHttpService;
    public readonly observability: ObservabilityHttpService;
    public readonly projects: ProjectsHttpService;
    public readonly realtime: RealtimeHttpService;
    public readonly search: SearchHttpService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.preview.tigrisdata.cloud',
            VERSION: config?.VERSION ?? '0.0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.applicationKeys = new ApplicationKeysHttpService(this.request);
        this.authentication = new AuthenticationHttpService(this.request);
        this.billing = new BillingHttpService(this.request);
        this.cache = new CacheHttpService(this.request);
        this.collections = new CollectionsHttpService(this.request);
        this.database = new DatabaseHttpService(this.request);
        this.management = new ManagementHttpService(this.request);
        this.observability = new ObservabilityHttpService(this.request);
        this.projects = new ProjectsHttpService(this.request);
        this.realtime = new RealtimeHttpService(this.request);
        this.search = new SearchHttpService(this.request);
    }
}

