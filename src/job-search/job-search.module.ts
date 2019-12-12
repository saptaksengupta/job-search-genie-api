import { Module, HttpModule } from '@nestjs/common';
import { JobSearchService } from './job-search.service';
import { JobSearchController } from './job-search.controller';
import { JobApiFactory } from './api/job-api.factory';

import { GitHubApiService } from './api/github/github.api.service';
import { IndeedApiService } from './api/indeed/indeed.api.service';

@Module({
  imports: [HttpModule],
  providers: [JobSearchService, JobApiFactory, GitHubApiService, IndeedApiService],
  controllers: [JobSearchController]
})
export class JobSearchModule {}
