import { Component } from '@angular/core';
import { PanierNavigation } from "../panier-navigation/panier-navigation";

@Component({
  selector: 'app-header-user',
  imports: [PanierNavigation],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
