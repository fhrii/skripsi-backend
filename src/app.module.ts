import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import appConfig from './common/config/app.config';
import { HttpExceptionFilter } from './common/filter/http_exception.filter';
import { ValidationPipe } from './common/pipe/validation.pipe';
import { DetectorModule } from './module/detector/detector.module';
import { FruitModule } from './module/fruit/fruit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    FruitModule,
    DetectorModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
