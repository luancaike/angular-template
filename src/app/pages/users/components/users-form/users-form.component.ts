import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@core/services/toast.service';
import { LoadingService } from '@core/services/loading.service';
import { UsersService } from '@pages/users/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  public id = '';

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordConfirmation: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: UsersService,
    private toastService: ToastService,

    public loadingService: LoadingService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.getDataId();
      this.form.controls['password'].setValidators([]);
      this.form.controls['passwordConfirmation'].setValidators([]);
    }
  }

  getDataId() {
    this.loadingService.show();
    this.service.getOne(this.id).subscribe({
      next: (res) => {
        this.form.patchValue(res);
      },
      error: (err) => this.toastService.showDataError(err),
      complete: () => this.loadingService.hide(),
    });
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loadingService.show();
      const model: any = this.form.getRawValue();
      if (this.id) {
        this.service.update(this.id, model).subscribe({
          next: (data: any) => {
            this.toastService.showSuccess(data.message);
            this.gotoList();
          },
          error: (err) => this.toastService.showDataError(err),
          complete: () => this.loadingService.hide(),
        });
      } else {
        this.service.add(model).subscribe({
          next: (data: any) => {
            this.toastService.showSuccess(data.message);
            this.gotoList();
          },
          error: (err) => this.toastService.showDataError(err),
          complete: () => this.loadingService.hide(),
        });
      }
    }
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
