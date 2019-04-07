import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {MatDialog} from "@angular/material";
import {SaveCategoryDialogComponent} from "../../components/save-category-dialog/save-category-dialog.component";
import {Category} from "../../category.model";
import {BehaviorSubject} from "rxjs";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {TableColumn} from "../../../../shared/components/table/table.component";
import {distinct} from "../../../../shared/utils/lambda-utilities";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data = new BehaviorSubject<Category[]>([]);
  columns: TableColumn<Category>[] = [
    {name: "id"},
    {name: "name"},
    {name: "type", filter: () =>
        this.data.getValue().filter(distinct('type')).map(a => ({ value: a.type }) )}
    ];

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

  openDeleteDialog(data: Category) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.dataService.deleteCategory(data).subscribe(() => this.updateData())
    });
  }

  private updateData() {
    this.dataService.getCategories().subscribe(value => {
      this.data.next(value);
    });
  }
}
