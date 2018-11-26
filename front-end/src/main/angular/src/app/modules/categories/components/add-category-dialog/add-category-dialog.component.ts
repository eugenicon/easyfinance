import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Category} from "../../category.model";
import {DataService} from "../../../../core/services/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {
  types: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category, private dataService: DataService) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    this.dataService.saveCategory(this.data).subscribe(value => {
      this.dialogRef.close(this.data);
    });
  }

  ngOnInit(): void {
    this.dataService.getCategoryTypes().subscribe(value => {
      value.forEach(i => this.types.push(i));
      if (!this.data.type || !this.data.type.length) {
        this.data.type = this.types[0];
      }
    });
  }
}
