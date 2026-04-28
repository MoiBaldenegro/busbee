import { CreateRouteDTO } from '../../../domain/shared/dtos/Routes.dto';
import { Route } from '../../../domain/schemas/Route';

export interface RouteApplication {
  createRoute(routeData: CreateRouteDTO): Promise<Route>;
  //   deleteRoute(routeId: string): Promise<void>;
}
