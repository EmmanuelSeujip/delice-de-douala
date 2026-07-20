import { Routes } from '@angular/router';
import { TemplateAdmin } from './pages/admin/template-admin/template-admin';
import { Home } from './pages/user/home/home';
import { PlatsList } from './pages/user/plats-list/plats-list';
import { Commande } from './pages/user/commande/commande';
import { UserManagement } from './pages/admin/user-management/user-management';
import { Inscription } from './pages/auth-user/inscription/inscription';

export const routes: Routes = [
  { path: '', component: Home },
  { path:'inscription', component:Inscription},
  { path: 'admin', 
    component: TemplateAdmin ,
    children: [
      {
        path:'user',
        component:UserManagement
      }
    ]
      
  },
  { path: 'plat', component: PlatsList },
  { path: 'commande', component: Commande }
];
