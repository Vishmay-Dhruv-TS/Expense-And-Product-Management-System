import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthLayout,
    children:[
      {
        path: '',
        loadComponent: () => import('./features/auth/login/login.js').then(m => m.Login)
      }
    ]
  },
  {
    path: 'app',
    component: MainLayout,
    children:[
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard.js').then(m => m.Dashboard),
      },
    ]
  },
  {
    path:'**',
    redirectTo: 'login'
  }
];
