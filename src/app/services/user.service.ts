import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { UserData } from '../models/user.model';
import { UserData } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserData> {
    return this.http.get<UserData>('./assets/users.json');
  }
}
