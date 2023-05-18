import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { OdiseoDto } from '../../dto/odiseo.dto';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  listOdiseo: Observable<OdiseoDto[]>;
  displayedColumns: string[] = ["name","isAdmin","isEducative"];
  dataSource: Observable<OdiseoDto[]>;
  
  constructor(private odiseoService: OdiseoService){
    this.listOdiseo = this.odiseoService.getCollection();
    this.dataSource = this.listOdiseo;
  }

  public getList(): Observable<OdiseoDto[]> {
    return this.listOdiseo;
  }

  setEducativePrivileges(odiseo: OdiseoDto){
    odiseo.setIsEducative(!odiseo.getIsEducative())
    this.odiseoService.update(odiseo);
  }

  setAdminPrivileges(odiseo: OdiseoDto){
    odiseo.setIsAdmin(!odiseo.getIsAdmin())
    this.odiseoService.update(odiseo);
  }
}
