import { Routes } from '@angular/router';
import { TemplateAdmin } from './pages/admin/template-admin/template-admin';
import { UserManagement } from './pages/admin/user-management/user-management';
import { Inscription } from './pages/user/auth-user/inscription/inscription';
import { Commande } from './pages/user/commande/commande';
import { Home } from './pages/user/home/home';
import { PlatsList } from './pages/user/plats-list/plats-list';
import { Connexion } from './pages/user/auth-user/connexion/connexion';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inscription', component: Inscription },
  {path:"connexion", component:Connexion},
  {
    path: 'admin',
    component: TemplateAdmin,
    children: [
      {
        path: 'user',
        component: UserManagement
      }
    ]

  },
  { path: 'plat', component: PlatsList },
  { path: 'commande', component: Commande }
];
