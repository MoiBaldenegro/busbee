import { Module } from '@nestjs/common';
import { TravelController } from './travels/infrastructure/presentation/controllers/travel.controller';
import { TravelService } from './travels/infrastructure/presentation/service/travel.service';

@Module({
  controllers: [TravelController],
  providers: [TravelService]
})
export class TravelsModule {}
