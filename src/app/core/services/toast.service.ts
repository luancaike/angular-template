import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  showSuccess(msg = '') {
    this.toastr.success(msg);
  }

  showError(msg = '') {
    this.toastr.error(msg);
  }

  showDataError(dataError: { error: { message: string | string[] } }) {
    let errorMsg = '';

    if (Array.isArray(dataError.error.message)) {
      const lis = dataError.error.message
        .map((msg) => `<li>${msg}</li>`)
        .join('');
      errorMsg = `<ul>${lis}</ul>`;
      console.log(errorMsg);
    } else {
      errorMsg = dataError.error.message;
    }

    this.showError(errorMsg);
  }
}
