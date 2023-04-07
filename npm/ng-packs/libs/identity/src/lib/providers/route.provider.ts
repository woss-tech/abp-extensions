import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { ThemeSharedRouteNames } from '@lopos/ng.theme.shared';
import { IdentityRouteNames } from '../enums';

export const IDENTITY_ROUTE_PROVIDERS = [
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
        name: IdentityRouteNames.IdentityManagement,
        parentName: ThemeSharedRouteNames.Administration,
        iconClass: 'idcard',
        layout: eLayoutType.application,
        order: 1,
      },
      {
        path: '/identity/roles',
        name: IdentityRouteNames.Roles,
        parentName: IdentityRouteNames.IdentityManagement,
        order: 1,
      },
      {
        path: '/identity/users',
        name: IdentityRouteNames.Users,
        parentName: IdentityRouteNames.IdentityManagement,
        order: 2,
      },
    ]);
  };
}
