import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Personne } from '../models/Personne.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='http://localhost/api' ;

  constructor(private http:HttpClient,
              private route:Router) { }

            
              login(username: string, password: string) {
                return this.http.post<any>('http://localhost/api/auth.php', JSON.stringify({ username: username, password: password }))
                    .pipe(map(user => {
                        // login successful if there's a jwt token in the response
                        if (user.status==200) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', user.data['id']);
                        }
                        return user;
                    }));
            }
              logout(){
                localStorage.removeItem('currentUser');
                this.route.navigate(['auth/signin']) ;
                window.location.reload() ;
              }
}
