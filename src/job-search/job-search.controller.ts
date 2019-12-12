import { Controller, Get, Req, Query, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { Request, response } from 'express';
import { JobSearchService } from './job-search.service';

@Controller('jobs')
export class JobSearchController {
    constructor(private jobSearchService: JobSearchService, private httpService: HttpService) {}
    
    @Get('/search')
    searchJobs(@Req() request: Request, @Query('location') location: string) {

        if (!location) {
            throw new HttpException('Location Must be there in the request', HttpStatus.BAD_REQUEST);
        }

        return this.jobSearchService.getJobsFromApi({ location });
    }

}
