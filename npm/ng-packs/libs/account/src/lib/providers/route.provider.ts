import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { AccountRouteNames } from '../enums';

export const APP_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: undefined,
        name: AccountRouteNames.Account,
        invisible: true,
        layout: eLayoutType.account,
        order: 1,
      },
      {
        path: '/account/login',
        name: AccountRouteNames.Login,
        parentName: AccountRouteNames.Account,
        order: 1,
      },
      {
        path: '/account/register',
        name: AccountRouteNames.Register,
        parentName: AccountRouteNames.Account,
        order: 2,
      },
      {
        path: '/account/manage',
        name: AccountRouteNames.ManageProfile,
        parentName: AccountRouteNames.Account,
        layout: eLayoutType.application,
        order: 3,
      },
      {
        path: '/account/forgot-password',
        parentName: AccountRouteNames.Account,
        name: AccountRouteNames.ForgotPassword,
        invisible: true,
      },
      {
        path: '/account/reset-password',
        parentName: AccountRouteNames.Account,
        name: AccountRouteNames.ResetPassword,
        invisible: true,
      },
      {
        path: '/account/email-confirmation',
        parentName: undefined,
        layout: eLayoutType.empty,
        name: AccountRouteNames.EmailConfirmation,
        invisible: true,
      },
    ]);
  };
}
