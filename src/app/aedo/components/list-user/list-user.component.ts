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

}
