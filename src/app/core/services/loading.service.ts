import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isLoading = false;

  constructor(private toastr: ToastrService) {}

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }

  toogle() {
    this.isLoading = !this.isLoading;
  }
}
