import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { AppComponent } from './app.component';
import { RemoteDeployRoutingModule } from './pages/remote-deploy/remote-deploy-routing.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'remote-deploy',
        loadChildren: () =>
          import('./pages/remote-deploy/remote-deploy.module').then(
            (m) => m.RemoteDeployModule
          ),
      },
      {
        path: '',
        redirectTo: 'remote-deploy',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    RemoteDeployRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
