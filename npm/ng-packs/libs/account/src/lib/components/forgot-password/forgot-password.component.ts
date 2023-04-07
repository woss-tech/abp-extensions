import { AccountService } from './../../proxy/auth-server/host/account.service';
import { Validators } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { FormComponentBase } from '@lopos/ng.core.extension';
import { SendPasswordResetCodeDto } from '../../proxy/volo/abp/account';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'lopos-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
})
export class ForgotPasswordComponent extends FormComponentBase {
  sendPasswordResetCodeForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    appName: ['Video-Mark', [Validators.required]],
  });

  constructor(
    injector: Injector,
    private accountService: AccountService,
    private notification: NzNotificationService
  ) {
    super(injector);
  }

  sendPasswordResetCode() {
    if (!this.sendPasswordResetCodeForm.valid) {
      return;
    }

    const input = this.sendPasswordResetCodeForm
      .value as unknown as SendPasswordResetCodeDto;

    this.accountService.sendPasswordResetCode(input).subscribe(() => {
      this.notification.success(
        '密码重置邮件已发送',
        '密码重置链接将发送到你的电子邮件以重置密码，如未收到可先在‘垃圾邮件’中查看，如果你在几分钟内没有收到电子邮件，请重试.',
        {
          nzPlacement: 'topLeft',
        }
      );
    });
  }
}
