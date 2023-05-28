import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; //added


import { FormDataService } from 'src/app/services/form-data.service';
import { SharedService } from 'src/app/services/shared.service';
import { LoginComponent } from '../../login/login.component'; //added

@Component({
  selector: 'app-main-page-form',
  templateUrl: './main-page-form.component.html',
  styleUrls: ['./main-page-form.component.scss']
})
export class MainPageFormComponent implements OnInit {
  formData: any = {
    from: '',
    to: '',
    date: '',
    passengers: ''

  };
  minDate: string;
  // isLoggedIn = this.sharedService.isLoggedIn$.value;
  isLoggedIn = false;

  constructor(private formDataService: FormDataService, private sharedService: SharedService, private modalService: NgbModal, private router: Router) {
    //Preventing from selecting past date
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.sharedService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  onSubmit(form: NgForm) {
    if (form.invalid && !this.isLoggedIn) {
      this.openLoginModal();
      return;
    }

    if (form.valid && !this.isLoggedIn) {
      this.openLoginModal();
      return;
    }

    if (form.invalid && this.isLoggedIn) {
      return;
    }


    this.formDataService.formData = { ...form.value };
    this.router.navigate(['/flight-configuration']);
    } 
}

