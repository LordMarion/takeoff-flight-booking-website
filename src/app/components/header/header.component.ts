import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/services/shared.service';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  loggedUser = '';

  constructor(private sharedService: SharedService, private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.sharedService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.sharedService.loggedUser$.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
    })
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedUser = '';
    this.router.navigate(['/']);
  }
}
