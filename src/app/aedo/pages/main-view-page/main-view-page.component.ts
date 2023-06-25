import { Component, HostListener, OnInit } from '@angular/core';
import { OdiseaService } from '../../services/models-services/odiseas.service';
import { ImagesService } from '../../services/models-services/images.service';
import { OdiseaDto } from '../../dto/odisea.dto';
import { error } from 'jquery';
import { distinctUntilChanged, forkJoin, of } from 'rxjs';
import { IOdisea } from '../../interfaces/odisea.interface';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-view-page',
  templateUrl: './main-view-page.component.html',
  styleUrls: ['./main-view-page.component.css'],
})
export class MainViewPageComponent implements OnInit {
  isExpanded: boolean = true;
  isHandset: boolean = false;
  numColumns: number = 2;
  odiseas?: OdiseaDto[];
  imageUrls: string[] = [];
  isWideScreen: boolean = true;
  isLoading: boolean = true;

  selectedOdisea?: OdiseaDto;
  selectedImg?: string;

  @HostListener('window:resize')
  onResize() {
    this.isWideScreen = window.innerWidth >= 768; // Ajusta el valor según el ancho mínimo para 
    this.updateNumColumns();
  }

  updateNumColumns() {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(distinctUntilChanged())
      .subscribe((result) => {
        this.isHandset = result.matches;

        if (this.isHandset) {
          this.isWideScreen = window.innerWidth >= 768;
          this.numColumns = 1; // Pantallas estrechas: 1 columna
        } else {
          this.numColumns = 2; // Pantallas anchas: 2 columnas
        }
      });
  }

  constructor(
    private odiseaService: OdiseaService,
    private imagesService: ImagesService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.updateNumColumns();
    this.odiseaService.getCollection().subscribe((odiseas: OdiseaDto[]) => {
      this.odiseas = odiseas;
      const downloadRequests = odiseas.map((odisea) => {
        if (odisea.getImage()?.at(0)?.assetId) {
          return this.imagesService.downloadImage(odisea.getImage().at(0).assetId).catch((error) => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png');
        } else {
          return of('https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png');
        }
      });
  
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
    if (this.isWideScreen) {
      const odisea = eventData.odisea;
      const imageUrl = eventData.imageUrl;

      this.selectedOdisea = odisea;
      this.selectedImg = imageUrl;
    } else {
      this.router.navigate(['/home/odisea-profile', eventData.odisea.getId()]);
    }
  }

  onButtonClick(odiseaId: string) {
    // Haz lo que desees con el valor del botón
    this.router.navigate(['/home/odisea-profile', odiseaId]);
  }
}
