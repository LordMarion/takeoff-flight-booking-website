import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedUser$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setLoggedIn(value: boolean) {
    this.isLoggedIn$.next(value);
  }

  setLoggedUser(userName: string) {
    this.loggedUser$.next(userName);
  }
}
