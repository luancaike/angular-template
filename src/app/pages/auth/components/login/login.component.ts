import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ToastService } from '@core/services/toast.service';
import { LoadingService } from '@core/services/loading.service';
import { UserService } from '@core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService,
    public userService: UserService,
    public loadingService: LoadingService,
    private errorService: ToastService
  ) {}

  ngOnInit(): void {
    this.authService.clearAuthToken();
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { email, password }: any = this.form.getRawValue();
      this.loadingService.show();
      this.authService.login(email, password).subscribe(
        () => {
          this.userService.updateUser();
          this.router.navigate(['/home']);
        },
        (data) => this.errorService.showDataError(data),
        () => this.loadingService.hide()
      );
    }
  }
}
