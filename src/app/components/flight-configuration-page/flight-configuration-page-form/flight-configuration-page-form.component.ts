import { Component, OnInit } from '@angular/core';

import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-flight-configuration-page-form',
  templateUrl: './flight-configuration-page-form.component.html',
  styleUrls: ['./flight-configuration-page-form.component.scss']
})
export class FlightConfigurationPageFormComponent implements OnInit {
  formData: any;

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.formData = { ...this.formDataService.formData };
  }
}
