import { RoleFormComponent } from './role-form/role-form.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ListService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import {
  GetIdentityRolesInput,
  IdentityRoleDto,
  IdentityRoleService,
} from '../../proxy/volo/abp/identity';
import { PagedListingComponentBase } from '@lopos/ng.core.extension';

@Component({
  selector: 'lopos-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.less'],
  providers: [ListService],
})
export class RolesComponent
  extends PagedListingComponentBase<IdentityRoleDto>
  implements OnInit
{
  query: GetIdentityRolesInput = {
    skipCount: this.skipCount,
    maxResultCount: this.maxResultCount,
    sorting: this.sorting,
  };

  constructor(
    public readonly list: ListService,
    protected service: IdentityRoleService,
    private modal: NzModalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.hookToQuery();
  }

  createOrUpdate(id?: string) {
    let modal;
    if (id == undefined) {
      modal = this.modal.create({
        nzTitle: '新角色',
        nzContent: RoleFormComponent,
        nzMaskClosable: false,
        nzFooter: null,
      });
    } else {
      modal = this.modal.create({
        nzTitle: '新角色',
        nzContent: RoleFormComponent,
        nzMaskClosable: false,
        nzFooter: null,
        nzComponentParams: { id: id },
      });
    }
    modal.afterClose.subscribe((res) => {
      if (res) {
        this.hookToQuery();
      }
    });
  }

  public refresh() {
    this.hookToQuery();
  }

  protected hookToQuery() {
    this.loading = true;
    this.list
      .hookToQuery(() => this.service.getList(this.query))
      .subscribe((res) => {
        this.loading = false;
        this.data = res;
      });
  }
}
