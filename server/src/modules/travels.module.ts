import { Module } from '@nestjs/common';
import { TravelController } from './travels/infrastructure/presentation/controllers/travel.controller';
import { TravelService } from './travels/infrastructure/presentation/service/travel.service';
import { RoutesModule } from './routes/routes.module';

@Module({
  controllers: [TravelController],
  providers: [TravelService],
  imports: [RoutesModule],
})
export class TravelsModule {}
