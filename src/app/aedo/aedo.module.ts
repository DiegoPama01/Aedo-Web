import { AdministratorPageComponent } from './pages/administrator-page/administrator.component';
import { AedoRoutingModule } from './aedo-routing.module';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageComponent } from './pages/home-page/home.component';
import { LanguageItemComponent } from './components/language-item/language-item.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListLanguagesComponent } from './components/list-languages/list-languages.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MapComponent } from './components/map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { OdiseaFormComponent } from './components/odisea-form/odisea-form.component';
import { OdiseaProfileDetailsComponent } from './components/odisea-profile-details/odisea-profile-details.component';
import { OdiseaProfileOdiseoComponent } from './components/odisea-profile-odiseo/odisea-profile-odiseo.component';
import { OdiseaProfilePageComponent } from './pages/odisea-profile-page/odisea-profile.component';
import { OdiseaRegisterPageComponent } from './pages/odisea-register-page/odisea-register.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileViewPageComponent } from './pages/profile-view-page/profile-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { ResetEmailDialogComponent } from './components/reset-email-dialog/reset-email-dialog.component';
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { MainViewPageComponent } from './pages/main-view-page/main-view-page.component';
import { OdiseaDetailsMapCardComponent } from './components/odisea-details-map-card/odisea-details-map-card.component';
import { OdiseaItemCardComponent } from './components/odisea-item-card/odisea-item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { MaxCapacityDialogComponent } from './components/max-capacity-dialog/max-capacity-dialog.component';

@NgModule({
  declarations: [
    AdministratorPageComponent,
    CategoriesCardComponent,
    CategoryItemComponent,
    CommentListComponent,
    HomePageComponent,
    LanguageItemComponent,
    ListAdminComponent,
    ListCategoriesComponent,
    ListLanguagesComponent,
    ListUserComponent,
    LoginDialogComponent,
    MapComponent,
    OdiseaFormComponent,
    OdiseaProfileDetailsComponent,
    OdiseaProfileOdiseoComponent,
    OdiseaProfilePageComponent,
    OdiseaRegisterPageComponent,
    ProfileCardComponent,
    ProfileViewPageComponent,
    RegisterDialogComponent,
    ResetEmailDialogComponent,
    ResetPasswordDialogComponent,
    UserStatusComponent,
    MainViewPageComponent,
    OdiseaDetailsMapCardComponent,
    OdiseaItemCardComponent,
    ReservationPageComponent,
    MaxCapacityDialogComponent,
  ],
  imports: [
    AedoRoutingModule,
    CommonModule,
    CurrencyMaskModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    NgbAlertModule,
    ReactiveFormsModule,
  ],
})
export class AedoModule {}
