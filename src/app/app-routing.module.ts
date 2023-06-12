import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  {
    path: 'add', component: AddComponent
  },
  {
    path: 'add/:id', component: AddComponent
  }, 
  {
    path:'list', component:ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
