import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {TableColumn} from "../../../../shared/components/table/table.component";
import {Operation} from "../../operation.model";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  columns: TableColumn[] = [
    {name: "id"},
    {name: "category", value: (item: Operation) => {return item.category.name}},
    {name: "description"},
    {name: "sum"},
  ];

  constructor(protected dataService: DataService) { }

  ngOnInit() {
  }
}
