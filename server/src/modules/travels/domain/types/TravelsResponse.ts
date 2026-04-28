import { Travel } from '../schemas/Travel';

export interface TravelResponse {
  message: string;
  succes: boolean;
  travel: Travel;
}
