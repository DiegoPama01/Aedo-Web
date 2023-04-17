import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { OdiseaRegisterComponent } from '../odisea-register/odisea-register.component';
import { ListAdminComponent } from '../../components/list-admin/list-admin.component';
import { ListUserComponent } from '../../components/list-user/list-user.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Usuarios administrador', cols: 1, rows: 1, component:ListAdminComponent },
          { title: 'Lista de usuarios', cols: 1, rows: 1, component:ListUserComponent },
          { title: 'Lista de idiomas', cols: 1, rows: 1, component:OdiseaRegisterComponent }
        ];
      }

      return [
        { title: 'Usuarios administrador', cols: 1, rows: 1 ,component:ListAdminComponent},
        { title: 'Lista de usuarios', cols: 1, rows: 2 ,component:ListUserComponent},
        { title: 'Lista de idiomas', cols: 1, rows: 1,component:OdiseaRegisterComponent }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
