import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './pages/administrator/administrator.component';

import { HomeComponent } from './pages/home/home.component';
import { OdiseaRegisterComponent } from './pages/odisea-register/odisea-register.component';



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

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AedoRoutingModule {}