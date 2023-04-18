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
import { RegisterComponent } from './pages/register/register.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListLanguagesComponent } from './components/list-languages/list-languages.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    AdministratorComponent,
    OdiseaProfileComponent,
    OdiseaRegisterComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    ListAdminComponent,
    ListUserComponent,
    ListLanguagesComponent,
    ListCategoriesComponent,
    CategoriesCardComponent,
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
    LayoutModule,
    NgbAlertModule,
  ],
})
export class AedoModule {}
