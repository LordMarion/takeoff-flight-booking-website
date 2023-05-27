import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';
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

  loggedUser: string;
  errorMessage = '';
  
  constructor(private userService: UserService, private sharedService: SharedService, private modal: NgbModal, public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  };

  login(form: NgForm) {
    if (this.selectedUser && this.selectedUser.password === this.password) {
      this.loggedUser = this.selectedUser.username;

      this.sharedService.setLoggedIn(true);
      this.sharedService.setLoggedUser(this.loggedUser);

      this.activeModal.close('Close click');
    } else {
      this.errorMessage = 'Invalid password or unselected user';
    }
  }
}
