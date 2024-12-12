import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.authService._is_logged()) {
      return true;  // Allow access if logged in
    } else {
      // Redirect to login if not logged in
      return this.router.createUrlTree(['user/login']);
    }
  }
}
