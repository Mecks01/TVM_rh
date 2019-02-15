import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate{
  route: ActivatedRouteSnapshot;
  path: ActivatedRouteSnapshot[];
  constructor(private router:Router) { }
 
              canActivate(
): Observable<boolean> | Promise<boolean> | boolean {
                  if (localStorage.getItem('currentUser')) {
                    // logged in so return true
                    return true;
                }     
                // not logged in so redirect to login page with the return url
                  this.router.navigate(['/auth/signin']);
                return false;
              }
    }
