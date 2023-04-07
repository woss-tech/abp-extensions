import { ListService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@lopos/ng.core.extension';
import { NzModalService } from 'ng-zorro-antd/modal';
import {
  GetIdentityUsersInput,
  IdentityUserDto,
  IdentityUserService,
} from '../../proxy/volo/abp/identity';
import { LockFormComponent } from './lock-form/lock-form.component';

@Component({
  selector: 'lopos-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  providers: [ListService],
})
export class UsersComponent
  extends PagedListingComponentBase<IdentityUserDto>
  implements OnInit
{
  query: GetIdentityUsersInput = {
    maxResultCount: this.maxResultCount,
    skipCount: this.skipCount,
    sorting: this.sorting,
  };

  constructor(
    public readonly list: ListService,
    protected service: IdentityUserService,
    private modal: NzModalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.hookToQuery();
  }

  lock(id: string) {
    this.modal.create({
      nzTitle: '账户锁定',
      nzContent: LockFormComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzComponentParams: { id: id },
    });
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
