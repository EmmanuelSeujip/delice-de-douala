import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { RestaurantList } from './restaurant-list/restaurant-list';


@Component({
  selector: 'app-root',
  imports: [Header, RestaurantList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delice');
}
