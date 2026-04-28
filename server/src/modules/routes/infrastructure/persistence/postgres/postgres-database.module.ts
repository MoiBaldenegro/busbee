import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouteEntity } from './entities/Route.entity';
import { RouteStopEntity } from './entities/RouteStop.entity';
import { ScheduleEntity } from './entities/Schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [RouteEntity, RouteStopEntity, ScheduleEntity],
        synchronize: true,
      }),
    }),
  ],
})
export class PostgresDatabaseModule {}
