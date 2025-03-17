import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./views/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./views/pages/cart/cart.component').then(m => m.CartComponent)
  },
  { path: '**', redirectTo: '/home' }

];
