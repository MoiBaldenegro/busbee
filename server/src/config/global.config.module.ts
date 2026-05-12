import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TravelEntity } from 'src/modules/travels/infrastructure/postgres/entities/travel.entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('URL_DATABASE') || 'Default Error URL',
        entities: [TravelEntity],
        synchronize: true,
      }),
    }),
  ],
  // exports: databaseProviders,
})
export class GlobalConfigModule {}
