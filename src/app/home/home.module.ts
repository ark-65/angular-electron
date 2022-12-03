import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ThyLayoutModule } from 'ngx-tethys/layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ThyLayoutModule],
})
export class HomeModule {}
