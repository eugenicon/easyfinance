import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Output() onClose = new EventEmitter<boolean>();

  constructor(private dialog: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
    console.log("ModalComponent.ngOnInit")
  }

  save(): void {
    this.onClose.emit(true);
  }

  @HostListener('window:keyup.esc') close() {
    this.dialog.close();
    this.onClose.emit(false);
  }
}
