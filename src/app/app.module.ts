import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', data: {name: 'default', roles: ['all']}, redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', data: { name: 'home', roles: ['default']},
    loadChildren: () => import('./default-landing/default-landing.module').then(m => m.DefaultLandingModule) },
  { path: 'home', data: { name: 'home', roles: ['abc']},
    loadChildren: () => import('./abc-landing/abc-landing.module').then(m => m.AbcLandingModule) },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [Injector],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initApp(injector: Injector) {
  return () => {
    return new Promise((resolve) => {
      const orgId = environment.orgId;
      const filteredRoutes = routes.filter(r => {
        return r.data.roles.indexOf('all') !== -1 || r.data.roles.indexOf(orgId) !== -1;
      });
      const router: Router = injector.get(Router);
      router.resetConfig(filteredRoutes);
      resolve();
    });
  };
}
