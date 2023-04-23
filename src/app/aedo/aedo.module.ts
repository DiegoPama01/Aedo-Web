import { AdministratorComponent } from './pages/administrator/administrator.component';
import { AedoRoutingModule } from './aedo-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { OdiseaProfileComponent } from './pages/odisea-profile/odisea-profile.component';
import { OdiseaRegisterComponent } from './pages/odisea-register/odisea-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { OdiseaViewComponent } from './pages/odisea-view/odisea-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { OdiseaFormComponent } from './components/odisea-form/odisea-form.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ResetEmailDialogComponent } from './components/reset-email-dialog/reset-email-dialog.component';
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdministratorComponent,
    OdiseaProfileComponent,
    OdiseaRegisterComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    ListAdminComponent,
    ListUserComponent,
    OdiseaViewComponent,
    ProfileViewComponent,
    OdiseaFormComponent,
    UserStatusComponent,
    ProfileCardComponent,
    ResetEmailDialogComponent,
    ResetPasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    AedoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ]
})
export class AedoModule { }
