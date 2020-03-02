import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View2Component } from './view2/view2.component';


const routes: Routes = [
  { path: '', component: View2Component, data: { title: 'view2' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
