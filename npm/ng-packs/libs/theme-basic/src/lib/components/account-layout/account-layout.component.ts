import { eLayoutType } from '@abp/ng.core';
import { Component } from '@angular/core';

@Component({
  selector: 'lopos-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.less'],
})
export class AccountLayoutComponent {
  static type = eLayoutType.account;

  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
