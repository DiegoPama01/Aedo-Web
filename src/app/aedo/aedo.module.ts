import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AedoRoutingModule } from './aedo-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './pages/register/register.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { OdiseaProfileComponent } from './pages/odisea-profile/odisea-profile.component';
import { OdiseaRegisterComponent } from './pages/odisea-register/odisea-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    AdministratorComponent,
    OdiseaProfileComponent,
    OdiseaRegisterComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    AedoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AedoModule { }
