import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductCreateComponent } from "./Components/product/product-create/product-create.component";

import { HomeComponent } from "./Views/home/home.component";
import { ProductCrudComponent } from "./Views/product-crud/product-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
