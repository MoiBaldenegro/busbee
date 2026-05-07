import { Module, Provider } from '@nestjs/common';
import { TravelController } from './infrastructure/presentation/controllers/travel.controller';
import { MockRepository } from './infrastructure/persitence/mock/mockRepository';
import { TravelRepository } from './domain/repositories/travel.repository';
import { TravelDomainService } from './services/travelDomainService';
import type { TravelService } from './services/travel.service';
import { TravelServiceContainer } from './infrastructure/presentation/TravelServiceContainer';
import {
  TRAVEL_REPOSITORY_PROVIDER,
  TRAVEL_SERVICE_CONTAINER,
  TRAVEL_SERVICE_PROVIDER,
} from './travels.constants';

export const travelRepositoryProvider: Provider = {
  provide: TRAVEL_REPOSITORY_PROVIDER,
  useClass: MockRepository,
};
export const travelServiceProvider: Provider = {
  provide: TRAVEL_SERVICE_PROVIDER,
  useFactory: (repository: TravelRepository) => {
    return new TravelDomainService(repository);
  },
  inject: [TRAVEL_REPOSITORY_PROVIDER],
};
export const travelServiceContainer: Provider = {
  provide: TRAVEL_SERVICE_CONTAINER,
  useFactory: (service: TravelService) => {
    return new TravelServiceContainer(service);
  },
  inject: [TRAVEL_SERVICE_PROVIDER],
};

@Module({
  controllers: [TravelController],
  providers: [travelRepositoryProvider, travelServiceProvider, travelServiceContainer],
})
export class TravelsModule {}
