import { Environment } from '@abp/ng.core';

const baseUrl = 'https://app.lopos.top';

export const environment = {
  production: false,
  hmr: false,
  application: {
    baseUrl,
    name: 'VideoMark',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://identity.lopos.top',
    redirectUri: baseUrl,
    clientId: 'Web',
    scope:
      'AdministrationService IdentityService address email offline_access openid phone profile role',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://app.lopos.top',
    },
    AbpAccount: {
      url: 'https://identity.lopos.top',
    },
  },
} as Environment;
