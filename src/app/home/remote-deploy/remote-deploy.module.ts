import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteDeployComponent } from './remote-deploy.component';
import { RemoteDeployRoutingModule } from './remote-deploy-routing.module';

@NgModule({
  declarations: [RemoteDeployComponent],
  imports: [CommonModule, RemoteDeployRoutingModule],
})
export class RemoteDeployModule {}
