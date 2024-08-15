import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'E Commerce',
  },
  {
    path: 'products',
    component: ProductListComponent,
    title: 'Products Page',
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];