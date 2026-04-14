import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { OrderCompleteComponent } from './pages/order-complete/order-complete.component';
import { OrderCancelledComponent } from './pages/order-cancelled/order-cancelled.component';
import { DeliveryStatusComponent } from './pages/delivery-status/delivery-status.component';
import { DishComponent } from '../dish/dish.component'; // Caminho corrigido

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'delivery-status', component: DeliveryStatusComponent },
  { path: 'order-cancelled', component: OrderCancelledComponent },
  { path: 'order-complete', component: OrderCompleteComponent },
  { path: 'dishes', component: DishComponent }, // Rota para DishComponent
];
