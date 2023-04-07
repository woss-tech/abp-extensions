import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  hmr: false,
  application: {
    baseUrl,
    name: 'AbpZero',
    logoUrl: '',
  },
  oAuthConfig: {
    // issuer: 'http://127.0.0.1:44330/',
    issuer: 'http://identity.swx.com/',
    redirectUri: baseUrl,
    // responseType: 'code',
    clientId: 'WebApp',
    scope: 'offline_access administration identity',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://app.anchor.com',
      // url: 'http://127.0.0.1:44353',
      rootNamespace: 'AdministrationService',
    },
    AbpIdentity: {
      url: 'http://app.anchor.com',
      rootNamespace: 'identity',
    },
  },
} as Environment;
