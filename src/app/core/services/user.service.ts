import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@shared/models/user';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user!: User;
  private updateUser$ = new EventEmitter<User>();

  constructor(private http: HttpClient) {}

  updateUser() {
    this.handlerGetUser().subscribe((user) => this.updateUser$.emit(user));
  }

  getUser() {
    return new Observable<User>((observer) => {
      if (this.user) {
        observer.next(this.user);
      } else {
        this.handlerGetUser().subscribe((user) => {
          observer.next(user);
        });
      }
      this.updateUser$.subscribe((user) => observer.next(user));
    });
  }

  handlerGetUser() {
    return this.http
      .get<User>(`${environment.api}/auth/me`)
      .pipe(tap((user) => (this.user = user)));
  }
}
