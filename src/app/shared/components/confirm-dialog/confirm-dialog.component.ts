import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface ConfirmDialogModel {
  title?: string;
  message?: string;
  btnOkText?: string;
  btnCancelText?: string;
  action: (result: boolean) => any;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  public title = 'Confirm';
  public message = 'Are you sure?';
  public btnOkText = 'Ok';
  public btnCancelText = 'Cancel';
  public action = (result: boolean) => {};

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  confirm(value: boolean) {
    this.action(value);
    this.modal.close();
  }
}
