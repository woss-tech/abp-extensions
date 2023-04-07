import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';

import { IdentityRoutingModule } from './identity-route.module';
import { CoreModule } from '@abp/ng.core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ThemeSharedModule } from '@lopos/ng.theme.shared';
import { IDENTITY_ROUTE_PROVIDERS } from './providers/route.provider';

import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RoleFormComponent } from './components/roles/role-form/role-form.component';
import { LockFormComponent } from './components/users/lock-form/lock-form.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';

@NgModule({
  declarations: [
    RolesComponent,
    UsersComponent,
    RoleFormComponent,
    LockFormComponent,
    UserFormComponent,
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    IdentityRoutingModule,
    NzTableModule,
    NzTagModule,
    NzButtonModule,
    NzDividerModule,
    NzSpaceModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzTypographyModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzModalModule,
    NzCheckboxModule,
    NzBadgeModule,
    NzDatePickerModule,
  ],
  exports: [],
})
export class IdentityModule {
  static forRoot(): ModuleWithProviders<IdentityModule> {
    return {
      ngModule: IdentityModule,
      providers: [IDENTITY_ROUTE_PROVIDERS],
    };
  }
}
