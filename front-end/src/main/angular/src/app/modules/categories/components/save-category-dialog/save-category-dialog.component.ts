import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Category} from "../../category.model";
import {DataService} from "../../../../core/services/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-save-category-dialog',
  templateUrl: './save-category-dialog.component.html',
  styleUrls: ['./save-category-dialog.component.css']
})
export class SaveCategoryDialogComponent implements OnInit {
  types: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<SaveCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category, private dataService: DataService) {
  }

  @HostListener('window:keyup.esc') onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    if (!form.valid) return;

    this.dataService.saveCategory(this.data).subscribe(value => {
      this.dialogRef.close(this.data);
    });
  }

  ngOnInit(): void {
    this.types.push(this.data.type);
    this.dataService.getCategoryTypes().subscribe(value => {
      this.types = value;
      if (!this.data.type || !this.data.type.length) {
        this.data.type = this.types[0];
      }
    });
  }
}
