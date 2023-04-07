import { LocalizationParam, SubscriptionService } from '@abp/ng.core';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  OnDestroy,
  Type,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'lopos-http-error-wrapper',
  templateUrl: './http-error-wrapper.component.html',
  styleUrls: ['./http-error-wrapper.component.css'],
  providers: [SubscriptionService],
})
export class HttpErrorWrapperComponent implements AfterViewInit, OnDestroy {
  appRef!: ApplicationRef;

  cfRes!: ComponentFactoryResolver;

  injector!: Injector;

  status = 0;

  title: LocalizationParam = 'Oops!';

  details: LocalizationParam = 'Sorry, an error has occurred.';

  customComponent: Type<any> | undefined = undefined;

  destroy$!: Subject<void>;

  hideCloseIcon = false;

  backgroundColor!: string;

  isHomeShow = true;

  @ViewChild('container', { static: false })
  containerRef?: ElementRef<HTMLDivElement>;

  get statusText(): string {
    return this.status ? `[${this.status}]` : '';
  }

  constructor(private subscription: SubscriptionService) {}

  ngAfterViewInit(): void {
    if (this.customComponent) {
      const customComponentRef = this.cfRes
        .resolveComponentFactory(this.customComponent)
        .create(this.injector);
      customComponentRef.instance.errorStatus = this.status;
      customComponentRef.instance.destroy$ = this.destroy$;
      this.appRef.attachView(customComponentRef.hostView);
      if (this.containerRef) {
        this.containerRef.nativeElement.appendChild(
          (customComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]
        );
      }
      customComponentRef.changeDetectorRef.detectChanges();
    }

    const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      debounceTime(150),
      filter((key: KeyboardEvent) => key && key.key === 'Escape')
    );
    this.subscription.addOne(keyup$, () => this.destroy());
  }

  ngOnDestroy() {
    this.destroy();
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
