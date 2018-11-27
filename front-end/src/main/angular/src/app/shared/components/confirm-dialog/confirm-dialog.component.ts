import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }

  @HostListener('window:keyup.esc') decline(): void {
    this.dialogRef.close(false);
  }

  @HostListener('window:keyup.enter') public accept() {
    this.dialogRef.close(true);
  }

}
