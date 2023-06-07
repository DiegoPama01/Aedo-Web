import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdministratorPageComponent } from './pages/administrator-page/administrator.component';

import { HomePageComponent } from './pages/home-page/home.component';
import { OdiseaRegisterPageComponent } from './pages/odisea-register-page/odisea-register.component';
import { ProfileViewPageComponent } from './pages/profile-view-page/profile-view.component';
import { OdiseaProfilePageComponent } from './pages/odisea-profile-page/odisea-profile.component';
import { MainViewPageComponent } from './pages/main-view-page/main-view-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/main' },
  {
    path: 'home',
    redirectTo: '/home/main',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'administrator',
        component: AdministratorPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home/main'])),
      },
      {
        path: 'registration',
        component: OdiseaRegisterPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home/main'])),
      },
      {
        path: 'profile',
        component: ProfileViewPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home/main'])),
      },
      {
        path: 'odisea-profile/:id',
        component: OdiseaProfilePageComponent,
      },
      {
        path: 'odisea-profile/:id/reservate',
        component: ReservationPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home/main'])),
      },
      {
        path: 'main',
        component: MainViewPageComponent
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AedoRoutingModule {}
