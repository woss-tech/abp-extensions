import type { ChangePasswordDto } from './dto/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiName = 'AbpIdentity';

  lockByIdAndLockEndTime = (id: string, lockEndTime: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/user/${id}/lock/${lockEndTime}`,
    },
    { apiName: this.apiName });

  setPasswordByIdAndInput = (id: string, input: ChangePasswordDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/user/${id}/change-password`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
