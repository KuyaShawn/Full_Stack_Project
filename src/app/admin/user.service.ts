import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3306/users';

  constructor(private httpClient: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${user}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}