import {Component, OnInit, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TableColumn} from "../../../../shared/components/table/table.component";
import {UserGroup} from "../../user.model";
import {DataService} from "../../../../core/services/data.service";
import {MatDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {SaveUserGroupDialogComponent} from "../save-user-group-dialog/save-user-group-dialog.component";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  data = new BehaviorSubject<UserGroup[]>([]);

  columns: TableColumn<UserGroup>[] = [
    {name: "id"},
    {name: "name"},
    {name: "key", title: 'Token'}
  ];

  constructor(protected dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateData();
  }

  openSaveDialog(data: UserGroup = new UserGroup()) {
    this.openDialog(SaveUserGroupDialogComponent, data);
  }

  openDeleteDialog(data: UserGroup) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.dataService.leaveUserGroup(data).subscribe(() => this.updateData())
    });
  }

  private openDialog(dialogType: Type<any>, data: any) {
    const dialog = this.dialog.open(dialogType, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.updateData();
    });
  }

  private updateData() {
    this.dataService.getUserGroups().subscribe(value => {
      this.data.next(value);
    });
  }

  joinGroup(token: string) {
    this.dataService.joinUserGroup(token).subscribe(() => {
      this.updateData();
    });
  }
}
