import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@shared/models/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${environment.api}/users`);
  }

  getOne(id: string) {
    return this.http.get<User>(`${environment.api}/users/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/users/${id}`);
  }

  add(data: Partial<User>) {
    return this.http.post(`${environment.api}/users`, data);
  }

  update(id: string, data: Partial<User>) {
    return this.http.put(`${environment.api}/users/${id}`, data);
  }
}
