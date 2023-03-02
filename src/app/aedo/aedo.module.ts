import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AedoRoutingModule } from './aedo-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AedoRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AedoModule { }
