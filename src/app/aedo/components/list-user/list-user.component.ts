import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { AuthenticationService } from '../../services/authentication.service';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  private listOdiseo: Observable<IOdiseo[]> = this.odiseoService.getCollection();
  constructor(private odiseoService: OdiseosService){
  }

  public getList(): Observable<IOdiseo[]> {
    return this.listOdiseo
  }

  displayedColumns: string[] = ["name","isAdmin","isEducative"];
  dataSource= this.listOdiseo;

  setEducativePrivileges(odiseo:IOdiseo){
    this.odiseoService.update({...odiseo, isEducative:!odiseo.isEducative})
  }

  setAdminPrivileges(odiseo:IOdiseo){

    this.odiseoService.update({...odiseo, isAdmin:!odiseo.isAdmin})
  }
}
