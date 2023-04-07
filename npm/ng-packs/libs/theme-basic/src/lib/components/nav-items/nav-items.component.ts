import { AuthService, ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'lopos-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.less'],
})
export class NavItemsComponent {
  constructor(
    private configState: ConfigStateService,
    private authService: AuthService,
    private modal: NzModalService
  ) {}

  currentUser: CurrentUserDto = this.configState.getOne('currentUser');

  public logout() {
    this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确定退出当前账号？',
      nzOnOk: () => {
        this.authService.logout();
        this.authService.navigateToLogin();
      },
    });
  }
}
