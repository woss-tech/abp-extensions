import { eLayoutType } from '@abp/ng.core';
import { Component } from '@angular/core';

@Component({
  selector: 'lopos-empty-layout',
  templateUrl: './empty-layout.component.html',
})
export class EmptyLayoutComponent {
  static type = eLayoutType.empty;
}
