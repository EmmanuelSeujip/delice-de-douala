import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { signal } from '@angular/core';
import { RestaurantCard } from './restaurant-card/restaurant-card';
@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  restaurants = signal<Restaurant[]>([
    { id: 1, name: 'Le Calao Doré', district: 'Akwa', specialty: 'Ndolé aux crevettes', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XuAVHlDWkaHihhczrbIeCj0CO3tbULUOIhNVc11PEg&s=10"},
    { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso', specialty: 'Eru aux pieds de bœuf', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-uoBIhRx_bBfS_V3LejuN0XpA7V8e5N4-lF7bzKr73ERkCZRqIQrA_5F&s=10"},
    { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo', specialty: 'Poulet DG', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9Du4puV5gFgDaP14rohTTgGSH1ByQd94-UZMJ2yUvw&s=10"},
    { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi', specialty: 'Poisson braisé', currentRating: 0 , url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/3e/bd/e5/restaurant-cosy-avec.jpg"},
    { id: 5, name: "L'Akwa Gourmand", district: 'Akwa', specialty: 'Bobolo et sauce arachide', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcBwOzk1t8qEQ6yG_ft4dKvncrGVxIKdGPOkN9okydG__QTWrRcUnPV0&s=10"},
    { id: 6, name: 'Le Royal de Bali', district: 'Bali', specialty: 'Koki et plantain', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjEw0Bz8N8h0ujJ6u0pvXwAkXqKXTjdia61WI8VNSMLBJz_iHswGmj4&s=10"}
  ])
  updateRating(restaurantId: number, newRating: number): void {
    this.restaurants.update(restaurants =>
      restaurants.map(r =>
        r.id === restaurantId ? { ...r, currentRating: newRating } : r
      )
    );
  }
}
