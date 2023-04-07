import { Component } from '@angular/core';

@Component({
  selector: 'lopos-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent {
  date = new Date();
}
