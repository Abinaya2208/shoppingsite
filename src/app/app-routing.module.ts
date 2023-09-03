import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponentComponent } from './items-component/items-component.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"item/:selectionType",
    component:ItemsComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
