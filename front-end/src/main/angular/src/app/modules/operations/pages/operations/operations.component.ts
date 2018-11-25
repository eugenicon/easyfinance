import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {TableColumn} from "../../../../shared/components/table/table.component";
import {Operation} from "../../operation.model";
import {LinkCell} from "../../../../shared/components/table-cell-link/table-cell-link.component";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  columns: TableColumn<Operation>[] = [
    {name: "id"},
    {name: "category", value: (it) => {return it.category.name},
      cell: new LinkCell<Operation>((it) => {return `operation/${it.category.id}`})},
    {name: "description"},
    {name: "sum"},
  ];

  constructor(protected dataService: DataService) { }

  ngOnInit() {
  }
}
