import { Injectable } from "@nestjs/common";
import { ConfigService } from "../../config/config.service";

import { GitHubApiService } from "./github/github.api.service";
import { IndeedApiService } from "./indeed/indeed.api.service";

@Injectable()
export class JobApiFactory {
    constructor(private githubApi: GitHubApiService, 
        private indeedApi: IndeedApiService,
        private config: ConfigService) {

    }
    public getApiInstance() {
        const selectedApiProvider: string = this.config.get('ACTIVATED_JOB_SEARCH_PROVIDER');
        switch (selectedApiProvider) {
            case 'GITHUB':
                return this.githubApi;
                break;
            case 'INDEED':
                // For demo only, github is the only working example,
                // this is for multi provider demo.
                return this.indeedApi;
                break;
        }
    }
}