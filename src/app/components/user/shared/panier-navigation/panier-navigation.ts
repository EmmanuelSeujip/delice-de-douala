import { Component, computed, inject, signal } from '@angular/core';
import { PanierStore } from '../../../../services/store/panier/panier-store';
import { PlatListCommande } from '../../commande/plat-list-commande/plat-list-commande';
import { LigneCommande } from '../../../../models/ligneCommande';
import { PlatCardCommande } from "../../commande/plat-list-commande/plat-card-commande/plat-card-commande";

@Component({
  selector: 'app-panier-navigation',
  imports: [PlatListCommande, PlatCardCommande],
  templateUrl: './panier-navigation.html',
  styleUrl: './panier-navigation.css',
})
export class PanierNavigation {
  // private readonly _panierService = inject(PanierStore);
  // readonly plats = this._panierService.plats;
  // readonly nombreDePlats = computed(() => this.plats().length);
  plats = signal<LigneCommande[]>([
    {
      plat: {
        id: "1",
        nom: "Ndolé au poisson",
        prix: 3500,
        image: "assets/images/ndole.jpg",
        description: "Plat traditionnel camerounais à base de feuilles de ndolé, poisson fumé et crevettes.",
        categorie: "Plat principal"
      },
      restaurantName: "Chez Mama Béa",
      quantite: 2,
    },
    {
      plat: {
        id: "2",
        nom: "Poulet DG",
        prix: 4200,
        image: "assets/images/poulet-dg.jpg",
        description: "Poulet braisé sauté avec des plantains mûrs, carottes et poivrons.",
        categorie: "Plat principal",
      },
      restaurantName: "Chez Mama Béa",
      quantite: 1,
    },
    {
      plat: {
        id: "3",
        nom: "Beignets haricots",
        prix: 800,
        image: "assets/images/beignets.jpg",
        description: "Beignets croustillants à base de haricots, servis avec du poivre.",
        categorie: "Entrée"
      },
      restaurantName: "La Terrasse Douala",
      quantite: 3,
    },
  ]);
}
