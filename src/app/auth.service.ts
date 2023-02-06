import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated() {
    const token = localStorage.getItem('token');
    console.log(token)
    return token !== null;
  }

  public logUserIn(token: string): void {
    localStorage.setItem('token', token);
  }

  public logUserOut(): void {
    localStorage.removeItem('token');
  }
}
