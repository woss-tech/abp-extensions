import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorWrapperComponent } from './http-error-wrapper.component';

describe('HttpErrorWrapperComponent', () => {
  let component: HttpErrorWrapperComponent;
  let fixture: ComponentFixture<HttpErrorWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpErrorWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpErrorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
