import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/services/loading.service';
import { ToastService } from '@core/services/toast.service';
import { UsersService } from '@pages/users/users.service';
import { ConfirmDialogService } from '@shared/components/confirm-dialog/confirm-dialog.service';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements AfterViewInit {
  public users: User[] = [];

  constructor(
    private service: UsersService,
    private confirmDialogService: ConfirmDialogService,
    private toastService: ToastService,
    public loadingService: LoadingService
  ) {}

  ngAfterViewInit(): void {
    this.loadingService.show();
    this.service.getAll().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => this.toastService.showDataError(err),
      complete: () => this.loadingService.hide(),
    });
  }

  remove(id: string) {
    this.confirmDialogService.show({
      action: (result: boolean) => {
        if (result) {
          this.loadingService.show();
          this.service.delete(id).subscribe({
            next: () => {
              this.users = this.users.filter((user) => user.id !== id);
            },
            error: (err) => this.toastService.showDataError(err),
            complete: () => this.loadingService.hide(),
          });
        }
      },
    });
  }
}
