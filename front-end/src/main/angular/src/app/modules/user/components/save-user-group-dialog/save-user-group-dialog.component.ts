import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DataService} from "../../../../core/services/data.service";
import {NgForm} from "@angular/forms";
import {UserGroup} from "../../user.model";

@Component({
  selector: 'app-save-user-group-dialog',
  templateUrl: './save-user-group-dialog.component.html',
  styleUrls: ['./save-user-group-dialog.component.css']
})
export class SaveUserGroupDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SaveUserGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserGroup, private dataService: DataService) {
  }

  @HostListener('window:keyup.esc') onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    if (!form.valid) return;

    this.dataService.saveUserGroup(this.data).subscribe(() => {
      this.dialogRef.close(this.data);
    });
  }

  ngOnInit() {
  }

}
