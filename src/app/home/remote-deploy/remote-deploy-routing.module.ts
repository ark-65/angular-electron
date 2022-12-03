import { RouterModule, Routes } from '@angular/router';
import { RemoteDeployComponent } from './remote-deploy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'remote-deploy',
    component: RemoteDeployComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteDeployRoutingModule {}
