import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {Category} from "../../../categories/category.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DataService} from "../../../../core/services/data.service";
import {NgForm} from "@angular/forms";
import * as deepEqual from "deep-equal";
import {Budget} from "../../budgets.model";

@Component({
  selector: 'app-save-budget-dialog',
  templateUrl: './save-budget-dialog.component.html',
  styleUrls: ['./save-budget-dialog.component.css']
})
export class SaveBudgetDialogComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<SaveBudgetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Budget, private dataService: DataService) {
  }

  @HostListener('window:keyup.esc') onCancel() {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    if (!form.valid) return;

    this.dataService.saveBudget(this.data).subscribe(value => {
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
