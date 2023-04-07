import { CoreModule } from '@abp/ng.core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeSharedModule } from '@lopos/ng.theme.shared';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { LogoComponent } from './components/logo/logo.component';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NavItemsComponent } from './components/nav-items/nav-items.component';
import { CoreExtensionModule } from '@lopos/ng.core.extension';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    AccountLayoutComponent,
    ApplicationLayoutComponent,
    EmptyLayoutComponent,
    LogoComponent,
    NavItemsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    CoreExtensionModule,
    ThemeSharedModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSpaceModule,
    NzAvatarModule,
    NzDropDownModule,
    NzModalModule,
    NzDividerModule,
    NzGridModule,
    NzTagModule,
    NzCarouselModule,
    NzMessageModule,
    NzButtonModule,
    NzFormModule,
    NzSpaceModule,
    NzToolTipModule,
  ],
  exports: [
    AccountLayoutComponent,
    ApplicationLayoutComponent,
    EmptyLayoutComponent,
    LogoComponent,
  ],
})
export class ThemeBasicModule {
  static forRoot(): ModuleWithProviders<ThemeBasicModule> {
    return {
      ngModule: ThemeBasicModule,
      providers: [BASIC_THEME_STYLES_PROVIDERS],
    };
  }
}
