import { Component,signal } from '@angular/core';
import { Header } from '../../../header/header';
import { RestaurantList } from '../../../restaurant-list/restaurant-list';
import { Restaurant } from '../../../models/restaurant';
import { Carte } from "../../../components/carte/carte";

@Component({
  selector: 'app-home',
  imports: [Header,RestaurantList,Carte],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Source de vérité unique pour tous les restaurants (avec leurs ratings)
  protected allRestaurants = signal<Restaurant[]>([
    { id: 1, name: 'Le Calao Doré', district: 'Akwa', specialty: 'Ndolé aux crevettes', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XuAVHlDWkaHihhczrbIeCj0CO3tbULUOIhNVc11PEg&s=10"},
    { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso', specialty: 'Eru aux pieds de bœuf', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-uoBIhRx_bBfS_V3LejuN0XpA7V8e5N4-lF7bzKr73ERkCZRqIQrA_5F&s=10"},
    { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo', specialty: 'Poulet DG', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9Du4puV5gFgDaP14rohTTgGSH1ByQd94-UZMJ2yUvw&s=10"},
    { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi', specialty: 'Poisson braisé', currentRating: 0 , url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/3e/bd/e5/restaurant-cosy-avec.jpg"},
    { id: 5, name: "L'Akwa Gourmand", district: 'Akwa', specialty: 'Bobolo et sauce arachide', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcBwOzk1t8qEQ6yG_ft4dKvncrGVxIKdGPOkN9okydG__QTWrRcUnPV0&s=10"},
    { id: 6, name: 'Le Royal de Bali', district: 'Bali', specialty: 'Koki et plantain', currentRating: 0 , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjEw0Bz8N8h0ujJ6u0pvXwAkXqKXTjdia61WI8VNSMLBJz_iHswGmj4&s=10"}
  ]);

  // Signal affiché (peut être filtré), repart toujours de allRestaurants
  restaurants = signal<Restaurant[]>(this.allRestaurants());

  currentMinRating = 0;

  // Appelé depuis RestaurantList quand l'utilisateur note un restaurant
  updateRating(event: { id: number; rating: number }): void {
    this.allRestaurants.update(list =>
      list.map(r => r.id === event.id ? { ...r, currentRating: event.rating } : r)
    );
    this.applyFilter(); // réapplique le filtre actuel après la notation
  }

  filterByRating(minRating: number): void {
    this.currentMinRating = minRating;
    this.applyFilter();
  }

  private applyFilter(): void {
    const min = this.currentMinRating;
    if (min <= 0) {
      this.restaurants.set(this.allRestaurants());
    } else {
      this.restaurants.set(
        this.allRestaurants().filter(r => r.currentRating >= min)
      );
    }
  }
}
