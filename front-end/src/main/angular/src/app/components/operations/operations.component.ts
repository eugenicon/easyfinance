import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {TableColumn} from "../table/table.component";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  columns: TableColumn[] = [
    {name: "id"},
    {name: "category", value: (item) => {return item.category.name}},
    {name: "description"},
    {name: "sum"},
  ];

  constructor(protected dataService: DataService) { }

  ngOnInit() {
  }
}
