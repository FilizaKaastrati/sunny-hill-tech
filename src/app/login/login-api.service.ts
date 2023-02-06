import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface LoginResponse {
  token: string
}


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://reqres.in/api/login', {email: username, password: password});
  }
}
