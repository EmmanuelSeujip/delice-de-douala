import { Routes } from '@angular/router';
import { TemplateAdmin } from './pages/admin/template-admin/template-admin';
import { Home } from './pages/user/home/home';

export const routes: Routes = [
  {path: '',component:Home},
  { path: 'admin', component: TemplateAdmin },
];
