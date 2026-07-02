import { Injectable, signal } from '@angular/core';
import Plat from '../models/plat';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly _plats = signal<Plat[]>([]);
  readonly plats=this._plats
}
