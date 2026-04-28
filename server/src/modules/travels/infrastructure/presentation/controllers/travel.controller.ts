import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { TravelServiceContainer } from '../TravelServiceContainer';
import { TravelService } from '../service/travel.service';
import { Travel } from 'src/modules/travels/domain/schemas/Travel';

@Controller('travel')
export class TravelController {
  constructor(private service: TravelService) {}
  //127.0.0.1:3000/travel/create verb= post();

  @Post('create')
  async createTravel(@Body() data: Partial<Travel>) {
    try {
      return this.service.createTravel(data);
    } catch (e) {
      throw new InternalServerErrorException('Error creating travel');
    }
  }
  //localHost:3000/travel/findall verb? get()
  @Get('findall')
  async findallTravels() {
    try {
      return this.service.findall();
    } catch (e) {
      throw new InternalServerErrorException('Error creating travel');
    }
  }
}
