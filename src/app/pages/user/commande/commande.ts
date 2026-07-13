import { Component, inject, computed } from '@angular/core';
import { PlatListCommande } from "../../../components/user/commande/plat-list-commande/plat-list-commande";
import { FormulaireCommande } from "../../../components/user/commande/formulaire-commande/formulaire-commande";
import { LigneCommande } from '../../../models/ligneCommande';
import { MenuService } from '../../../services/menu-service';

@Component({
  selector: 'app-commande',
  imports: [PlatListCommande, FormulaireCommande],
  templateUrl: './commande.html',
  styleUrl: './commande.css',
})
export class Commande {
  private _menu = inject(MenuService);

  listCommande = computed<LigneCommande[]>(() => {
    const plats = this._menu.filteredPlats();
    if (!plats || plats.length < 2) return [];

    return [
      {
        plat: plats[0],
        restaurantName: 'Restaurant 1',
        quantite: 2
      },
      {
        plat: plats[1],
        restaurantName: 'Restaurant 2',
        quantite: 1
      }
    ];
  });
}
