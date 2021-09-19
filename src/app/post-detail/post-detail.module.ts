import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from '../services/freeapiservice';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    HttpClientModule
  ],
  providers: [freeApiService],

})
export class PostDetailModule { }
