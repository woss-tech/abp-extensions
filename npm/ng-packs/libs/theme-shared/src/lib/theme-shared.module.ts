import { RootParams } from './models/common';
import { CoreModule, noop } from '@abp/ng.core';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { ErrorHandler } from './handlers/error.handler';

import { HttpErrorWrapperComponent } from './components/http-error-wrapper/http-error-wrapper.component';
import { THEME_SHARED_ROUTE_PROVIDERS } from './providers';
import {
  httpErrorConfigFactory,
  HTTP_ERROR_CONFIG,
} from './tokens/http-error.token';
import { CoreExtensionModule } from '@lopos/ng.core.extension';

@NgModule({
  declarations: [HttpErrorWrapperComponent],
  imports: [CoreModule, CoreExtensionModule, NzModalModule],
})
export class ThemeSharedModule {
  static forRoot(
    { httpErrorConfig } = {} as RootParams
  ): ModuleWithProviders<ThemeSharedModule> {
    return {
      ngModule: ThemeSharedModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [ErrorHandler],
          useFactory: noop,
        },
        THEME_SHARED_ROUTE_PROVIDERS,
        {
          provide: HTTP_ERROR_CONFIG,
          useValue: httpErrorConfig,
        },
        {
          provide: 'HTTP_ERROR_CONFIG',
          useFactory: httpErrorConfigFactory,
          deps: [HTTP_ERROR_CONFIG],
        },
      ],
    };
  }
}
