import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker' ;

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PersonneListComponent } from './personne-list/personne-list.component';
import { SinglePersonneComponent } from './personne-list/single-personne/single-personne.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PersonnesService } from './services/personnes.service';
import { Routes, RouterModule } from '@angular/router' ;
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2' ;
import { NgxWebstorageModule } from 'ngx-webstorage' ;
import { IsAuthGuardService } from './services/is-auth-guard.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap';
import { NgxPaginationModule} from 'ngx-pagination';
import { ProfessionService } from './services/profession.service';
import { AdminGuardService } from './services/admin-guard.service';
import { CompareValidatorDirective } from './shared/compare-validator.directive';

const appRoutes: Routes=[
  
  {path:'',canActivate:[IsAuthGuardService],component:SigninComponent},
  {path:'auth/signup',component:SignupComponent},
  {path:'auth/signin',canActivate:[IsAuthGuardService],component:SigninComponent},
  {path :'Personnes', canActivate:[AuthGuardService,AdminGuardService],component:PersonneListComponent},
  {path:'Personne/view/:id',canActivate:[AuthGuardService],component:SinglePersonneComponent},
  {path:'assets/fichiers/:id',component:SinglePersonneComponent},
  {path:'**',canActivate:[IsAuthGuardService],redirectTo :'/auth/signin'}
]


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PersonneListComponent,
    SinglePersonneComponent,
    HeaderComponent,
    CompareValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation:'reload'}),
    SweetAlert2Module.forRoot() ,
    NgxWebstorageModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PersonnesService,
    IsAuthGuardService,
    ProfessionService,
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
