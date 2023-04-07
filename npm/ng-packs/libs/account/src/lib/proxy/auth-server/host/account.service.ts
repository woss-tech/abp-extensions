import type { EmailConfirmationDto, LoginResult, ResendSendEmailConfirmationDto, UserLoginInfo } from './models/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IdentityResult } from '../../microsoft/asp-net-core/identity/models';
import type { RegisterDto, ResetPasswordDto, SendPasswordResetCodeDto } from '../../volo/abp/account/models';
import type { IdentityUserDto } from '../../volo/abp/identity/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiName = 'AbpAccount';

  checkPasswordByLogin = (login: UserLoginInfo) =>
    this.restService.request<any, LoginResult>({
      method: 'POST',
      url: '/api/account/check-password',
      body: login,
    },
    { apiName: this.apiName });

  confirmEmailByInput = (input: EmailConfirmationDto) =>
    this.restService.request<any, IdentityResult>({
      method: 'POST',
      url: '/api/account/email-confirmation',
      body: input,
    },
    { apiName: this.apiName });

  loginByLogin = (login: UserLoginInfo) =>
    this.restService.request<any, LoginResult>({
      method: 'POST',
      url: '/api/account/login',
      body: login,
    },
    { apiName: this.apiName });

  logout = () =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/account/logout',
    },
    { apiName: this.apiName });

  register = (input: RegisterDto) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'POST',
      url: '/api/account/register',
      body: input,
    },
    { apiName: this.apiName });

  resendSendEmailConfirmationByInput = (input: ResendSendEmailConfirmationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/account/resend-email-confirmation-code',
      body: input,
    },
    { apiName: this.apiName });

  resetPassword = (input: ResetPasswordDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/account/reset-password',
      body: input,
    },
    { apiName: this.apiName });

  sendPasswordResetCode = (input: SendPasswordResetCodeDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/account/send-password-reset-code',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
