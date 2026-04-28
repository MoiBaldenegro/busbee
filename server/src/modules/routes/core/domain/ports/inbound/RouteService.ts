import { Route } from '../../schemas/Route';
import { CreateRouteDTO, UpdateRouteDTO } from '../../shared/dtos/Routes.dto';

export interface RouteService {
  createRoute(routeData: CreateRouteDTO): Promise<Route>;
  getRouteById(routeId: string): Promise<Route | null>;
  updateRoute(routeId: string, updateData: UpdateRouteDTO): Promise<Route>;
  deleteRoute(routeId: string): Promise<void>;
}
