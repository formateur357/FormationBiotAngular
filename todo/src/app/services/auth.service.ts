import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: boolean = false

  constructor() { }

  public login(): void {
    setTimeout(() => this.isAuth = true, 2000)
  }

  public logout(): void {
    this.isAuth = false
  }
}
