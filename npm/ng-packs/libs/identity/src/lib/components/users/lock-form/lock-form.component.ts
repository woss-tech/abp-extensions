import { Component, Injector, Input } from '@angular/core';
import { formatDateTime, FormComponentBase } from '@lopos/ng.core.extension';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserService } from '../../../proxy/identity-service/users';
import { Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ShortDateTimePipe } from '@abp/ng.core';

@Component({
  providers: [ShortDateTimePipe],
  selector: 'lopos-lock-form',
  templateUrl: './lock-form.component.html',
  styleUrls: ['./lock-form.component.less'],
})
export class LockFormComponent extends FormComponentBase {
  @Input()
  id!: string;

  lockForm = this.fb.group({
    lockEndTime: [null, [Validators.required]],
  });

  constructor(
    injector: Injector,
    private dialogRef: NzModalRef,
    private userService: UserService
  ) {
    super(injector);
  }

  save() {
    if (!this.lockForm.valid) {
      return;
    }

    this.isSubmitting = true;
    this.userService
      .lockByIdAndLockEndTime(
        this.id,
        formatDateTime(this.lockForm.value.lockEndTime as unknown as Date)
      )
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe(() => {
        this.dialogRef.close(true);
        this.isSubmitting = false;
      });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
