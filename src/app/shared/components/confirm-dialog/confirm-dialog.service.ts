import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from './confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private modalService: NgbModal) {}

  show(options: ConfirmDialogModel) {
    const modalRef = this.modalService.open(ConfirmDialogComponent, {
      backdrop: 'static',
    });
    Object.assign(modalRef.componentInstance, options);
    return modalRef.result;
  }
}
