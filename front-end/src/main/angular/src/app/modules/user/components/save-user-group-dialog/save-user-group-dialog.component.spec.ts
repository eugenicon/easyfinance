import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserGroupDialogComponent } from './save-user-group-dialog.component';

describe('SaveUserGroupDialogComponent', () => {
  let component: SaveUserGroupDialogComponent;
  let fixture: ComponentFixture<SaveUserGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUserGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUserGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
