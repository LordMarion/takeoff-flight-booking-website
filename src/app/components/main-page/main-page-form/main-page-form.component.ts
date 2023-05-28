import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-main-page-form',
  templateUrl: './main-page-form.component.html',
  styleUrls: ['./main-page-form.component.scss']
})
export class MainPageFormComponent {
  formData: any = {
    from: '',
    to: '',
    date: '',
    passengers: ''

  };
  minDate: string;

  constructor(private formDataService: FormDataService, private router: Router) {
    //Preventing from selecting past date
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('invalid');
      return;
    }
    this.formDataService.formData = { ...form.value };

    this.router.navigate(['/flight-configuration']);
  }
}
