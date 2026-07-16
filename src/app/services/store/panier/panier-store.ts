import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Plat from '../../../models/plat';

@Injectable({
  providedIn: 'root'
})
export class PanierStore {
  private readonly LOCAL_STORAGE_KEY = 'delice::panier';
  private readonly platformId = inject(PLATFORM_ID);
  private _plats = signal<Plat[]>(this.recupererDuStockage());
  readonly plats = this._plats.asReadonly();

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this._plats()));
      }
    });
  }

  ajouterPlat(plat: Plat) {
    this._plats.update(liste => [...liste, plat]);
  }

  retirerPlat(platId: string) {
    this._plats.update(liste => liste.filter(p => p.id !== platId));
  }

  viderPanier() {
    this._plats.set([]);
  }

  private recupererDuStockage(): Plat[] {
    if (!isPlatformBrowser(this.platformId)) return [];
    const panierSauvegarde = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    return panierSauvegarde ? JSON.parse(panierSauvegarde) : [];
  }
}