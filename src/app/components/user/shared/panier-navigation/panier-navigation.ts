import { Component, computed, inject } from '@angular/core';
import { PanierStore } from '../../../../services/store/panier/panier-store';

@Component({
  selector: 'app-panier-navigation',
  imports: [],
  templateUrl: './panier-navigation.html',
  styleUrl: './panier-navigation.css',
})
export class PanierNavigation {
  private readonly _panierService = inject(PanierStore);
  readonly plats = this._panierService.plats;
  readonly nombreDePlats = computed(() => this.plats().length);
}
