import { Component, Input } from '@angular/core';

@Component({
  selector: 'lopos-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
})
export class LogoComponent {
  @Input()
  color = '#fff';

  @Input()
  appName = '';
}
