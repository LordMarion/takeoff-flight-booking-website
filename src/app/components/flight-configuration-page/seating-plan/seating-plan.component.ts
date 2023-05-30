import { Component } from '@angular/core';

@Component({
  selector: 'app-seating-plan',
  templateUrl: './seating-plan.component.html',
  styleUrls: ['./seating-plan.component.scss']
})
export class SeatingPlanComponent {
  selectedSeats: string[] = [];
  flightType: string = 'intercontinental';

  isSelected(seatId: string): boolean {
    return this.selectedSeats.includes(seatId);
  }

  handleSelection(seatId: string) {
    if (this.isSelected(seatId)) {
      this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
    } else {
      this.selectedSeats.push(seatId);
    }
    console.log(this.selectedSeats); //usunac to
  }
}
