import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import ObraRoutes from "./modules/Obra/routes.js";


@NgModule({
  imports: [RouterModule.forRoot(ObraRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
