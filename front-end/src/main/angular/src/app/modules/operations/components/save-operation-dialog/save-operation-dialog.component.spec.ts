import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOperationDialogComponent } from './save-operation-dialog.component';

describe('SaveOperationDialogComponent', () => {
  let component: SaveOperationDialogComponent;
  let fixture: ComponentFixture<SaveOperationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveOperationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOperationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
