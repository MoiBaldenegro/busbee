import { Injectable } from '@nestjs/common';
import { TravelServiceContainer } from '../TravelServiceContainer';
import { TravelDomainService } from 'src/modules/travels/services/travelDomainService';
import { MockRepository } from '../../persitence/mock/mockRepository';
import { TravelRepository } from 'src/modules/travels/domain/repositories/travel.repository';
import { Travel } from 'src/modules/travels/domain/schemas/Travel';


@Injectable()
export class TravelService {
    _serviceContainer:TravelServiceContainer
    _travelService:TravelDomainService
    _repository:TravelRepository
    constructor() { 
       this._repository = new MockRepository()
       this._travelService = new TravelDomainService(this._repository)
       this._serviceContainer = new TravelServiceContainer(this._travelService)
    }
    async createTravel(data:Partial<Travel>) {
        return this._serviceContainer.create(data)
    }
    async findall() {
        return this._serviceContainer.findall();
    }
}
