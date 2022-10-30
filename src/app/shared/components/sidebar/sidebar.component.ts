import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  public user?: User;

  constructor(public userService: UserService) {}

  ngAfterViewInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }
}
