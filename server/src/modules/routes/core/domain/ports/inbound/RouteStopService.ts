import { RouteStop } from '../../schemas/RouteStop';
import {
  CreateRouteStopDTO,
  UpdateRouteStopDTO,
} from '../../shared/dtos/RouteStop.dto';

export interface RouteStopService {
  createRouteStop(routeStopData: CreateRouteStopDTO): Promise<RouteStop>;
  getRouteStopById(routeStopId: string): Promise<RouteStop | null>;
  updateRouteStop(
    routeStopId: string,
    updateData: UpdateRouteStopDTO,
  ): Promise<RouteStop>;
  deleteRouteStop(routeStopId: string): Promise<void>;
  addRouteStopToRoute(
    routeId: string,
    routeStopData: CreateRouteStopDTO,
  ): Promise<RouteStop>;
  removeRouteStopFromRoute(routeId: string, routeStopId: string): Promise<void>;
}
