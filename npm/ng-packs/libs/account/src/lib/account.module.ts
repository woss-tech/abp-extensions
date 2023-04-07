import { CoreModule } from '@abp/ng.core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeSharedModule } from '@lopos/ng.theme.shared';

import { AccountRoutingModule } from './account-route.module';
import { APP_ROUTE_PROVIDER } from './providers';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';

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
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EmailConfirmationComponent,
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
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
    NzInputModule,
    NzCheckboxModule,
    NzAlertModule,
    NzNotificationModule,
  ],
  exports: [],
})
export class AccountModule {
  static forRoot(): ModuleWithProviders<AccountModule> {
    return {
      ngModule: AccountModule,
      providers: [APP_ROUTE_PROVIDER],
    };
  }
}
