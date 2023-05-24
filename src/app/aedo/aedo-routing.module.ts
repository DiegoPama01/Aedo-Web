import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdministratorPageComponent } from './pages/administrator/administrator.component';

import { HomePageComponent } from './pages/home/home.component';
import { OdiseaRegisterPageComponent } from './pages/odisea-register/odisea-register.component';
import { ProfileViewPageComponent } from './pages/profile-view/profile-view.component';
import { OdiseaProfilePageComponent } from './pages/odisea-profile/odisea-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'administrator',
        component: AdministratorPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home'])),
      },
      {
        path: 'registration',
        component: OdiseaRegisterPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home'])),
      },
      {
        path: 'profile',
        component: ProfileViewPageComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home'])),
      },
      {
        path: 'odisea-profile',
        component: OdiseaProfilePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AedoRoutingModule {}
