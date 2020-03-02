import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcHomeComponent } from './abc-home/abc-home.component';

const routes: Routes = [
  { path: '', component: AbcHomeComponent, data: { title: 'landing' } ,
        children: [
          { path: 'feature1', loadChildren: () => import('../feature1/feature1.module').then(m => m.Feature1Module) },
          { path: 'feature2', loadChildren: () => import('../feature2/feature2.module').then(m => m.Feature2Module) },
        ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcLandingRoutingModule { }
