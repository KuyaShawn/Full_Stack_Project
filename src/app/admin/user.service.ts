import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {}

  // methods for admin page --START--
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
  // --END--

  // method for sign up page --START--
  signup(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/signup`, user);
  }
  // --END--
}