import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'remote-deploy',
        pathMatch: 'full'
      },
      {
        path: 'remote-deploy',
        loadChildren: () => import('./remote-deploy/remote-deploy.module').then(m => m.RemoteDeployModule)
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
