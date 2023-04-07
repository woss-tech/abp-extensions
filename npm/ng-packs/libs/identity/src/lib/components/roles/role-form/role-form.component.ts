import { Component, Input, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormComponentBase, AbpValidators } from '@lopos/ng.core.extension';
import { IdentityRoleService } from '../../../proxy/volo/abp/identity';
import { IdentityRoleCreateDto } from './../../../proxy/volo/abp/identity/models';

@Component({
  selector: 'lopos-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.less'],
})
export class RoleFormComponent extends FormComponentBase implements OnInit {
  @Input()
  id?: string;

  roleForm = this.fb.group({
    name: [
      null,
      [Validators.required, AbpValidators.range({ minimum: 2, maximum: 6 })],
    ],
    isDefault: [false, [Validators.required]],
    isPublic: [false, [Validators.required]],
  });

  constructor(
    injector: Injector,
    private dialogRef: NzModalRef,
    private roleService: IdentityRoleService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    if (this.id) {
      this.roleService.get(this.id).subscribe((res) => {
        this.roleForm.patchValue(res as any);
      });
    }
  }

  public save() {
    const data = this.roleForm.value as unknown as IdentityRoleCreateDto;
    if (this.id) {
      this.roleService.update(this.id, data).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.roleService.create(data).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  public cancel() {
    this.dialogRef.close(false);
  }
}
