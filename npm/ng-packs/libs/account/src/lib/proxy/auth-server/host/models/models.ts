import type { LoginResultType } from './login-result-type.enum';

export interface EmailConfirmationDto {
  userId: string;
  token: string;
}

export interface LoginResult {
  result: LoginResultType;
  description?: string;
}

export interface ResendSendEmailConfirmationDto {
  userId: string;
  appName: string;
  returnUrl: string;
}

export interface UserLoginInfo {
  userNameOrEmailAddress: string;
  password: string;
  rememberMe: boolean;
}
