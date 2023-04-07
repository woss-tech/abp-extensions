import { AbpValidators, FormComponentBase } from '@lopos/ng.core.extension';
import { AuthService } from '@abp/ng.core';
import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'lopos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent extends FormComponentBase {
  constructor(
    protected injector: Injector,
    protected authService: AuthService,
    protected nzMessageService: NzMessageService
  ) {
    super(injector);
  }

  inProgress = false;
  form: FormGroup = this.fb.group({
    username: ['admin', [Validators.required, Validators.maxLength(255)]],
    password: ['1q2w3E*', [Validators.required, AbpValidators.password()]],
    rememberMe: [true],
  });

  login() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const { username, password, rememberMe } = this.form.value;
    this.inProgress = true;
    const redirectUrl = '/';
    
    this.authService
      .login({ username, password, rememberMe, redirectUrl })
      .pipe(
        catchError((err) => {
          console.log(err);
          this.nzMessageService.error(
            err.error?.error_description || err.error?.error.message
          );
          return throwError(err);
        }),
        finalize(() => (this.inProgress = false))
      )
      .subscribe();
  }
}
