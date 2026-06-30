import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-popup',
  imports: [CommonModule],
  templateUrl: './filter-popup.html',
  styleUrl: './filter-popup.css',
})
export class FilterPopup {
  isView = input<boolean>(false);
  ratingChanged = output<number>();
  currentRating = 0;
  onSliderChange(event: Event): void {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.currentRating = value;
    this.ratingChanged.emit(value);
  }
}
