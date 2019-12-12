import { Injectable } from '@nestjs/common';
import { IJobApi } from '../../../interfaces/job-api-methods';
import { Observable } from 'rxjs';

@Injectable()
export class IndeedApiService implements IJobApi{

    public getJobs(): Observable<any> {
        // make rest call to get the job data...
        return;
    }

}
