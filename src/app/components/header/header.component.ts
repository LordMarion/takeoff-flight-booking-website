import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from 'src/app/services/shared.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  
  constructor(private sharedService: SharedService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.sharedService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent);
  }
}
