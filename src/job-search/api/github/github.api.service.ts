import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { IJobApi } from '../../../interfaces/job-api-methods';
import { API_CONFIG } from './config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GitHubApiService implements IJobApi {
    private baseUrl: string;
    constructor(private httpService: HttpService) {
        this.baseUrl = API_CONFIG.API_ENDPOINT_URL;
    }

    private getQueryParamsString(params) {
        let queryString = '?';
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                if (queryString === '?') {
                    queryString += `${key}=${params[key]}`;
                } else {
                    queryString += `&${key}=${params[key]}`;
                }
            }
        }

        return queryString;
    }

    private getUrlWithQueryString(url, queryString) {
        if (queryString) {
            url += queryString;
        }

        return url;
    }

    public getJobs(queryParams): Observable<any> {
        // make rest call to get the job data...
        let url = this.baseUrl;
        if (queryParams) {
            url = this.getUrlWithQueryString(url, this.getQueryParamsString(queryParams));
        }

        try {
            return this.httpService.get(url).pipe(
                map(resp => resp.data)
            )
        } catch (error) {
            throw new HttpException('rest call failed', error);
        }
    }

}
