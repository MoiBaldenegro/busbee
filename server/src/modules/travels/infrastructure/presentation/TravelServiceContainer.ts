import { Injectable } from '@nestjs/common';
import { Travel } from '../../domain/schemas/Travel';
import { TravelService } from '../../services/travel.service';
import { TravelContainer } from './controllers/travel.controller';

export class TravelServiceContainer implements TravelContainer {
  constructor(private service: TravelService) {}
  create(data: Partial<Travel>) {
    return this.service.createTravel(data);
  }
  findAll() {
    return this.service.listTravels();
  }
}
