import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockFormComponent } from './lock-form.component';

describe('LockFormComponent', () => {
  let component: LockFormComponent;
  let fixture: ComponentFixture<LockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LockFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
