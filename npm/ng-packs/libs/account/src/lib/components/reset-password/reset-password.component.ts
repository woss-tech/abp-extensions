import { ResetPasswordDto } from './../../proxy/volo/abp/account/models';
import { FormComponentBase } from '@lopos/ng.core.extension';
import { AbpValidators } from '@lopos/ng.core.extension';
import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { AccountService } from '../../proxy/auth-server/host';
import { Router } from '@angular/router';

@Component({
  selector: 'lopos-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.less'],
})
export class ResetPasswordComponent extends FormComponentBase {
  resetPasswordForm = this.fb.group({
    userId: [null, [Validators.required]],
    resetToken: [null, [Validators.required]],
    password: [null, [Validators.required, AbpValidators.password()]],
    repeatPassword: [null, [Validators.required, AbpValidators.password()]],
  });

  constructor(
    injector: Injector,
    private accountService: AccountService,
    private router: Router
  ) {
    super(injector);
  }

  resetPassword() {
    if (!this.resetPasswordForm.valid) {
      return;
    }
    const input = this.resetPasswordForm.value as unknown as ResetPasswordDto;
    this.accountService.resetPassword(input).subscribe(() => {
      this.messageService.success('密码重置成功');
      setTimeout(() => {
        this.router.navigate(['/account/login']);
      }, 1600);
    });
  }
}
