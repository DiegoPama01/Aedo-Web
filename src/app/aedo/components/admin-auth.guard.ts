import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { onAuthStateChanged } from '@angular/fire/auth';
import { OdiseoService } from '../services/models-services/odiseos.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  user?: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private odiseoService: OdiseoService
  ) {
    onAuthStateChanged(authenticationService.getAuth(), (user) => {
      if (user) {
        this.odiseoService.getById(user.uid).then((odiseo) => {
          this.user = odiseo.getOdiseo();
        });
      }
    });
  }

  canActivate(): boolean {
    // Aquí es donde colocarás la lógica de tu guard para verificar si el usuario está autorizado.
    // Si el usuario está autorizado, devuelve true. De lo contrario, redirige y devuelve false.

    // Ejemplo básico: Permitir acceso solo si el usuario tiene un rol de administrador
    if (this.user) {
      if (this.user.isAdmin == true) {
        return true;
      } else {
        this.router.navigate(['/home/main']);
        return false;
      }
    } else {
      this.router.navigate(['/home/main']);
      return false;
    }
  }
}
