import { Injectable, HttpService } from '@nestjs/common';
import { JobApiFactory } from './api/job-api.factory';
import { map } from 'rxjs/operators';
@Injectable()
export class JobSearchService {
    private jobApiProvider;
    constructor(private jobApiFactory:JobApiFactory, private httpService: HttpService){
        
    }

    public getJobsFromApi(queryParams: any) {
        this.jobApiProvider = this.jobApiFactory.getApiInstance();
        return this.jobApiProvider.getJobs(queryParams);
    }

}
