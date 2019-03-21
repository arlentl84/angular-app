import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObraListComponent} from "./modules/Obra/obra-list/obra-list.component";

const routes: Routes = [
  {path:'obras', component:ObraListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
