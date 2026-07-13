import { Routes } from '@angular/router';
import { TemplateAdmin } from './pages/admin/template-admin/template-admin';
import { Home } from './pages/user/home/home';
import { PlatsList } from './components/user/plats-list/plats-list';

export const routes: Routes = [
  {path: '',component:Home},
  { path: 'admin', component: TemplateAdmin },
  {path:'plat', component:PlatsList}
];
