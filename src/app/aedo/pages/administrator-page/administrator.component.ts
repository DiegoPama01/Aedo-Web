import { Component } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ListLanguagesComponent } from '../../components/list-languages/list-languages.component';
import { ListCategoriesComponent } from '../../components/list-categories/list-categories.component';
import { ListUserComponent } from '../../components/list-user/list-user.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
})
export class AdministratorPageComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Lista de usuarios',
            cols: 1,
            rows: 1,
            component: ListUserComponent,
          },
          {
            title: 'Idiomas',
            cols: 1,
            rows: 1,
            component: ListLanguagesComponent,
          },
          {
            title: 'Categorias',
            cols: 1,
            rows: 2,
            component: ListCategoriesComponent,
          },
        ];
      }
      return [
        {
          title: 'Lista de usuarios',
          cols: 1,
          rows: 2,
          component: ListUserComponent,
        },
        {
          title: 'Idiomas',
          cols: 1,
          rows: 2,
          component: ListLanguagesComponent,
        },
        {
          title: 'Categorías',
          cols: 1,
          rows: 2,
          component: ListCategoriesComponent,
        },
      ];
    }),
    distinctUntilChanged()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  getColCount() {
    return this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
      map((result) => {
        if (result.matches) {
          return 1; // Una columna por fila si es un dispositivo móvil
        } else {
          return 3; // Tres columnas por fila si no es un dispositivo móvil
        }
      })
    );
  }
  
}
