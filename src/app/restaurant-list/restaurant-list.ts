import { Component, input, output } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantCard } from './restaurant-card/restaurant-card';
@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  allRestaurants = input<Restaurant[]>([]);

  // Propage le changement de rating vers le composant parent (App)
  ratingChanged = output<{ id: number; rating: number }>();

  updateRating(restaurantId: number, newRating: number): void {
    this.ratingChanged.emit({ id: restaurantId, rating: newRating });
  }
}
