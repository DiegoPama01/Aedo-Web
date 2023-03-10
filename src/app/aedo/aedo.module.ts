import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AedoRoutingModule } from './aedo-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogCardComponentComponent } from './components/log-card-component/log-card-component.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { OdiseaProfileComponent } from './pages/odisea-profile/odisea-profile.component';
import { OdiseaRegisterComponent } from './pages/odisea-register/odisea-register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LogCardComponentComponent,
    RegisterComponent,
    AdministratorComponent,
    OdiseaProfileComponent,
    OdiseaRegisterComponent
  ],
  imports: [
    CommonModule,
    AedoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AedoModule { }
