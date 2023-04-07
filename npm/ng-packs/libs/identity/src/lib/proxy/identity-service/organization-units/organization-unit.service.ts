import type { CreateOrUpdateOrganizationUnitDto, OrganizationUnitDto } from './dto/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrganizationUnitService {
  apiName = 'AbpIdentity';

  createByInput = (input: CreateOrUpdateOrganizationUnitDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/identity/organization-unit',
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity/organization-unit/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, OrganizationUnitDto>({
      method: 'GET',
      url: `/api/identity/organization-unit/${id}`,
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: CreateOrUpdateOrganizationUnitDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/organization-unit/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
