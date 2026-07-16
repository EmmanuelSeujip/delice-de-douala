import { Component } from '@angular/core';
@Component({
  selector: 'admin-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  navLinks = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin',
    },
    {
      name: 'Restaurant',
      icon: 'restaurant',
      url: '/admin/restaurant',
    },
    {
      name: 'Menus',
      icon: 'food_bank',
      url: '/admin/menus',
    },
    {
      name: 'Commandes',
      icon: 'orders',
      url: '/admin/commandes',
    },
    {
      name: 'Utilisateurs',
      icon: 'group',
      url: '/admin/utilisateurs',
    }
  ];
  selectIndex=0
}
