import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-main-page-form',
  templateUrl: './main-page-form.component.html',
  styleUrls: ['./main-page-form.component.scss']
})
export class MainPageFormComponent {

  constructor(private formDataService: FormDataService, private router: Router) {}

  onSubmit(form: any) {
    this.formDataService.formData = { ...form };

    this.router.navigate(['/flight-configuration']);
  }
}
