import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {IsAuthenticatedGuard} from "./is-authenticated.guard"

const routes: Routes = [
  { path: 'home', canActivate: [IsAuthenticatedGuard],  component: HomeComponent },
  { path: 'products', canActivate: [IsAuthenticatedGuard], component: ProductsComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
