import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-card',
  imports: [],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  @Input() restaurant! : Restaurant;
  @Output() ratingChanged = new EventEmitter<{ id: number; rating: number }>();

  onStarClick(star: number): void {
    this.ratingChanged.emit({ id: this.restaurant.id, rating: star });
  }
  stars = [0, 1, 2, 3, 4];
}
