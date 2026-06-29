import { Component, input, linkedSignal } from '@angular/core';
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
  restaurants = linkedSignal(() => this.allRestaurants());
  updateRating(restaurantId: number, newRating: number): void {
    this.restaurants.update(restaurants =>
      restaurants.map(r =>
        r.id === restaurantId ? { ...r, currentRating: newRating } : r
      )
    );
  }
}
