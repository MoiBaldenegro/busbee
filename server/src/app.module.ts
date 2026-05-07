import { Module } from '@nestjs/common';
import { TravelsModule } from './modules/travels/travels.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';

@Module({
  imports: [TravelsModule, VehiclesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
