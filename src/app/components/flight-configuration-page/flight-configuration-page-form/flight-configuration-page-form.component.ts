import { Component, OnInit } from '@angular/core';

import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-flight-configuration-page-form',
  templateUrl: './flight-configuration-page-form.component.html',
  styleUrls: ['./flight-configuration-page-form.component.scss']
})
export class FlightConfigurationPageFormComponent implements OnInit {
  formData: any = {
    date: ''
  };
  minDate: string;

  constructor(private formDataService: FormDataService) {
    //Preventing from selecting past date
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.formData = { ...this.formDataService.formData };
  }
}
