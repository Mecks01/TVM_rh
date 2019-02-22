import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker' ;
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PersonneListComponent } from './personne-list/personne-list.component';
import { SinglePersonneComponent } from './personne-list/single-personne/single-personne.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { PersonnesService } from './services/personnes.service';
import {Routes, RouterModule} from '@angular/router' ;
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2' ;
import { NgxWebstorageModule } from 'ngx-webstorage' ;
import { IsAuthGuardService } from './services/is-auth-guard.service';
import { ModalModule } from 'ngx-bootstrap/modal';

const appRoutes: Routes=[
  
  {path:'',canActivate:[IsAuthGuardService],component:SigninComponent},
  {path:'auth/signup',component:SignupComponent},
  {path:'auth/signin',canActivate:[IsAuthGuardService],component:SigninComponent},
  {path :'Personnes', canActivate:[AuthGuardService,AdminGuardService],component:PersonneListComponent},
  {path:'Personne/view/:id',canActivate:[AuthGuardService],component:SinglePersonneComponent},
  {path:'**',canActivate:[IsAuthGuardService],redirectTo :'/auth/signin'}
]


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PersonneListComponent,
    SinglePersonneComponent,
    HeaderComponent
  ],
  imports: [
    // NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation:'reload'}),
    SweetAlert2Module.forRoot() ,
    NgxWebstorageModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PersonnesService,
    AdminGuardService,
    IsAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
