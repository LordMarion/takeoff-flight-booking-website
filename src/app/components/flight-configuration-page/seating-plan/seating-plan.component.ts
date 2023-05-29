import { Component } from '@angular/core';

@Component({
  selector: 'app-seating-plan',
  templateUrl: './seating-plan.component.html',
  styleUrls: ['./seating-plan.component.scss']
})
export class SeatingPlanComponent {
  selectedSeats: string[] = [];

  isSelected(seatId: string): boolean {
    return this.selectedSeats.includes(seatId);
  }

  handleSelection(seatId: string) {
    if (this.isSelected(seatId)) {
      // Seat is already selected, remove it
      this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
    } else {
      // Seat is not selected, add it
      this.selectedSeats.push(seatId);
    }
    console.log(this.selectedSeats);
  }
}
