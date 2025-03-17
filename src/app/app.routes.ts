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
  {
    path: 'checkout',
    loadComponent: () => import('./views/pages/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'order-complete',
    loadComponent: () => import('./views/pages/order-complete/order-complete.component').then(m => m.OrderCompleteComponent)
  },
  { path: '**', redirectTo: '/home' }

];
