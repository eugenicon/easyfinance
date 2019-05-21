import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedInputComponent } from './formatted-input.component';

describe('FormattedInputComponent', () => {
  let component: FormattedInputComponent;
  let fixture: ComponentFixture<FormattedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
