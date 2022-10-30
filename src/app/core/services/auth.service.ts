import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post(`${environment.api}/auth/login`, { email, password })
      .pipe(tap(({ token }: any) => this.setAuthToken(token)));
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  clearAuthToken() {
    localStorage.removeItem('token');
  }

  private setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }
}
