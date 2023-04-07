import { NzMessageService } from 'ng-zorro-antd/message';
import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export abstract class FormComponentBase {
  isSubmitting = false;

  protected fb: FormBuilder;
  protected messageService: NzMessageService;

  constructor(injector: Injector) {
    this.fb = injector.get(FormBuilder);
    this.messageService = injector.get(NzMessageService);
  }

  tips: Record<string, Record<string, string>> = {
    'zh-cn': {
      email: '邮箱格式不正确',
      required: '请填写此字段',
    },
  };
}
