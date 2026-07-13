import { Component, input } from '@angular/core';
import { LigneCommande } from '../../../../models/ligneCommande';
import { PlatCardCommande } from "./plat-card-commande/plat-card-commande";

@Component({
  selector: 'app-plat-list-commande',
  imports: [PlatCardCommande],
  templateUrl: './plat-list-commande.html',
  styleUrl: './plat-list-commande.css',
})
export class PlatListCommande {
  listCommande=input<LigneCommande[]>([])
}
