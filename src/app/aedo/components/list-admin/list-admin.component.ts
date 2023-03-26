import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  
  private listOdiseo: Observable<IOdiseo[]> = this.odiseoService.getCollection();
  constructor(private odiseoService: OdiseosService){
    this.listOdiseo.subscribe(console.log)
  }

  public getList(): Observable<IOdiseo[]> {
    return this.listOdiseo
  }
}
