import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private marker: any;

  @Output() markerSelected = new EventEmitter<any>();

  private initMap(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log('Ubicación del usuario:', lat, lon);

          this.map = L.map('map', {
            center: [lat, lon],
            zoom: 100,
          });

          const tiles = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              maxZoom: 18,
              minZoom: 3,
              attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }
          );

          if (this.map) {
            tiles.addTo(this.map);
          }

          this.map.on('click', (event:any) => {
            const { lat, lng } = event.latlng;
            if (this.marker) {
              this.map.removeLayer(this.marker);
            }
            this.marker = L.marker([lat, lng]).addTo(this.map);


            this.markerSelected.emit(this.marker);

          });
        },
        (error) => {
          console.error('Error al obtener la ubicación del usuario:', error);
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      console.error('El navegador no admite la geolocalización');
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 0);
  }
}
