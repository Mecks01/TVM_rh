import { Component } from '@angular/core';
import { PersonnesService } from './services/personnes.service';
import { AuthService } from './services/auth.service';
import { Personne } from './models/Personne.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
  }

  ngOnInit(){

  }
}
