import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { freeApiService } from '../services/freeapiservice';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers:[freeApiService]
})
export class HomeModule { }
