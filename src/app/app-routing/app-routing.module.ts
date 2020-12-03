import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ProductsComponent } from '../components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { IngredComponent } from '../components/ingred/ingred.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingred', component: IngredComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
