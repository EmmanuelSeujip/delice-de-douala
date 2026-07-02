import { Injectable, signal, computed } from '@angular/core';
import Plat from '../models/plat';
import { httpResource } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

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
  private readonly tick = toSignal(interval(5000), { initialValue: 0 });

  // Se recalcule automatiquement à chaque changement de `tick` OU de `plats`
  readonly platDuJour = computed(() => {
    this.tick(); // on "lit" le signal pour créer la dépendance réactive
    const platsArray = this._plats.value() as Plat[] | undefined;
    if (!platsArray || platsArray.length === 0) {
      return undefined;
    }
    return platsArray[Math.floor(Math.random() * platsArray.length)];
  });
}
