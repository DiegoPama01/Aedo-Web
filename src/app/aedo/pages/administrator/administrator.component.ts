import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { OdiseaRegisterComponent } from '../odisea-register/odisea-register.component';
import { ListAdminComponent } from '../../components/list-admin/list-admin.component';
import { ListLanguagesComponent } from '../../components/list-languages/list-languages.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
})
export class AdministratorComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Cosas nazis',
            cols: 1,
            rows: 1,
            component: OdiseaRegisterComponent,
          },
          {
            title: 'Usuarios administrador',
            cols: 1,
            rows: 1,
            component: ListAdminComponent,
          },
          {
            title: 'Idiomas',
            cols: 1,
            rows: 1,
            component: ListLanguagesComponent,
          },
          {
            title: 'Cosas',
            cols: 1,
            rows: 1,
            component: OdiseaRegisterComponent,
          },
        ];
      }

      return [
        {
          title: 'Cosas nazis',
          cols: 2,
          rows: 1,
          component: OdiseaRegisterComponent,
        },
        {
          title: 'Usuarios administrador',
          cols: 1,
          rows: 1,
          component: ListAdminComponent,
        },
        {
          title: 'Idiomas',
          cols: 1,
          rows: 2,
          component: ListLanguagesComponent,
        },
        {
          title: 'Cosas',
          cols: 1,
          rows: 1,
          component: OdiseaRegisterComponent,
        },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
