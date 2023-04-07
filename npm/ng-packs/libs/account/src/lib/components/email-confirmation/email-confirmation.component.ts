import { EmailConfirmationDto } from './../../proxy/auth-server/host/models/models';
import { AccountService } from './../../proxy/auth-server/host/account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IdentityResult } from '../../proxy/microsoft/asp-net-core/identity';
import { EnvironmentService } from '@abp/ng.core';

@Component({
  selector: 'lopos-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.less'],
})
export class EmailConfirmationComponent implements OnInit {
  userId = '';
  confirmationToken = '';
  returnUrl = '';

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private notification: NzNotificationService,
    private environment: EnvironmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      this.userId = query['userId'];
      this.confirmationToken = query['confirmationToken'];
      this.returnUrl = query['returnUrl'];
      this.confirmEmail();
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  data: IdentityResult | undefined;

  get code() {
    if (this.data) {
      return this.data.errors[0].code;
    } else {
      return '';
    }
  }

  get description() {
    if (this.data) {
      return this.data.errors[0].description;
    } else {
      return '';
    }
  }

  confirmEmail() {
    this.accountService
      .confirmEmailByInput({
        userId: this.userId,
        token: this.confirmationToken,
      } as EmailConfirmationDto)
      .subscribe((res) => {
        this.data = res;
        if (res.succeeded && this.returnUrl != '') {
          setTimeout(() => {
            this.router.navigateByUrl(this.returnUrl);
          }, 1600);
        }
      });
  }

  resendEmail() {
    this.accountService
      .resendSendEmailConfirmationByInput({
        userId: this.userId,
        appName: this.environment.getEnvironment()?.application.name,
        returnUrl: this.environment.getEnvironment()?.application.baseUrl || '',
      })
      .subscribe((res) => {
        console.log(res);
        this.notification.success(
          '邮件发送成功',
          '邮箱地址确认邮件已发送，如未收到可先在‘垃圾邮件’中查看，如果你在几分钟内没有收到电子邮件,请重试.',
          {
            nzPlacement: 'topLeft',
          }
        );
      });
  }
}
