import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Plat from '../models/plat';
import { httpResource } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private platformId = inject(PLATFORM_ID);
  private readonly _plats = httpResource<Plat[]>(() => isPlatformBrowser(this.platformId) ? environment.platApi : undefined);
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
  private readonly tick = toSignal(isPlatformBrowser(this.platformId) ? interval(5000) : of(0), { initialValue: 0 });
  readonly platDuJour = computed(() => {
    this.tick(); 
    const platsArray = this._plats.value() as Plat[] | undefined;
    if (!platsArray || platsArray.length === 0) {
      return undefined;
    }
    return platsArray[Math.floor(Math.random() * platsArray.length)];
  });
}
