import { Travel } from '../schemas/travel.schema';
import { TravelResponse } from '../types/TravelsResponse';

export interface TravelRepository {
  create(travel: Partial<Travel>): Promise<TravelResponse | Error>;
 // findById(id: string): Promise<Travel | null>;
  findAll(): Promise<Travel[]>;
  //update(travel: Travel): Promise<Travel>;
  //delete(id: string): Promise<void>;
}
