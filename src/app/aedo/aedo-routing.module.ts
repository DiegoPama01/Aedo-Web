import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './pages/administrator/administrator.component';

import { HomeComponent } from './pages/home/home.component';
import { OdiseaRegisterComponent } from './pages/odisea-register/odisea-register.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:"administrator",
        component:AdministratorComponent
      },
      {
        path:"registration",
        component:OdiseaRegisterComponent
      },
      {
        path:"profile",
        component:ProfileViewComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AedoRoutingModule {}