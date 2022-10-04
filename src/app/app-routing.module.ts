import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponentComponent } from './product-component/product-component.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  { path: 'Product', component: ProductComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
