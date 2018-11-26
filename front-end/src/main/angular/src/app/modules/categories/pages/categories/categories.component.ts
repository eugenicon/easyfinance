import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {MatDialog} from "@angular/material";
import {AddCategoryDialogComponent} from "../../components/add-category-dialog/add-category-dialog.component";
import {Category} from "../../category.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data = new BehaviorSubject<Category[]>([]);

  constructor(protected dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateData();
  }

  private updateData() {
    this.dataService.getCategories().subscribe(value => {
      this.data.next(value);
    });
  }

  add() {
    const dialog = this.dialog.open(AddCategoryDialogComponent, {
      width: '300px',
      data: new Category()
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.updateData();
      }
    });
  }
}
