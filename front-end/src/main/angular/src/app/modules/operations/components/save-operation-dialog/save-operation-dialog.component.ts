import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Category} from "../../../categories/category.model";
import {DataService} from "../../../../core/services/data.service";
import {NgForm} from "@angular/forms";
import {Operation} from "../../operation.model";
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-save-operation-dialog',
  templateUrl: './save-operation-dialog.component.html',
  styleUrls: ['./save-operation-dialog.component.css']
})
export class SaveOperationDialogComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<SaveOperationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Operation, private dataService: DataService) {
  }

  @HostListener('window:keyup.esc') onCancel() {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    if (!form.valid) return;

    this.dataService.saveOperation(this.data).subscribe(value => {
      this.dialogRef.close(this.data);
    });
  }

  ngOnInit(): void {
    if (this.data.category) {
      this.categories.push(this.data.category);
    }

    this.dataService.getCategories().subscribe(value => {
      value
        .filter(i => !deepEqual(i, this.data.category))
        .forEach(i => this.categories.push(i));

      if (!this.data.category) {
        this.data.category = this.categories[0];
      }
    });
  }
}
