import { APP_ROUTE_PROVIDER } from './route.provider';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { AccountModule } from '@lopos/ng.account';
import { IdentityModule } from '@lopos/ng.identity';
import { ThemeBasicModule } from '@lopos/ng.theme.basic';
import { ThemeSharedModule } from '@lopos/ng.theme.shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreExtensionModule } from '@lopos/ng.core.extension';

import { environment } from '../environments/environment';
import { registerLocale } from '@abp/ng.core/locale';

import { registerLocaleData } from '@angular/common';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale({
        cultureNameLocaleFileMap: { 'zh-CN': 'zh-Hans' },
      }),
    }),
    CoreExtensionModule,
    ThemeSharedModule.forRoot(),
    ThemeBasicModule.forRoot(),
    IdentityModule.forRoot(),
    AccountModule.forRoot(),
  ],
  providers: [
    APP_ROUTE_PROVIDER,
    {
      provide: NZ_I18N,
      useValue: zh_CN,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
