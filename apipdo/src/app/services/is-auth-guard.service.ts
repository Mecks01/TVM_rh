import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuardService implements CanActivate {
  route: ActivatedRouteSnapshot;
  path: ActivatedRouteSnapshot[];
  constructor(private router:Router,
    private auth:AuthService) { }
 
              canActivate(): Observable<boolean> | Promise<boolean> | boolean {
                  if (!localStorage.getItem('currentUser')) {
                    // logged in so return true
                    return true;
                }     
                // not logged in so redirect to login page with the return url
                else{
                  this.router.navigate(['/Personne/view/'+localStorage.getItem('currentUser')]);
                return false;
                }
              }
}