import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user.service';
import { UserData } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users$: Observable<UserData>;
  selectedUser: any;
  password: string;
  
  
  constructor(private userService: UserService, private modal: NgbModal, public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  };

  login(form: NgForm) {
    console.log(form);
    if (this.selectedUser && this.selectedUser.password === this.password) {
      console.log('Logged in as:', this.selectedUser.username);
      // Perform any necessary actions after login
    } else {
      console.log('Invalid username or password');
      // Handle invalid login
    }
  }
}
