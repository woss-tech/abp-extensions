import type { EntityDto } from '@abp/ng.core';

export interface CreateOrUpdateOrganizationUnitDto {
  name: string;
  parentId?: string;
}

export interface OrganizationUnitDto extends EntityDto<string> {
  displayName?: string;
  parentId?: string;
}
