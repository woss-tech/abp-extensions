import { AbpValidators } from '@lopos/ng.core.extension';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RegisterDto } from './../../proxy/volo/abp/account/models';
import { AccountService } from './../../proxy/auth-server/host/account.service';
import { Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { FormComponentBase } from '@lopos/ng.core.extension';
import { EnvironmentService } from '@abp/ng.core';
import { Router } from '@angular/router';

@Component({
  selector: 'lopos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent extends FormComponentBase implements OnInit {
  registerForm = this.fb.group({
    userName: [null, [Validators.required, AbpValidators.username()]],
    emailAddress: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, AbpValidators.password()]],
    appName: ['Video-Mark', [Validators.required]],
    agree: [true, [Validators.required]],
  });

  constructor(
    injector: Injector,
    private accountService: AccountService,
    private notification: NzNotificationService,
    private environment: EnvironmentService,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.registerForm
      .get('appName')
      ?.setValue(this.environment.getEnvironment().application.name);
  }

  register() {
    console.log(this.registerForm);
    if (!this.registerForm.valid) {
      return;
    }

    const agree = this.registerForm.get('agree')?.value;
    if (agree == null || !agree) {
      this.messageService.info('注册需先同意服务协议和隐私政策');
      return;
    }

    this.isSubmitting = true;
    const input = this.registerForm.value as unknown as RegisterDto;
    this.accountService.register(input).subscribe(() => {
      this.isSubmitting = false;
      this.notification.success(
        '注册成功',
        '我们已向你的邮箱发送了一封邮箱地址确认邮件，如未收到可在‘垃圾邮件’中查看或登陆后重新发送',
        {
          nzPlacement: 'topRight',
        }
      );
      setTimeout(() => {
        this.router.navigate(['/account/login']);
      }, 1600);
    });
  }
}
