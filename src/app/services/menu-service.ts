import { Injectable, signal, computed } from '@angular/core';
import Plat from '../models/plat';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly _plats = httpResource<Plat[]>(() => '/api/plat.json');
  private readonly _currentFilter = signal<string>('all');
  readonly filteredPlats = computed(() => {
    const filter = this._currentFilter();
    const allPlats = this._plats.value() as Plat[] | undefined;
    
    if (filter === 'all') {
      return allPlats;
    }
    return allPlats?.filter((plat:Plat) => plat.categorie === filter);
  });
  setFilter(value: string) {
    this._currentFilter.set(value);
  }
}
