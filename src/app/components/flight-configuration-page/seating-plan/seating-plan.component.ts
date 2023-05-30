import { Component, OnInit } from '@angular/core';

import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-seating-plan',
  templateUrl: './seating-plan.component.html',
  styleUrls: ['./seating-plan.component.scss']
})
export class SeatingPlanComponent implements OnInit {
  formData: any = {
    from: '',
    to: '',
    date: '',
    passengers: ''
  };
  
  selectedSeats: string[] = [];
  selectedSeatsCount = 0;
  maxSelectedSeats = this.formData.passengers;
  flightType: string = 'intercontinental'; //zaktualizowac to na dynamiczne

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.formData = { ...this.formDataService.formData };
  }

  isSelected(seatId: string): boolean {
    return this.selectedSeats.includes(seatId);
  }

  handleSelection(seatId: string) {
    if (this.isSelected(seatId)) {
      this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
      this.selectedSeatsCount--;
    } else if (this.selectedSeatsCount < this.formData.passengers) {
      this.selectedSeats.push(seatId);
      this.selectedSeatsCount++;
    }
  }
}
