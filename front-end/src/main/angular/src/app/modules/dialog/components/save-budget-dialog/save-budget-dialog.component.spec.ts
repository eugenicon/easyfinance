import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBudgetDialogComponent } from './save-budget-dialog.component';

describe('SaveBudgetDialogComponent', () => {
  let component: SaveBudgetDialogComponent;
  let fixture: ComponentFixture<SaveBudgetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveBudgetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBudgetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
