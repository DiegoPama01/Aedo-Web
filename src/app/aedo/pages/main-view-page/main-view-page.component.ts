import { Component, HostListener, OnInit } from '@angular/core';
import { OdiseaService } from '../../services/models-services/odiseas.service';
import { ImagesService } from '../../services/models-services/images.service';
import { OdiseaDto } from '../../dto/odisea.dto';
import { error } from 'jquery';
import { forkJoin } from 'rxjs';
import { IOdisea } from '../../interfaces/odisea.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view-page',
  templateUrl: './main-view-page.component.html',
  styleUrls: ['./main-view-page.component.css'],
})
export class MainViewPageComponent implements OnInit {
  isExpanded: boolean = true;
  odiseas?: OdiseaDto[];
  imageUrls: string[] = [];
  isWideScreen: boolean = true;
  isLoading: boolean = true;

  selectedOdisea?: OdiseaDto;
  selectedImg?: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isWideScreen = window.innerWidth >= 768; // Ajusta el valor según el ancho mínimo para considerar una pantalla como "ancha"
  }

  constructor(
    private odiseaService: OdiseaService,
    private imagesService: ImagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.odiseaService.getCollection().subscribe((odiseas: OdiseaDto[]) => {
      this.odiseas = odiseas;
      const downloadRequests = odiseas.map((odisea) =>
        this.imagesService.downloadImage(odisea.getImage().at(0).assetId)
      );

      forkJoin(downloadRequests).subscribe(
        (imageUrls: string[]) => {
          this.imageUrls = imageUrls;
          this.selectedImg = this.imageUrls.at(0);
          this.isLoading = false;
        },
        (error) => {
          console.log('Error al descargar imágenes: ' + error);
          this.isLoading = false;
        }
      );

      this.selectedOdisea = this.odiseas?.at(0);
      this.selectedImg = this.imageUrls.at(0);
    });
  }

  onCardClick(eventData: { odisea: OdiseaDto; imageUrl: string }) {

    if(this.isWideScreen){
      const odisea = eventData.odisea;
      const imageUrl = eventData.imageUrl;
  
      this.selectedOdisea = odisea;
      this.selectedImg = imageUrl;
    }
    else{
      this.router.navigate(['/home/odisea-profile',eventData.odisea.getId()]);
    }
    
  }

  onButtonClick(odiseaId: string) {
    // Haz lo que desees con el valor del botón
    this.router.navigate(['/home/odisea-profile',odiseaId]);
  }
}
