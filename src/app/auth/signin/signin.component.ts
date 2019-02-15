import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router,  ActivatedRoute} from '@angular/router' ;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authFailed:boolean ;
  isAuth=true ;
  loading = false;
  model: any = {};

  constructor(private Auth:AuthService ,
     private router:Router) { }

  ngOnInit() {
  }

  login(f) {
    this.loading = true;
    this.Auth.login(this.model.username, this.model.password)
        .subscribe(
            data => {

            if(data.status==200)
             {
              this.router.navigate(['/Personnes']); 
              window.location.reload() ;
             }
             else
             {
                this.isAuth=false ;
                f.reset() ;
                this.loading = false;
             }
            });
}
}
