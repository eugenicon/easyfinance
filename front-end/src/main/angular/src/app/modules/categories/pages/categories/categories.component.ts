import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {MatDialog} from "@angular/material";
import {AddCategoryDialogComponent} from "../../components/add-category-dialog/add-category-dialog.component";
import {Category} from "../../category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(protected dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  add() {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: '300px',
      data: new Category()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed with ${result}`);
    });
  }
}
