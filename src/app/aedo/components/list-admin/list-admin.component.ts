import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  
  private listOdiseo: Observable<IOdiseo[]> = this.odiseoService.getAdmin();
  constructor(private odiseoService: OdiseosService){
  }

  public getList(): Observable<IOdiseo[]> {
    return this.listOdiseo
  }
  displayedColumns: string[] = ["name","isAdmin","isEducative"];
  dataSource= this.listOdiseo;
}
