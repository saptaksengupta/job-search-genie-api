import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { JobSearchModule } from './job-search/job-search.module';
import { APP_FILTER } from '@nestjs/core';

import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  imports: [ConfigModule, JobSearchModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ],
})
export class AppModule {
}
