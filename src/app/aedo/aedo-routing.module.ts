import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './pages/administrator/administrator.component';

import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';


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
        component:RegisterComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AedoRoutingModule {}