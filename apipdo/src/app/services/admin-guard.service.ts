import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuardService implements CanActivate{
  route: ActivatedRouteSnapshot;
  path: ActivatedRouteSnapshot[];
  constructor(private router:Router) { }
 
              canActivate(): Observable<boolean> | Promise<boolean> | boolean {
                  if (localStorage.getItem('currentUserGrade') !== 'Employé' && localStorage.getItem('currentUserGrade') !== 'Stagiaire') {
                    // logged as admin so return true
                    return true;
                }     
                // not logged as admin so redirect to the profile
                  this.router.navigate(['personne/view/'+localStorage.getItem('currentUser')]);
                  return false;
              }
    }