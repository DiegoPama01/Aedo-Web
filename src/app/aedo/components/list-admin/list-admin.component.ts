import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { OdiseoDto } from '../../dto/odiseo.dto';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  
  private listOdiseo: Observable<OdiseoDto[]> = this.odiseoService.getAdmin();
  constructor(private odiseoService: OdiseoService){
  }

  public getList(): Observable<OdiseoDto[]> {
    return this.listOdiseo
  }
  displayedColumns: string[] = ["name","isAdmin","isEducative"];
  dataSource= this.listOdiseo;
}
