import { Component, input } from '@angular/core';
import { LigneCommande } from '../../../../../models/ligneCommande';

@Component({
  selector: 'app-plat-card-commande',
  imports: [],
  templateUrl: './plat-card-commande.html',
  styleUrl: './plat-card-commande.css',
})
export class PlatCardCommande {
  commande =input.required<LigneCommande>()
}
