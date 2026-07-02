import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu-service';
import { Observable, of } from 'rxjs';
import Plat from '../../models/plat';
@Component({
  selector: 'app-carte',
  imports: [],
  templateUrl: './carte.html',
  styleUrl: './carte.css',
})
export class Carte {
  private _menu = inject(MenuService);

  readonly plats = this._menu.filteredPlats;
  currentFilter: string = 'all';
  filterTabs = [
    { id: 'all', label: 'Tout le Menu' },
    { id: 'Plats', label: 'Plats' },
    { id: 'Grillades', label: 'Grillades' },
    { id: 'Végétarien', label: 'Végétarien' },
    { id: 'Boissons', label: 'Boissons' }
  ];
  platDuJour=this._menu.platDuJour
  ngOnInit(): void {}

  setFilter(id: string) {
    this.currentFilter = id;
    this._menu.setFilter(id);
  }
}