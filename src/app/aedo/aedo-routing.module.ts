import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { AdministratorComponent } from './pages/administrator/administrator.component';

import { HomeComponent } from './pages/home/home.component';
import { OdiseaRegisterComponent } from './pages/odisea-register/odisea-register.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { OdiseaProfileComponent } from './pages/odisea-profile/odisea-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'administrator',
        component: AdministratorComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home']))
      },
      {
        path: 'registration',
        component: OdiseaRegisterComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home']))
      },
      {
        path: 'profile',
        component: ProfileViewComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/home']))
      },
      {
        path: 'odisea-profile',
        component: OdiseaProfileComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AedoRoutingModule {}
