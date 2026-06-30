// header.component.ts
import { Component, input, output } from '@angular/core';
import { FilterPopup } from './filter-popup/filter-popup';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-header',
  imports: [FilterPopup],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  allRestaurants = input<Restaurant[]>([]);

  isOpen = false;
  togglePopup(): void { this.isOpen = !this.isOpen; }

  ratingChanged = output<number>();
  onRatingChanged(value: number): void { this.ratingChanged.emit(value); }
}