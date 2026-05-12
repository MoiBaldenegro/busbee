import { Module } from '@nestjs/common';
import { TravelsModule } from './modules/travels/travels.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { GlobalConfigModule } from './config/global.config.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TravelsModule, VehiclesModule, GlobalConfigModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [],
  providers: [],
})
export class AppModule {}
