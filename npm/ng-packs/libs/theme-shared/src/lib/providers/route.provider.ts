import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { ThemeSharedRouteNames } from '../enums/route-names';

export const THEME_SHARED_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: undefined,
        name: ThemeSharedRouteNames.Administration,
        iconClass: 'tool',
        order: 100,
      },
    ]);
  };
}
