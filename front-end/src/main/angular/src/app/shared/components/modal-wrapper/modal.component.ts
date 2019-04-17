import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() handler = () => this.close();



  constructor(private dialog: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

  save() {
    this.handler();
  }

  @HostListener('window:keyup.esc') close(data: any = null) {
    this.dialog.close(data);
  }
}
