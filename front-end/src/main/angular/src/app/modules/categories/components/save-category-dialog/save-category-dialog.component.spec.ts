import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCategoryDialogComponent } from './save-category-dialog.component';

describe('SaveCategoryDialogComponent', () => {
  let component: SaveCategoryDialogComponent;
  let fixture: ComponentFixture<SaveCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
