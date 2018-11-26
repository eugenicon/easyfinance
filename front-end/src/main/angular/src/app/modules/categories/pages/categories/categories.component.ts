import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {MatDialog} from "@angular/material";
import {SaveCategoryDialogComponent} from "../../components/save-category-dialog/save-category-dialog.component";
import {Category} from "../../category.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data = new BehaviorSubject<Category[]>([]);

  constructor(protected dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.updateData();
  }

  openSaveDialog(data: Category = new Category()) {
    const dialog = this.dialog.open(SaveCategoryDialogComponent, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.updateData();
    });
  }

  private updateData() {
    this.dataService.getCategories().subscribe(value => {
      this.data.next(value);
    });
  }
}
