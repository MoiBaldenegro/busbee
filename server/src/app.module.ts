import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TravelsModule } from './modules/travels.module';
import { ScheduleRepositoryAdapter } from './modules/routes/infrastructure/adapters/ScheduleRepositoryAdapter';
import { RouteStopRepositoryAdapter } from './modules/routes/infrastructure/adapters/RouteStopRepositoryAdapter';
import { RouteRepositoryAdapter } from './modules/routes/infrastructure/adapters/RouteRepositoryAdapter';
import { CoreModule } from './modules/routes/core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TravelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
