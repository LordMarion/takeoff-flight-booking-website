import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-main-page-form',
  templateUrl: './main-page-form.component.html',
  styleUrls: ['./main-page-form.component.scss']
})
export class MainPageFormComponent {
  formData: any = {
    date: ''
  };
  minDate: string;

  constructor(private formDataService: FormDataService, private router: Router) {
    //Preventing from selecting past date
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  onSubmit(form: any) {
    this.formDataService.formData = { ...form };

    this.router.navigate(['/flight-configuration']);
  }
}
