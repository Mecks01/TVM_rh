(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<body>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n      </div>  \n</body>\n\n   "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _personne_list_personne_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personne-list/personne-list.component */ "./src/app/personne-list/personne-list.component.ts");
/* harmony import */ var _personne_list_single_personne_single_personne_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./personne-list/single-personne/single-personne.component */ "./src/app/personne-list/single-personne/single-personne.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _services_is_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/is-auth-guard.service */ "./src/app/services/is-auth-guard.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_profession_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/profession.service */ "./src/app/services/profession.service.ts");
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/admin-guard.service */ "./src/app/services/admin-guard.service.ts");
/* harmony import */ var _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");

























var appRoutes = [
    { path: '', canActivate: [_services_is_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["IsAuthGuardService"]], component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'auth/signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'auth/signin', canActivate: [_services_is_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["IsAuthGuardService"]], component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'Personnes', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"], _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_23__["AdminGuardService"]], component: _personne_list_personne_list_component__WEBPACK_IMPORTED_MODULE_9__["PersonneListComponent"] },
    { path: 'Personne/view/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]], component: _personne_list_single_personne_single_personne_component__WEBPACK_IMPORTED_MODULE_10__["SinglePersonneComponent"] },
    { path: 'assets/fichiers/:id', component: _personne_list_single_personne_single_personne_component__WEBPACK_IMPORTED_MODULE_10__["SinglePersonneComponent"] },
    { path: '**', canActivate: [_services_is_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["IsAuthGuardService"]], redirectTo: '/auth/signin' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
                _personne_list_personne_list_component__WEBPACK_IMPORTED_MODULE_9__["PersonneListComponent"],
                _personne_list_single_personne_single_personne_component__WEBPACK_IMPORTED_MODULE_10__["SinglePersonneComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_24__["CompareValidatorDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"].forRoot(),
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_17__["NgxWebstorageModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["TabsModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"],
                _services_personnes_service__WEBPACK_IMPORTED_MODULE_14__["PersonnesService"],
                _services_is_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["IsAuthGuardService"],
                _services_profession_service__WEBPACK_IMPORTED_MODULE_22__["ProfessionService"],
                _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_23__["AdminGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"col-md-6 col-md-offset-3\">\n    <h2><u>Login</u></h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Numéro téléphone</label>\n            <input placeholder=\"Téléphone\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"username.errors?.required && username.touched && f.submitted && !username.valid\" class=\"help-block\">Numéro obligatoire!</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Mot de passe</label>\n            <input placeholder=\"Mot de passe\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"password.errors?.required && password.touched &&f.submitted && !password.valid\" class=\"help-block\">Password obligatoire!</div>\n        </div>\n        <div class=\"form-group\">\n                <div class=\"alert alert-danger\" *ngIf=\"!isAuth\">\n                        <strong>Numéro ou Mot de passe incorrecte!!</strong>\n                </div>\n            <button [disabled]=\"loading && f.invalid\" class=\"btn btn-primary\">Se connecter </button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a (click)=\"this.router.navigate(['auth/signup'])\" class=\"btn btn-link\">Nouveau employé</a>\n        </div>\n    </form>\n</div>-->\n<!-- col 1 -->\n<div class=\"container nopadding\">\n    <div class=\"col-md-2 col-md-offset-3 nopadding\" >\n        <!-- login form -->\n        <div id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" class=\"nopadding\">\n     \n              <div class=\"modal-dialog\" >\n                    <div class=\"loginmodal-container\" style=\"color: rgb(255, 255, 255); font-size: 18px \">\n                        <img src=\"assets/images/logo.png\" class=\"img-rounded\">\n                        <br>\n                        <br>\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && login(f)\" #f=\"ngForm\" id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n                                \n                                <div style=\"margin-bottom: 25px\" class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\"> \n                                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input style=\"font-size:20px\" placeholder=\"Téléphone\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                                </div>\n                                <div style=\"margin-bottom: 25px\" class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                                    <input  style=\"font-size:20px\" placeholder=\"Mot de passe\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                                </div>\n                                <div class=\"form-group\">\n                                        <div class=\"alert alert-danger\" *ngIf=\"!isAuth\">\n                                                <strong>Numéro ou Mot de passe incorrecte!!</strong>\n                                        </div>\n                                    <button style=\"font-size:20px\" [disabled]=\"loading || f.invalid\" class=\"btn btn-primary btn-block btn-sm\">Se connecter </button>\n                                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                                    <button (click)=\"gotoSignup()\" style=\"font-size:20px;color:rgb(255, 255, 255)\" class=\"btn btn-success btn-block \">Nouveau employé</button>\n                                </div>\n                            </form>\n                    </div>\n                </div>\n              </div>   \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0px; }\n\n:focus {\n  outline: none !important; }\n\n/****** LOGIN MODAL ******/\n\n.loginmodal-container {\n  padding: 30px;\n  max-width: 400px;\n  width: 100% !important;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0 0 35px #080808;\n  overflow: hidden;\n  font-family: roboto;\n  border-radius: 6px; }\n\n/*loginmodal-container input[type=text], input[type=password] {\r\n   height: 44px;\r\n color: black;\r\n   font-size: 14px;\r\n   width: 100%;\r\n   margin-bottom: 10px;\r\n   -webkit-appearance: none;\r\n   background: #fff;\r\n   border:0;\r\n    border-radius: 2px; \r\n   padding: 0 8px;\r\n   box-sizing: border-box;\r\n   -moz-box-sizing: border-box;\r\n  \r\n }*/\n\n.loginmodal-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px  #4d90fe;\n  border-top: 1px solid #4d90fe;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.loginmodal-container input[type=text]:hover, input[type=password]:focus {\n  border: 1px  #4d90fe;\n  border-top: 1px solid #4d90fe;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.loginmodal {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  /* border-radius: 3px; */\n  /* -webkit-user-select: none;\r\n   user-select: none; */ }\n\n.loginmodal-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  background-color: #4d90fe;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */ }\n\n.loginmodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #357ae8;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */ }\n\n.loginmodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  transition: opacity ease 0.5s; }\n\n.login-help {\n  font-size: 12px; }\n\na:hover, a:focus {\n  color: #FFF;\n  text-decoration: none; }\n\n.nopadding {\n  padding-top: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxUVk1cXFBlcnNvbm5lcy9zcmNcXGFwcFxcYXV0aFxcc2lnbmluXFxzaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx5QkFBdUIsRUFDMUI7O0FBRUQsMkJBQTJCOztBQUMzQjtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBRXRCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDakIsbUJBQWtCLEVBQ3JCOztBQUlEOzs7Ozs7Ozs7Ozs7OztJQWNHOztBQUVIO0VBQ0UscUJBQW9CO0VBQ3BCLDhCQUE2QjtFQUc3QiwrQ0FBMkMsRUFDNUM7O0FBRUQ7RUFDRyxxQkFBb0I7RUFDcEIsOEJBQTZCO0VBRzdCLCtDQUEyQyxFQUM1Qzs7QUFFRjtFQUNFLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGlDQUFnQztFQUNoQyxpQkFBZ0I7RUFDaEIsYUFBWTtFQUVkLHlCQUF5QjtFQUN6Qjt3QkFDdUIsRUFDdEI7O0FBRUQ7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBVztFQUNYLFlBQVc7RUFDWCxzQ0FBa0M7RUFDbEMsMEJBQXlCO0VBRXpCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLDRGQUE0RixFQUM3Rjs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxZQUFXO0VBQ1gsc0NBQWtDO0VBQ2xDLDBCQUF5QjtFQUN6Qiw0RkFBNEYsRUFDN0Y7O0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWiw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDRyw0QkFBMkIsRUFFN0IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbiBib2R5e1xyXG4gICAgIHBhZGRpbmctdG9wOjBweCA7XHJcbiB9XHJcbiA6Zm9jdXMge1xyXG4gICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gIFxyXG4gLyoqKioqKiBMT0dJTiBNT0RBTCAqKioqKiovXHJcbiAubG9naW5tb2RhbC1jb250YWluZXIge1xyXG4gICBwYWRkaW5nOiAzMHB4O1xyXG4gICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gLy8gIGJhY2tncm91bmQtY29sb3I6ICAjMDBhODg1O1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICBib3gtc2hhZG93OiAwIDAgMzVweCAjMDgwODA4O1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuIH1cclxuICBcclxuICBcclxuICBcclxuIC8qbG9naW5tb2RhbC1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICBoZWlnaHQ6IDQ0cHg7XHJcbiBjb2xvcjogYmxhY2s7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgYm9yZGVyOjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7IFxyXG4gICBwYWRkaW5nOiAwIDhweDtcclxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIFxyXG4gfSovXHJcbiAgXHJcbiAubG9naW5tb2RhbC1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpob3ZlciwgaW5wdXRbdHlwZT1wYXNzd29yZF06aG92ZXIge1xyXG4gICBib3JkZXI6IDFweCAgIzRkOTBmZTtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZDkwZmU7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gfVxyXG5cclxuIC5sb2dpbm1vZGFsLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmhvdmVyLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1c3tcclxuICAgIGJvcmRlcjogMXB4ICAjNGQ5MGZlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZDkwZmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICBcclxuIC5sb2dpbm1vZGFsIHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICBmb250LXdlaWdodDogNzAwO1xyXG4gICBoZWlnaHQ6IDM2cHg7XHJcbiAgLy8gcGFkZGluZzogMCA4cHg7XHJcbiAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXHJcbiAvKiAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICB1c2VyLXNlbGVjdDogbm9uZTsgKi9cclxuIH1cclxuICBcclxuIC5sb2dpbm1vZGFsLXN1Ym1pdCB7XHJcbiAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMzMDc5ZWQ7ICovXHJcbiAgIGJvcmRlcjogMHB4O1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7XHJcbiAgIC8vcGFkZGluZzogMTdweCAwcHg7XHJcbiAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCAgIGZyb20oIzRkOTBmZSksIHRvKCM0Nzg3ZWQpKTsgKi9cclxuIH1cclxuICBcclxuIC5sb2dpbm1vZGFsLXN1Ym1pdDpob3ZlciB7XHJcbiAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMyZjViYjc7ICovXHJcbiAgIGJvcmRlcjogMHB4O1xyXG4gICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3YWU4O1xyXG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsICAgZnJvbSgjNGQ5MGZlKSwgdG8oIzM1N2FlOCkpOyAqL1xyXG4gfVxyXG4gIFxyXG4gLmxvZ2lubW9kYWwtY29udGFpbmVyIGEge1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGNvbG9yOiAjNjY2O1xyXG4gICBmb250LXdlaWdodDogNDAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgb3BhY2l0eTogMC42O1xyXG4gICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41cztcclxuIH0gXHJcbiAgXHJcbiAubG9naW4taGVscHtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gIFxyXG4gYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gfVxyXG4gLm5vcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvL21hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(Auth, router) {
        this.Auth = Auth;
        this.router = router;
        this.isAuth = true;
        this.loading = false;
        this.model = {};
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.login = function (f) {
        var _this = this;
        this.loading = true;
        this.Auth.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (data.status == 200) {
                if (localStorage.getItem('currentUserGrade') == 'Employé') {
                    _this.router.navigate(['/Personne/view/' + localStorage.getItem('currentUser')]);
                    window.location.reload();
                }
                else {
                    _this.router.navigate(['/Personnes']);
                    window.location.reload();
                }
            }
            else {
                _this.isAuth = false;
                f.reset();
                _this.loading = false;
            }
        });
    };
    SigninComponent.prototype.gotoSignup = function () {
        this.router.navigate(['auth/signup']);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible != 'false' ; then personnal else professionnal\"></div>\n\n<ng-template #personnal>   \n    <div class=\"container-fluid col-md-9 col-sm-offset-2\">   \n          <div id=\"theForm\" class=\"panel panel-primary\">\n            <div class=\"panel-heading\">  <h3><u>Informations personnels</u></h3></div>\n            <div class=\"panel-body\">\n            <form #f=\"ngForm\" name=\"theForm\" (submit)=\"addPers(f)\"  enctype=\"multipart/form-data\" method=\"POST\">\n             \n              <div class=\"row\">\n                  <div class=\"form-group col-sm-6 btn-block\" *ngIf=\"isIn==false\">\n                      <div class=\"alert alert-danger btn-block\"  >\n                          <strong>Veuillez choisir un format de fichier Image correct (jpg,png,gif,jpeg)</strong>\n                      </div>\n                  </div>\n                  <div class=\"form-group col-sm-6 btn-block\" *ngIf=\"isSelected && isIn==true\">\n                      <div class=\"alert alert-success btn-block\"  >\n                          <strong>Image \" {{nomImg}} \" insérée.</strong>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"form-group form-group col-sm-4\">\n                      <span class=\"btn-file ace-icon fa fa-plus-circle bigger-110 btn btn-sm btn-success \" style=\"font-size:17px\">\n                        <b class=\"glyphicon glyphicon-camera\"></b>\n                        <b> Photo d'identification</b>\n                        <input type=\"file\" id=\"avatar\" name=\"avatar\" (change)=\"check()\" accept=\"Image/*\">\n                      </span>\n                  </div>\n              </div>   \n              \n                    <div class=\"row\">\n                      <div class=\"form-group col-sm-4\">\n                          <label>Nom:</label>\n                            <input type=\"text\"\n                                    class=\"form-control\"\n                                    name=\"nom\"\n                                    [(ngModel)]=\"personne.nom\"\n                                    #nomPers=\"ngModel\"\n                                    required\n                                    pattern=\"^[a-zA-Z]+$\" placeholder=\"Nom\" \n                                    autocomplete=\"off\">\n                              <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"nomPers.errors?.required && nomPers.touched\">\n                                    Le <b> nom </b> est obligatoire !!\n                              </span>\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                          <label>Prénom:</label>\n                              <input type=\"text\"\n                                    class=\"form-control\"\n                                    name=\"prenom\"\n                                    [(ngModel)]=\"personne.prenom\"\n                                    #prenomPers=\"ngModel\"\n                                    required\n                                    placeholder=\"Prénom\" \n                                    autocomplete=\"off\">\n                              <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"prenomPers.errors?.required && prenomPers.touched\">\n                                Le <b> Prénom </b> est obligatoire !!\n                              </span>\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label>Genre:</label>\n                        <select class=\"form-control\"\n                                name=\"genre\"\n                                [(ngModel)]=\"personne.genre\"\n                                #genre=\"ngModel\"\n                                required>\n                                <option value=\"Homme\">Homme</option>\n                                <option value=\"Jeune homme\">Jeune homme</option>\n                                <option value=\"Femme\">Femme</option>\n                                <option value=\"Jeune Femme\">Jeune femme</option>\n                                \n                        </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                      <div class=\"form-group col-sm-4\">\n                          <label>Adresse:</label>\n                          <input type=\"text\"\n                                class=\"form-control\"\n                                name=\"adresse\"\n                                [(ngModel)]=\"personne.adresse\"\n                                #adresse=\"ngModel\"\n                                required\n                                placeholder=\"Adresse\" \n                                autocomplete=\"off\">\n                          <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"adresse.errors?.required && adresse.touched\">\n                            <b> Adresse </b>obligatoire !!\n                          </span>\n                      </div>\n\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"province\">Province</label>\n                        <select class=\"form-control\"                                                                          \n                                name=\"province\"\n                                [(ngModel)]=\"prov\"\n                                #province=\"ngModel\"\n                                required>\n                                <option value=\"Antananarivo\">Antananarivo</option>\n                                <option value=\"Antsiranana\">Antsiranana</option>\n                                <option value=\"Antsirabe\">Antsirabe</option>\n                                <option value=\"Fianarantsoa\">Fianarantsoa</option>\n                                <option value=\"Mahajanga\">Mahajanga</option>\n                                <option value=\"Toamasina\">Toamasina</option>\n                                <option value=\"Toliara\">Toliara</option>\n                                \n                        </select>\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                              <label for=\"dateNaissance\">Date de naissance</label>\n                              <input type=\"text\" \n                                      class=\"form-control\" \n                                      bsDatepicker \n                                      [bsConfig]=\"datePickerConfig\" \n                                      id=\"dateNaiss\"  \n                                      [(ngModel)]=\"stringDate\"\n                                      #dateNaiss=\"ngModel\"\n                                      name=\"dateNaiss\"\n                                      required\n                                      autocomplete=\"off\"\n                                      placeholder=\"Date de naissance\"\n                                      placement=\"top\">\n                      </div>\n                  </div>\n\n                  <div class=\"row\">\n                    \n                  </div> \n\n                <div class=\"row\">\n                    <div class=\"form-group col-sm-6\">\n                        <label>Numéro Téléphone:</label>\n                        <input type=\"text\"\n                              class=\"form-control\"\n                              name=\"numTel\"\n                              [(ngModel)]=\"personne.numTel\"\n                              #numTel=\"ngModel\"\n                              required\n                              pattern=\"[0-9]{10}\"\n                              autocomplete=\"off\"\n                              placeholder=\"Numéro téléphone\"\n                              (change)=\"onChangeNumber()\">\n                        <span class=\"help-block danger\" *ngIf=\"numTel.errors?.required && numTel.touched\" style=\"color:green\">\n                          <b> Numéro </b> obligatoire !\n                        </span>\n                        <span style=\"color:red\" class=\"help-block danger\" *ngIf=\"numTel.errors?.pattern && numTel.touched\">\n                            Le numéro doit seulement contenir des Chiffres (0-9) et minimum 10 chiifres !\n                        </span>\n                        <span  class=\"alert alert-danger btn-block\" *ngIf=\"existingNumber\">\n                          Ce numéro existe déjà (Vous êtes déjà inscrit) !\n                        </span>\n                      </div>\n                    <div class=\"form-group col-sm-6\">\n                        <label>Adresse E-Mail:</label>\n                        <input type=\"text\"\n                              class=\"form-control\"\n                              name=\"email\"\n                              [(ngModel)]=\"personne.email\"\n                              #email=\"ngModel\"\n                              pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}\"\n                              autocomplete=\"off\"\n                              placeholder=\"Adresse email\">\n                        <span style=\"color:red\" class=\"help-block danger\" *ngIf=\"email.errors?.pattern && email.touched\">\n                            Adresse <b> E-Mail</b> invvalide!\n                        </span>\n                      </div> \n                </div> \n\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-6\">\n                      <label>Mot de Passe:</label>\n                        <input type=\"password\"\n                              id=\"password\"\n                              class=\"form-control\"\n                              name=\"passwordPers\"\n                              [(ngModel)]=\"personne.password\"\n                              #passwordPers=\"ngModel\"\n                              required\n                              autocomplete=\"off\"\n                              placeholder=\"Mot de Passe\" \n                              required>\n                              <span class=\"glyphicon glyphicon-eye-open\" style=\"cursor:pointer;\" (click)=\"onViewPassword('password')\"></span>\n                          <span class=\"help-block danger\" *ngIf=\"passwordPers.errors?.required && passwordPers.touched\" style=\"color:green\">\n                                  <b>Password</b> obligatoire!\n                          </span>\n                  </div>\n\n                  <div class=\"form-group col-sm-6\">\n                      <label>Confirmation mot de Passe:</label>\n                      <input type=\"password\"\n                            class=\"form-control\"\n                            id=\"Cpassword\"\n                            name=\"Cpassword\"\n                            [(ngModel)]=\"Cpass\"\n                            #Cpassword=\"ngModel\"\n                            required\n                            autocomplete=\"off\"\n                            placeholder=\"Confirmez votre mot de Passe\" \n                            compare=\"passwordPers\"                                                            \n                            required>\n                            <span class=\"glyphicon glyphicon-eye-open\" style=\"cursor:pointer;\" (click)=\"onViewPassword('Cpassword')\"></span>\n                        <span class=\"help-block danger\" *ngIf=\"Cpassword.errors?.required && Cpassword.touched\" style=\"color:green\">\n                               Confirmation <b>Password</b> obligatoire!\n                        </span>\n                        <span class=\"help-block danger\" *ngIf=\"Cpassword.errors?.compare && Cpassword.touched\" style=\"color:green\">\n                          Les <b>mots de passe</b>  ne correspondent pas!\n                        </span>\n                        \n                  </div>   \n              </div>\n                    \n                <div class=\"row\">\n                    <div class=\"form-group col-sm-4\">\n                        <label>Nationalité :</label>\n                        <select class=\"form-control\"\n                                name=\"nationalite\"\n                                [(ngModel)]=\"personne.nationalite\"\n                                #nationalite=\"ngModel\"\n                                required >\n                                <option value=\"Malagasy\" selected><b>Malagasy</b></option>\n                                <option value=\"Nationalité étrangère\"><b>Autre nationalité</b></option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-sm-4\">\n                        <label>Etat civil :</label>\n                        <select class=\"form-control\"\n                                name=\"civilite\"\n                                [(ngModel)]=\"personne.civilite\"\n                                #civilite=\"ngModel\"\n                                required>\n                                <option value=\"Marié\">Marié</option>\n                                <option value=\"Divorcé\">Divorcé</option>\n                                <option value=\"Célibataire\">Célibataire</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-sm-4\">\n                        <label>Nombre d'enfants :</label>\n                        <input type=\"number\"\n                              min=\"0\"\n                              class=\"form-control\"\n                              name=\"nbEnfants\"\n                              [(ngModel)]=\"personne.nbEnfants\"\n                              #nbEnfants=\"ngModel\"\n                              required\n                              placeholder=\"Nombre d'enfants\" \n                              autocomplete=\"off\">\n                    </div>\n                </div>\n                <a routerLink=\"/auth/signin\" style=\"font-size: 18px ;color:black\"><b>S'identifier</b></a>\n                        <button\n                            class=\"btn btn-info btn-sm pull-right\"\n                            [disabled]=\"existingNumber || f.invalid || isIn==false\">Enregistrer informations personnels\n                        </button>\n                </form>\n              </div>\n          </div>\n    </div>\n</ng-template>\n\n<!--Professionnnal template-->\n\n<ng-template #professionnal>\n    <div class=\"container-fluid col-md-9 col-sm-offset-2\">   \n      <div id=\"theForm\" class=\"panel panel-info\">\n        <div class=\"panel-heading\">  <h3 ><u>Informations professionnels</u></h3></div>\n        <div class=\"panel-body\">\n        <form #f2=\"ngForm\" name=\"theForm\" (submit)=\"addInfo()\"  enctype=\"multipart/form-data\" method=\"POST\">\n            \n          <div class=\"row\">\n              <div class=\"alert alert-success btn-block\" >\n                  <b>Veuillez maintenant remplir vos informations professionnels ci-dessous</b>\n              </div>\n              <div class=\"alert alert-info btn-block\"  *ngIf=\"profService.isInCV==true\">\n                <strong>Votre CV est bien insérée :) </strong>\n              </div>\n              <div class=\"alert alert-danger btn-block\"  *ngIf=\"profService.isInCV==false\">\n                  <strong>Veuillez choisir un format de fichier texte correct (.doc - .pdf - .html)</strong>\n              </div> \n                <div class=\"form-group col-sm-6 pull-right\">\n                  <span class=\"btn-file ace-icon fa fa-plus-circle bigger-110 btn btn-sm btn-info pull-right\" style=\"font-size:17px\">\n                      <b class=\"glyphicon glyphicon-folder-open\"></b>\n                      <b>  Insérez votre CV ici</b> \n                      <input type=\"file\" id=\"CV\" name=\"CV\" (change)=\"checkCV()\" accept=\".pdf,.doc,.html\">\n                  </span>\n                </div>\n          </div>   \n\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                      <label>Numéro Matricule:</label>\n                        <input type=\"text\"\n                                class=\"form-control\"\n                                name=\"mat\"\n                                [(ngModel)]=\"profession.matricule\"\n                                #mat=\"ngModel\"\n                                required\n                                pattern=\"[0-9]*\" placeholder=\"Matricule\" \n                                autocomplete=\"off\">\n                          <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"mat.errors?.required && mat.touched\">\n                                Numéro <b> matricule </b>  obligatoire !\n                          </span>\n                          <span style=\"color:red\" class=\"help-block danger\" *ngIf=\"mat.errors?.pattern && mat.touched\">\n                              Seulement des Chiffres (0-9) please !\n                          </span>\n                  </div>\n\n                  <div class=\"form-group col-sm-4\">\n                      <label>E-Mail professionnel:</label>\n                        <input type=\"text\"\n                                class=\"form-control\"\n                                name=\"emailProf\"\n                                [(ngModel)]=\"profession.emailProf\"\n                                #emailProf=\"ngModel\"\n                                pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}\"\n                                autocomplete=\"off\"\n                                placeholder=\"Adresse mail au travail\"\n                                >\n                            <span style=\"color:red\" class=\"help-block danger\" *ngIf=\"emailProf.errors?.pattern && emailProf.touched\">\n                                 Adresse <b> E-Mail</b> invalide!\n                            </span>\n                            <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"emailProf.errors?.required && emailProf.touched\">\n                                <b> Adresse mail professionnel </b>obligatoire !\n                            </span>\n                  </div>\n\n                  <div class=\"form-group col-sm-4\">\n                      <label>Téléphone professionnel:</label>\n                      <input type=\"text\"\n                            class=\"form-control\"\n                            name=\"numProf\"\n                            [(ngModel)]=\"profession.numProf\"\n                            #numProf=\"ngModel\"\n                            required\n                            pattern=\"[0-9]{10}\"\n                            autocomplete=\"off\"\n                            placeholder=\"Numéro téléphone professionnel\">\n                      <span class=\"help-block danger\" *ngIf=\"numProf.errors?.required && numProf.touched\" style=\"color:green\">\n                        <b> Numéro professionnel</b> obligatoire !\n                      </span>\n                      <span style=\"color:red\" class=\"help-block danger\" *ngIf=\"numProf.errors?.pattern && numProf.touched\">\n                          Le numéro doit seulement contenir des Chiffres (0-9) et minimum 10 chiifres !\n                      </span>\n                    </div>\n              </div>\n\n\n              <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                      <label for=\"grade\">Grade:</label>\n                      <select class=\"form-control\"                                                                          \n                              name=\"grade\"\n                              [(ngModel)]=\"profession.grade\"\n                              #grade=\"ngModel\"\n                              required \n                              (change)=\"this.profService.verifChef(profession.grade)\">\n                              <option [disabled]=\"this.profService.existDirecteur\" value=\"Directeur\">Directeur</option>\n                              <option [disabled]=\"this.profService.isFullChef\" value=\"Chef\">Chef</option>\n                              <option value=\"Employé\">Employé</option>\n                              <option value=\"Stagiaire\">Stagiaire</option>\n                      </select>                  \n                  </div>\n\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"service\">Service:</label>\n                    <select class=\"form-control\"                                                                          \n                            name=\"service\"\n                            [(ngModel)]=\"profession.nomService\"\n                            #service=\"ngModel\"\n                            (change) =\"profService.service(profession.nomService)\"\n                            required>\n                            <option disabled selected style=\"color: grey\">Choisir service</option>\n                            <option *ngFor=\"let grade of profService.getGrade(profession.grade) ; let i=index\"  [disabled]=\"profService.selectedChefExists[i]==true\" value=\"{{grade}}\">{{grade}}</option>\n                    </select>\n                    <span class=\"help-block danger\" *ngIf=\"service.errors?.required && service.touched\" style=\"color:green\">\n                      Choisissez un <b> service</b> !\n                    </span>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"fonction\">Fonction:</label>\n                    <select class=\"form-control\"                                                                          \n                            name=\"fonction\"\n                            [(ngModel)]=\"profession.fonction\"\n                            #fonction=\"ngModel\"\n                            required>\n                            <option disabled selected style=\"color: grey\" value=\"Choisir fonction\">Choisir fonction</option>\n                            <option *ngFor=\"let fonct of this.profService.getService(profession.grade)\" value=\"{{fonct}}\">{{fonct}}</option>\n                    </select>\n                    <span class=\"help-block danger\" *ngIf=\"service.errors?.required && service.touched\" style=\"color:green\">\n                      Choisissez un <b> service</b> !\n                    </span>\n                  </div>\n              </div>\n\n              <div class=\"row\">\n\n                    <div class=\"form-group col-sm-6\">\n                        <label for=\"dateembauche\">Date d'embauche:</label>\n                        <input type=\"text\" \n                                class=\"form-control\" \n                                bsDatepicker \n                                [bsConfig]=\"datePickerConfig\" \n                                id=\"dateembauche\"  \n                                [(ngModel)]=\"stringDate\"\n                                #dateembauche=\"ngModel\"\n                                name=\"dateembauche\"\n                                required\n                                autocomplete=\"off\"\n                                placeholder=\"Date d'embauche\"\n                                placement=\"top\">\n                     </div>\n                     <div class=\"form-group col-sm-6\">\n                        <label for=\"diplome\">Cliquez pour ajouter un diplome :</label>\n                        <input type=\"button\" style=\"background-color:slategrey;color: cornsilk\" class=\"btn btn-default form-control\" (click)=\"onAddDiplome(diplome)\" value=\"Ajouter diplome\"/>\n                     </div>\n              </div>\n\n              <div class=\"row\" *ngIf=\"longDiplome> 0\">\n                <table class=\"table table-striped table-bordered\">\n                  <thead style=\"background-color:teal;color: cornsilk\">\n                    <tr>\n                      <td><b><u>Degrée: </u></b></td>\n                      <td><b><u>Filière: </u></b></td>\n                      <td><b><u>Mention: </u></b></td>\n                      <td><b><u>Nom institution: </u></b></td>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let dipl of profession.diplome\">\n                      <td>{{dipl.degree}}</td>\n                      <td>{{dipl.filiere}}</td>\n                      <td> {{dipl.mention}}</td>\n                      <td>{{dipl.nomInstitution}}</td>\n                    </tr>\n                  </tbody>\n                </table>  \n              </div>\n<!--POPUP pour diplomes-->\n                <ng-template #diplome>\n                      <form #f3=\"ngForm\" class=\"modal-body\">\n                          <div class=\"modal-header\">\n                            <h3><b><u>Diplome</u></b></h3>\n                          </div>\n                          <div class=\"form-group col-sm-3\">\n                            <label for=\"degree\">Niveau d'étude:</label>\n                                <select \n                                      class=\"form-control\"                                                                          \n                                      name=\"deg\"\n                                      [(ngModel)]=\"diplome1.degree\"\n                                      #deg=\"ngModel\"\n                                      required>\n                                      <option *ngFor=\"let deg of this.profService.degrees\" value=\"{{deg}}\">{{deg}}</option>\n                                </select> \n                          </div>\n                          <div class=\"form-group col-sm-3\">\n                              <label>Filière d'étude:</label>\n                              <input type=\"text\"\n                                      class=\"form-control\"\n                                      name=\"fil\"\n                                      [(ngModel)]=\"diplome1.filiere\"\n                                      #fil=\"ngModel\"\n                                      autocomplete=\"off\"\n                                      placeholder=\"Filière\"\n                                      required>\n                                  <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"fil.errors?.required && fil.touched\">\n                                      <b> Filière </b>obligatoire !\n                                  </span>\n                          </div>\n\n                          <div class=\"form-group col-sm-3\">\n                              <label for=\"mention\">Mention</label>\n                                  <select \n                                        class=\"form-control\"                                                                          \n                                        name=\"mention\"\n                                        [(ngModel)]=\"diplome1.mention\"\n                                        #mention=\"ngModel\"\n                                        required>\n                                        <option *ngFor=\"let men of this.profService.mentions\" value=\"{{men}}\">{{men}}</option>\n                                  </select> \n                            </div>\n\n                            <div class=\"form-group col-sm-3\">\n                                <label>Institution :</label>\n                                <input type=\"text\"\n                                        class=\"form-control\"\n                                        name=\"inst\"\n                                        [(ngModel)]=\"diplome1.nomInstitution\"\n                                        #inst=\"ngModel\"\n                                        autocomplete=\"off\"\n                                        placeholder=\"Institution\"\n                                        required>\n                                    <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"inst.errors?.required && inst.touched\">\n                                        <b>Nom institution </b>obligatoire !\n                                    </span>\n                            </div>\n                      <div class=\"modal-footer row\">\n                          <button\n                                  type=\"button\"\n                                  class=\"btn btn-warning pull-right\"\n                                  [disabled]=\"f3.invalid\"\n                                  (click)=\"addThisDiplome()\">Ajouter ce diplome\n                          </button>\n                          <button \n                              type=\"button\" \n                              class=\"btn btn-default pull-left\" \n                              (click)=\"modalRef.hide()\">Annuler\n                          </button>\n                      </div>\n                        </form>\n                  </ng-template>\n                    <button\n                        class=\"btn btn-success btn-sm pull-right\"\n                        [disabled]=\"f2.invalid || profession.nomService=='Choisir service' || profession.fonction == 'Choisir fonction'\">Envoyer informations professionnels\n                    </button>\n            </form>\n          </div>\n      </div>\n    </div>\n  </ng-template>\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Modal styles */\n.modal .modal-dialog {\n  max-width: 400px; }\n.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n  padding: 20px 30px; }\n.modal .modal-content {\n  border-radius: 3px; }\n.modal .modal-footer {\n  background: #ecf0f1;\n  border-radius: 0 0 3px 3px; }\n.modal .modal-title {\n  display: inline-block; }\n.modal .form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #dddddd; }\n.modal textarea.form-control {\n  resize: vertical; }\n.modal .btn {\n  border-radius: 2px;\n  min-width: 100px; }\n.modal form label {\n  font-weight: normal; }\n.btn-file {\n  position: relative;\n  overflow: hidden; }\n.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;\n  cursor: inherit;\n  display: block; }\n.panel-body {\n  background-color: #e8e8f8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxUVk1cXFBlcnNvbm5lcy9zcmNcXGFwcFxcYXV0aFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0ksaUJBQWdCLEVBQ25CO0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjtBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLDJCQUEwQixFQUM3QjtBQUNEO0VBQ0ksc0JBQXFCLEVBQ3hCO0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUN4QjtBQUNEO0VBQ0ksaUJBQWdCLEVBQ25CO0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25CO0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFdBQVU7RUFDVixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCO0FBQ0Q7RUFDSSwwQkFBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNb2RhbCBzdHlsZXMgKi9cclxuLm1vZGFsIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWhlYWRlciwgLm1vZGFsIC5tb2RhbC1ib2R5LCAubW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbn1cclxuLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbn1cclxuLm1vZGFsIC5tb2RhbC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm1vZGFsIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcclxufVxyXG4ubW9kYWwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuLm1vZGFsIC5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxufVx0XHJcbi5tb2RhbCBmb3JtIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cdFxyXG4uYnRuLWZpbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTsgICBcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wYW5lbC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyNDgpIDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Personne_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Personne.model */ "./src/app/models/Personne.model.ts");
/* harmony import */ var src_app_services_personnes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var src_app_models_professional_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/professional.model */ "./src/app/models/professional.model.ts");
/* harmony import */ var src_app_models_diplome_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/diplome.model */ "./src/app/models/diplome.model.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_profession_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/profession.service */ "./src/app/services/profession.service.ts");













Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('fr', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_7__["frLocale"]);
var SignupComponent = /** @class */ (function () {
    function SignupComponent(personnesService, profService, router, elem, localeService, bsModalService) {
        this.personnesService = personnesService;
        this.profService = profService;
        this.router = router;
        this.elem = elem;
        this.localeService = localeService;
        this.bsModalService = bsModalService;
        this.error = '';
        this.file = '';
        this.success = '';
        this.selectedFile = null;
        this.personne = new src_app_models_Personne_model__WEBPACK_IMPORTED_MODULE_2__["Personne"]();
        this.isSelected = false;
        this.listExt = [".jpg", '.png', '.gif', '.jpeg'];
        this.prov = "Antananarivo";
        this.Cpass = "";
        ///////////Variable professionnal data
        this.profession = new src_app_models_professional_model__WEBPACK_IMPORTED_MODULE_9__["Professionnal"]('', '', '', '', '', '', '', '');
        this.datePickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            dateInputFormat: "DD/MM/YYYY",
        });
        this.localeService.use('fr');
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.profession.diplome = [];
        this.longDiplome = this.profession.diplome.length;
        this.visible = localStorage.getItem('state');
        this.personne.nationalite = "Malagasy";
        this.personne.civilite = "Célibataire";
        this.profession.nomService = "Choisir service";
        this.profession.fonction = "Choisir fonction";
        this.profService.nomService = "Choisir fonction";
        this.profession.grade = "Employé";
        this.personne.genre = "Homme";
        this.degree = "Master";
        this.profService.onVerifDirecteur('Directeur', 'TVM');
        this.profService.fullChef();
        this.profService.selectedChefExists = [];
        this.personne.nbEnfants = 0;
    };
    SignupComponent.prototype.addPers = function () {
        var _this = this;
        this.success = 'Vous vous &ecirctes enregistré avec succès! ';
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: "Confirmation enregistrement !?",
            text: "Confirmer info personnels et remplir info professionnels ? ",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: 'darkcyan',
            confirmButtonText: 'Oui, enregistrer!',
            cancelButtonText: "Annuler!"
        }).then(function (val) {
            if (val.value == true) {
                //upload image ;
                if (_this.isSelected == true) {
                    var files = _this.elem.nativeElement.querySelector('#avatar').files;
                    var formData = new FormData();
                    var file = files[0];
                    _this.extension = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
                    formData.append('avatar', file, file.name);
                    _this.personne.image = _this.personne.numTel + "_Image" + _this.extension;
                    _this.personnesService.uploadImage(formData, _this.personne.image).subscribe(function (res) {
                        console.log(res['message']);
                    });
                }
                else {
                    _this.personne.image = "defaultImg.png";
                }
                //Store personnes
                _this.personne.province = _this.prov;
                _this.personne.nom = _this.personne.nom.toUpperCase();
                _this.personne.dateNaissance = _this.personnesService.frenchDate(_this.stringDate);
                _this.personnesService.store(_this.personne)
                    .subscribe(function (res) {
                    //Mis a jour liste pers
                    _this.personnesService.personnes = res;
                }, function (err) { return _this.error = err; });
                _this.stringDate = "";
                _this.visible = 'false';
                localStorage.setItem('state', _this.visible);
            }
        });
    };
    ////////////////check Valide Image
    SignupComponent.prototype.check = function () {
        this.isSelected = true;
        var files = this.elem.nativeElement.querySelector('#avatar').files;
        var file = files[0];
        this.file = file.name;
        this.nomImg = file.name;
        this.extension = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
        if (this.listExt.indexOf(this.extension) >= 0) {
            this.isIn = true;
        }
        else {
            this.isIn = false;
        }
    };
    SignupComponent.prototype.onChangeNumber = function () {
        var _this = this;
        this.personnesService.getAllNumber().subscribe(function (res) {
            _this.numbers = res;
            var exist = _this.numbers.indexOf(_this.personne.numTel);
            if (exist === -1) {
                _this.existingNumber = false;
            }
            else {
                _this.existingNumber = true;
            }
        }, function (err) {
            _this.error = err;
        });
    };
    /////add Diplome
    SignupComponent.prototype.onAddDiplome = function (template) {
        this.diplome1 = new src_app_models_diplome_model__WEBPACK_IMPORTED_MODULE_10__["Diplome"]('Master', '', 'Assez bien', '');
        this.modalRef = this.bsModalService.show(template, { class: 'container' });
    };
    ////push diplome
    SignupComponent.prototype.addThisDiplome = function () {
        this.profession.diplome.push(this.diplome1);
        this.longDiplome = this.profession.diplome.length;
        this.modalRef.hide();
    };
    SignupComponent.prototype.addInfo = function () {
        var _this = this;
        this.success = 'Vous vous &ecirctes enregistré avec succès! ';
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: "Valider l'enregistrement !?",
            text: "Confirmer l'inscription comme " + this.personne.nom + "? ",
            type: "success",
            showCancelButton: true,
            confirmButtonColor: 'darkcyan',
            confirmButtonText: 'Oui, enregistrer!',
            cancelButtonText: "Annuler!"
        }).then(function (val) {
            if (val.value == true) {
                _this.profession.idEmp = +localStorage.getItem('idEmp');
                _this.profession.pathCV = _this.selectingCV(_this.profession.matricule);
                //Store profession
                _this.profession.dateEmbauche = _this.personnesService.frenchDate(_this.stringDate);
                _this.profService.sendInfo(_this.profession).subscribe();
                localStorage.removeItem('state');
                localStorage.removeItem('idEmp');
                if (!localStorage.getItem('currentUser')) {
                    localStorage.setItem('currentUser', _this.profession.idEmp.toString());
                    localStorage.setItem('currentUserGrade', _this.profession.grade);
                    localStorage.setItem('currentUserServ', _this.profession.nomService);
                }
                _this.router.navigate(['/Personnes']);
                window.location.reload();
            }
        });
    };
    //upload CV ;
    SignupComponent.prototype.selectingCV = function (matricule) {
        if (this.profService.isSelectedCV == true) {
            var files = this.elem.nativeElement.querySelector('#CV').files;
            var formData = new FormData();
            var file = files[0];
            formData.append('CV', file, file.name);
            var pathCV = matricule + "_CV" + this.profService.extensionCV;
            this.profService.uploadCV(formData, pathCV).subscribe();
        }
        else {
            pathCV = "Pas de CV";
        }
        return pathCV;
    };
    ////////////////check Valide CV file
    SignupComponent.prototype.checkCV = function () {
        this.profService.isSelectedCV = true;
        var files = this.elem.nativeElement.querySelector('#CV').files;
        var file = files[0];
        this.file = file.name;
        console.log(file.size);
        this.profService.extensionCV = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
        if (this.profService.listExtCV.indexOf(this.profService.extensionCV) >= 0) {
            this.profService.isInCV = true;
        }
        else {
            this.profService.isInCV = false;
        }
    };
    SignupComponent.prototype.onViewPassword = function (champ) {
        this.personnesService.onViewPassword(champ);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_personnes_service__WEBPACK_IMPORTED_MODULE_3__["PersonnesService"],
            src_app_services_profession_service__WEBPACK_IMPORTED_MODULE_12__["ProfessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-inverse fixed-top\" id=\"mainNav\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\"> \n        <li>\n            <img src=\"assets/images/logo.png\" class=\"img-responsive\" width=\"100px\" height=\"60px\">\n        </li>\n        <li ><span style=\"color:darkslategrey\"> salu</span></li>\n      <li >\n        <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"Personnes\" *ngIf=\"isAuth==true\">\n            <span class=\"glyphicon glyphicon-list-alt\"></span>\n                Liste Employés</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n            <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"auth/signin\" *ngIf=\"isAuth==false\">\n              <span class=\"glyphicon glyphicon-log-in\"></span>\n              S'identifier</a>\n          </li>  \n          <li >\n              <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"auth/signup\" *ngIf=\"isAuth==false\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n                Nouvel Employé </a>\n            </li>  \n      <li>\n        <a (click)=\"onSignOut()\" *ngIf=\"isAuth==true\" style=\"cursor: pointer;\">\n            <span class=\"glyphicon glyphicon-log-out\"></span>\n          Déconnexion</a>\n      </li>\n    </ul>\n  </div>  \n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav {\n  background-color: darkslategrey;\n  color: white; }\n\n#mainNav :hover {\n  color: #7bd47f;\n  font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcYXN1c1xcRGVza3RvcFxcVFZNXFxQZXJzb25uZXMvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQStCO0VBQy9CLGFBQXdCLEVBQ3pCOztBQUNEO0VBQ0UsZUFBYztFQUNkLDJFQUEwRSxFQUMzRSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbk5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICAjbWFpbk5hdiA6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzdiZDQ3ZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBjdXJzaXZlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isAuth = this.isIn();
    };
    HeaderComponent.prototype.onSignOut = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.isIn = function () {
        if (localStorage.getItem('currentUser'))
            return true;
        else
            return false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/Personne.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/Personne.model.ts ***!
  \******************************************/
/*! exports provided: Personne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personne", function() { return Personne; });
var Personne = /** @class */ (function () {
    function Personne() {
    }
    return Personne;
}());



/***/ }),

/***/ "./src/app/models/diplome.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/diplome.model.ts ***!
  \*****************************************/
/*! exports provided: Diplome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diplome", function() { return Diplome; });
var Diplome = /** @class */ (function () {
    function Diplome(degree, filiere, mention, nomInstitution) {
        this.degree = degree;
        this.filiere = filiere;
        this.mention = mention;
        this.nomInstitution = nomInstitution;
    }
    return Diplome;
}());



/***/ }),

/***/ "./src/app/models/professional.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/professional.model.ts ***!
  \**********************************************/
/*! exports provided: Professionnal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Professionnal", function() { return Professionnal; });
var Professionnal = /** @class */ (function () {
    function Professionnal(matricule, emailProf, numProf, dateEmbauche, nomService, fonction, grade, pathCV, diplome) {
        this.matricule = matricule;
        this.emailProf = emailProf;
        this.numProf = numProf;
        this.dateEmbauche = dateEmbauche;
        this.nomService = nomService;
        this.fonction = fonction;
        this.grade = grade;
        this.pathCV = pathCV;
        this.diplome = diplome;
    }
    ;
    return Professionnal;
}());



/***/ }),

/***/ "./src/app/personne-list/personne-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/personne-list/personne-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n</head>\n<div *ngIf=\"error\">{{error}}</div>\n<div *ngIf=\"success\">{{success}}</div>\n\n<body style=\"background-color: rgb(232, 232, 248)\">\t\n<!---->\t\n            <!--our content goes here-->\n            <div class=\"container-fluid content\">\n                    <div class=\"row profile\">\n                        <div class=\"col-md-3\" style=\"background-color: sandybrown ;border-radius: 8px\">\n                            <div class=\"profile-sidebar position-fixed\" style=\"background-color: rgb(241, 237, 199) \">\n                            <!-- SIDEBAR USERPIC -->\n                            <div class=\"profile-userpic\">\n                                <img [src]=\"linkImg\" class=\"avatar\" alt=\"\">\n                            </div>\n                            <!-- END SIDEBAR USERPIC -->\n                            <!-- SIDEBAR USER TITLE -->\n                            <div class=\"profile-usertitle\">\n                                <div class=\"profile-usertitle-name\" style=\"color:rgb(8, 10, 42) ;font-size: 20px\">\n                                        {{currentUser.nom}} \n                                </div>\n                                <div class=\"profile-usertitle-name\" style=\"font-size: 18px\">\n                                        {{currentUser.prenom}}\n                                </div>\n                                \n                                <div class=\"profile-usertitle-job\" style=\"font-size: 15px\">\n                                        {{cUprofessionnel.fonction}}  \n                                </div>\n                                <div class=\"profile-usertitle-job\" style=\"font-size: 15px\">\n                                      {{cUprofessionnel.nomService}}\n                                </div>\n                            </div>\n                            <!-- END SIDEBAR USER TITLE -->\n                            <!-- SIDEBAR BUTTONS -->\n                            <div class=\"profile-userbuttons\">\n                                    <button class=\"btn btn-warning btn-sm\" (click)=\"gotoProfilUser()\"> Détails</button>\n                            </div>\n                            <!-- END SIDEBAR BUTTONS -->\n                            <!-- SIDEBAR MENU -->\n                            <div class=\"profile-usermenu sidebar-sticky\">\n                                \n                            </div>\n                            <!-- END MENU -->\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-9\">\n                                <div class=\"profile-content\">\n\n\n                                        <div class=\"portlet light bordered\">\n                                                <div class=\"table-title\">\n                                                    <div class=\"row\">\n                                                        <div class=\"form-group col-sm-5\">\n                                                            <div class=\"caption-subject font-blue-madison bold uppercase\">\n                                                                <h3><u>Liste des <b>Employés</b></u>({{getNombre()}})</h3>\n                                                            </div>\n                                                        </div>\t\n                                                        \n                                                        <div class=\"form-group col-sm-5 pull-right\">\n                                                            <br>\n                                                                <button (click)=\"onNewPersonne()\" \n                                                                class=\"btn btn-info\" >\n                                                                <i class=\"glyphicon glyphicon-plus\"></i> \n                                                                    <b><span style=\"color:ivory ; font-size: 16px\">Nouvelle employé</span></b>\n                                                            </button>\n                                                        </div> \n                                                    </div>\n                                                </div>\n                                                <div>\n                                                    <table class=\"table table-striped table-wrapper-scroll-y\" cellspacing=\"0\" width=\"100%\">\n                                                            <thead>\n                                                                    <tr style=\"text-decoration:underline ; color: black\">\n                                                                        <th></th>\n                                                                        <th>Matricule</th>\n                                                                        <th >Nom-Prénom</th>\n                                                                        <th>Fonction</th>\n                                                                        <th>Service</th>\n                                                                        <th style=\"text-align: center\">Actions</th>\n                                                                    </tr>\n                                                            </thead>\n                                                            <tbody>\n                                                                    <tr *ngFor=\"let personne of personnes| paginate: {itemsPerPage : 4 ,currentPage: p }; index as i \">\n                                                                            <td><img src=\"assets/images/{{personne.image}}\" class=\"avatar\" height=\"55px\" width=\"60px\"></td>\n                                                                            <td>{{personne.matricule}}</td>\n                                                                            <td scope=\"row\"><b  style=\"font-size: 13px ;color: black\"> {{personne.nom}}</b> \n                                                                                {{personne.prenom}}</td>\n                                                                            <td style=\"color: rgb(8, 10, 42)\">{{personne.fonction}}</td>\n                                                                            <td>{{personne.nomService}}</td>\n                                                                            <td>                                                      \n                                                                            <button class=\"btn btn-success btn-block\" (click)=\"gotoProfil(personne.id)\"> Détails</button>\n                                                                            <button class=\"btn btn-danger btn-block btn-sm\" (click)=\"onDeletePers(personne.id,personne.nom)\">Supprimer</button>\n                                                                            </td>\n                                                                    </tr>\n                                                            </tbody>\n                                                    </table>\n                                                    <div class=\"clearfix\">\n                                                            <div class=\"hint-text\" style=\"font-size:19px ; color:darkred \">Liste arreté sur <span class=\"label label-info\"><b>{{getNombre()}}</b></span> Employés.</div>\n                                                            <pagination-controls class=\"pull-right\" (pageChange)=\"p = $event\"  previousLabel=\"Précédent\" nextLabel=\"Suivant\"></pagination-controls>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            \n                                        </div>\n                                    </div>\n                        </div>\n            </div>\n</body>\n</html>                                \t\t                            "

/***/ }),

/***/ "./src/app/personne-list/personne-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/personne-list/personne-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  color: #566787;\n  background: #f5f5f5;\n  font-family: 'Varela Round', sans-serif;\n  font-size: 14px; }\n\n.table-title {\n  padding-bottom: 5px;\n  background: #08092c;\n  color: #fff;\n  padding: 15px 25px;\n  margin: -15px -20px 10px;\n  border-radius: 3px 3px 0 0; }\n\n.table-title h {\n  margin: 5px 0 0;\n  font-size: 24px; }\n\n.table-title .btn-group {\n  float: right; }\n\n.table-title .btn {\n  color: #fff;\n  float: right;\n  font-size: 20px;\n  border: none;\n  border-radius: 2px;\n  border: none;\n  outline: none !important;\n  margin-left: 10px; }\n\ntable.table .avatar {\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 10px; }\n\ntable.table tr th, table.table tr td {\n  border-color: #e9e9e9;\n  padding: 12px 15px;\n  vertical-align: middle; }\n\ntable.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #fcfcfc; }\n\ntable.table-striped.table-hover tbody tr:hover {\n  background: #f5f5f5; }\n\ntable.table td i {\n  font-size: 19px; }\n\ntable.table .avatar {\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 10px; }\n\n.pagination {\n  float: right;\n  margin: 0 0 5px; }\n\n.pagination li a {\n  border: none;\n  font-size: 13px;\n  min-width: 30px;\n  min-height: 30px;\n  color: #999;\n  margin: 0 2px;\n  line-height: 30px;\n  border-radius: 2px !important;\n  text-align: center;\n  padding: 0 6px; }\n\n.pagination li a:hover {\n  color: #666; }\n\n.pagination li.active a, .pagination li.active a.page-link {\n  background: #03A9F4; }\n\n.pagination li.active a:hover {\n  background: #0397d6; }\n\n.pagination li.disabled i {\n  color: #ccc; }\n\n.pagination li i {\n  font-size: 16px;\n  padding-top: 6px; }\n\n.hint-text {\n  float: left;\n  margin-top: 10px;\n  font-size: 13px; }\n\n/* Modal styles */\n\n.modal .modal-dialog {\n  max-width: 400px; }\n\n.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n  padding: 20px 30px; }\n\n.modal .modal-content {\n  border-radius: 3px; }\n\n.modal .modal-footer {\n  background: #ecf0f1;\n  border-radius: 0 0 3px 3px; }\n\n.modal .modal-title {\n  display: inline-block; }\n\n.modal .form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #dddddd; }\n\n.modal textarea.form-control {\n  resize: vertical; }\n\n.modal .btn {\n  border-radius: 2px;\n  min-width: 100px; }\n\n.modal form label {\n  font-weight: normal; }\n\n.table-wrapper-scroll-y {\n  display: block;\n  max-height: 600px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n\nbody {\n  padding-top: 30px; }\n\n.glyphicon {\n  margin-bottom: 10px;\n  margin-right: 10px; }\n\nsmall {\n  display: block;\n  line-height: 1.428571429;\n  color: #999; }\n\nbody {\n  background: #e9ecf3; }\n\n/*profile*/\n\n.profile-sidebar {\n  float: left;\n  width: 300px;\n  margin-right: 20px; }\n\n.profile-content {\n  overflow: hidden; }\n\n.profile-sidebar-portlet {\n  padding: 30px 0 0 !important; }\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important; }\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px; }\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 7px; }\n\n.profile-usertitle-job {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 13px;\n  font-weight: 800;\n  margin-bottom: 7px; }\n\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px; }\n\n.profile-userbuttons .btn {\n  margin-right: 5px; }\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0; }\n\n.profile-userbuttons button {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px; }\n\n.profile-usermenu {\n  margin-top: 30px;\n  padding-bottom: 20px; }\n\n.profile-usermenu ul li {\n  border-bottom: 1px solid #f0f4f7; }\n\n.profile-usermenu ul li:last-child {\n  border-bottom: none; }\n\n.profile-usermenu ul li a {\n  color: #93a3b5;\n  font-size: 16px;\n  font-weight: 400; }\n\n.profile-usermenu ul li a i {\n  margin-right: 8px;\n  font-size: 16px; }\n\n.profile-usermenu ul li a:hover {\n  background-color: #fafcfd;\n  color: #5b9bd1; }\n\n.profile-usermenu ul li.active a {\n  color: #5b9bd1;\n  background-color: #f6f9fb;\n  border-left: 2px solid #5b9bd1;\n  margin-left: -2px; }\n\n.profile-stat {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f0f4f7; }\n\n.profile-stat-title {\n  color: #7f90a4;\n  font-size: 25px;\n  text-align: center; }\n\n.profile-stat-text {\n  color: #5b9bd1;\n  font-size: 11px;\n  font-weight: 800;\n  text-align: center; }\n\n.profile-desc-title {\n  color: #7f90a4;\n  font-size: 17px;\n  font-weight: 600; }\n\n.profile-desc-text {\n  color: #7e8c9e;\n  font-size: 14px; }\n\n.profile-desc-link i {\n  width: 22px;\n  font-size: 19px;\n  color: #abb6c4;\n  margin-right: 5px; }\n\n.profile-desc-link a {\n  font-size: 14px;\n  font-weight: 600;\n  color: #5b9bd1; }\n\n@media (max-width: 991px) {\n  .profile-sidebar {\n    float: none;\n    width: 100% !important;\n    margin: 0; }\n  .profile-sidebar > .portlet {\n    margin-bottom: 20px; }\n  .profile-content {\n    overflow: visible; } }\n\n/*portlet*/\n\n.page-portlet-fullscreen {\n  overflow: hidden; }\n\n.portlet {\n  margin-top: 0;\n  margin-bottom: 25px;\n  padding: 0;\n  border-radius: 4px; }\n\n.portlet.portlet-fullscreen {\n  z-index: 10060;\n  margin: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff; }\n\n.portlet.portlet-fullscreen > .portlet-body {\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0 10px; }\n\n.portlet.portlet-fullscreen > .portlet-title {\n  padding: 0 10px; }\n\n.portlet > .portlet-title {\n  border-bottom: 1px solid #eee;\n  padding: 0;\n  margin-bottom: 10px;\n  min-height: 41px;\n  border-radius: 4px 4px 0 0; }\n\n.portlet > .portlet-title:after,\n.portlet > .portlet-title:before {\n  content: \" \";\n  display: table; }\n\n.portlet > .portlet-title > .actions > .btn,\n.portlet > .portlet-title > .actions > .btn-group > .btn,\n.portlet > .portlet-title > .actions > .btn-group > .btn.btn-sm,\n.portlet > .portlet-title > .actions > .btn.btn-sm {\n  padding: 4px 10px;\n  font-size: 13px;\n  line-height: 1.5; }\n\n.portlet > .portlet-title > .actions .btn-icon-only {\n  padding: 5px 7px 3px; }\n\n.portlet > .portlet-title > .actions .btn-icon-only.btn-default {\n  padding: 4px 6px 2px; }\n\n.portlet > .portlet-title > .actions .btn-icon-only.btn-default > i {\n  font-size: 14px; }\n\n.portlet > .portlet-title > .actions .btn-icon-only.btn-default.fullscreen {\n  font-family: FontAwesome;\n  color: #a0a0a0;\n  padding-top: 3px; }\n\n.portlet > .portlet-title > .actions .btn-icon-only.btn-default.fullscreen.btn-sm {\n  padding: 3px !important;\n  height: 27px;\n  width: 27px; }\n\n.portlet > .portlet-title > .tools > a {\n  display: inline-block;\n  height: 16px;\n  margin-left: 5px;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.portlet > .portlet-title > .tools > a.fullscreen {\n  display: inline-block;\n  top: -3px;\n  position: relative;\n  font-size: 13px;\n  font-family: FontAwesome;\n  color: #ACACAC; }\n\n.portlet > .portlet-title > .tools > a.fullscreen:before {\n  content: \"\\f065\"; }\n\n.portlet > .portlet-title > .tools > a.fullscreen.on:before {\n  content: \"\\f066\"; }\n\n.portlet > .portlet-title > .tools > a:hover {\n  text-decoration: none;\n  transition: all .1s ease-in-out;\n  opacity: .8;\n  filter: alpha(opacity=80); }\n\n.portlet > .portlet-title > .nav-tabs > li {\n  background: 0 0;\n  margin: 0;\n  border: 0; }\n\n.portlet > .portlet-title > .nav-tabs > li > a {\n  background: 0 0;\n  margin: 5px 0 0 1px;\n  border: 0;\n  padding: 8px 10px;\n  color: #fff; }\n\n.portlet > .portlet-title > .nav-tabs > li.active > a,\n.portlet > .portlet-title > .nav-tabs > li:hover > a {\n  color: #333;\n  background: #fff;\n  border: 0; }\n\n.portlet > .portlet-body {\n  clear: both;\n  border-radius: 0 0 4px 4px; }\n\n.portlet > .portlet-body p {\n  margin-top: 0; }\n\n.portlet > .portlet-empty {\n  min-height: 125px; }\n\n.portlet.full-height-content {\n  margin-bottom: 0; }\n\n.portlet.bordered {\n  border-left: 2px solid #e6e9ec !important; }\n\n.portlet.bordered > .portlet-title {\n  border-bottom: 0; }\n\n.portlet.solid {\n  padding: 0 10px 10px;\n  border: 0; }\n\n.portlet.solid > .portlet-title {\n  border-bottom: 0;\n  margin-bottom: 10px; }\n\n.portlet.solid > .portlet-title > .caption {\n  padding: 16px 0 2px; }\n\n.portlet.solid > .portlet-title > .actions {\n  padding: 12px 0 6px; }\n\n.portlet.solid > .portlet-title > .tools {\n  padding: 14px 0 6px; }\n\n.portlet.solid.bordered > .portlet-title {\n  margin-bottom: 10px; }\n\n.portlet.box {\n  padding: 0 !important; }\n\n.portlet.box > .portlet-title {\n  border-bottom: 0;\n  padding: 0 10px;\n  margin-bottom: 0;\n  color: #fff; }\n\n.portlet.box > .portlet-title > .caption {\n  padding: 11px 0 9px; }\n\n.portlet.box > .portlet-title > .tools > a.fullscreen {\n  color: #fdfdfd; }\n\n.portlet.box > .portlet-title > .actions {\n  padding: 7px 0 5px; }\n\n.portlet.box > .portlet-body {\n  background-color: #fff;\n  padding: 15px; }\n\n.portlet.light {\n  padding: 12px 20px 15px;\n  background-color: whitesmoke; }\n\n.portlet.light.bordered {\n  border: 1px solid #e7ecf1 !important; }\n\n.portlet.light.bordered > .portlet-title {\n  border-bottom: 1px solid #eef1f5; }\n\n.portlet.light.bg-inverse {\n  background: #f1f4f7; }\n\n.portlet.light > .portlet-title {\n  padding: 0;\n  min-height: 48px; }\n\n.portlet.light > .portlet-title > .caption {\n  color: #666;\n  padding: 10px 0; }\n\n.portlet.light > .portlet-title > .caption > .caption-subject {\n  font-size: 16px; }\n\n.portlet.light > .portlet-title > .caption > i {\n  color: #777;\n  font-size: 15px;\n  font-weight: 300;\n  margin-top: 3px; }\n\n.portlet.light > .portlet-title > .caption.caption-md > .caption-subject {\n  font-size: 15px; }\n\n.portlet.light > .portlet-title > .caption.caption-md > i {\n  font-size: 14px; }\n\n.portlet.light > .portlet-title > .actions {\n  padding: 6px 0 14px; }\n\n.portlet.light > .portlet-title > .actions .btn-default {\n  color: #666; }\n\n.portlet.light > .portlet-title > .actions .btn-icon-only {\n  height: 27px;\n  width: 27px; }\n\n.portlet.light > .portlet-title > .actions .dropdown-menu li > a {\n  color: #555; }\n\n.portlet.light > .portlet-title > .inputs {\n  display: inline-block;\n  padding: 4px 0; }\n\n.portlet.light > .portlet-title > .inputs > .portlet-input .input-icon > i {\n  font-size: 14px;\n  margin-top: 9px; }\n\n.portlet.light > .portlet-title > .inputs > .portlet-input .input-icon > .form-control {\n  height: 30px;\n  padding: 2px 26px 3px 10px;\n  font-size: 13px; }\n\n.portlet.light > .portlet-title > .inputs > .portlet-input > .form-control {\n  height: 30px;\n  padding: 3px 10px;\n  font-size: 13px; }\n\n.portlet.light > .portlet-title > .pagination {\n  padding: 2px 0 13px; }\n\n.portlet.light > .portlet-title > .tools {\n  padding: 10px 0 13px;\n  margin-top: 2px; }\n\n.portlet.light > .portlet-title > .nav-tabs > li {\n  margin: 0;\n  padding: 0; }\n\n.portlet.light > .portlet-title > .nav-tabs > li > a {\n  margin: 0;\n  padding: 12px 13px 13px;\n  font-size: 13px;\n  color: #666; }\n\n.portlet.light > .portlet-title > .nav-tabs > li.active > a,\n.portlet.light > .portlet-title > .nav-tabs > li:hover > a {\n  margin: 0;\n  background: 0 0;\n  color: #333; }\n\n.portlet.light.form-fit {\n  padding: 0; }\n\n.portlet.light.form-fit > .portlet-title {\n  padding: 17px 20px 10px;\n  margin-bottom: 0; }\n\n.portlet.light .portlet-body {\n  padding-top: 8px; }\n\n.portlet.light.portlet-fullscreen > .portlet-body {\n  padding: 8px 0; }\n\n.portlet.light.portlet-fit {\n  padding: 0; }\n\n.portlet.light.portlet-fit > .portlet-title {\n  padding: 15px 20px 10px; }\n\n.portlet.light.portlet-fit > .portlet-body {\n  padding: 10px 20px 20px; }\n\n.portlet.light.portlet-fit.portlet-form > .portlet-body {\n  padding: 0; }\n\n.portlet.light.portlet-fit.portlet-form > .portlet-body .form-actions {\n  background: 0 0; }\n\n.portlet.box.white > .portlet-title,\n.portlet.white,\n.portlet > .portlet-body.white {\n  background-color: #fff; }\n\n.portlet.light.portlet-datatable.portlet-fit > .portlet-body {\n  padding-top: 0px;\n  padding-bottom: 25px; }\n\n.tab-pane > p:last-child {\n  margin-bottom: 0; }\n\n.tabs-reversed > li {\n  float: right;\n  margin-right: 0; }\n\n.tabs-reversed > li > a {\n  margin-right: 0; }\n\n.portlet-sortable-placeholder {\n  border: 2px dashed #eee;\n  margin-bottom: 25px; }\n\n.portlet-sortable-empty {\n  box-shadow: none !important;\n  height: 45px; }\n\n.portlet-collapsed {\n  display: none; }\n\n@media (max-width: 991px) {\n  .portlet-collapsed-on-mobile {\n    display: none; } }\n\n.portlet.solid.white > .portlet-body,\n.portlet.solid.white > .portlet-title {\n  border: 0;\n  color: #666; }\n\n.portlet.solid.white > .portlet-title > .caption > i {\n  color: #666; }\n\n.portlet.solid.white > .portlet-title > .tools > a.fullscreen {\n  color: #fdfdfd; }\n\n.portlet.box.white {\n  border: 1px solid #fff;\n  border-top: 0; }\n\n.portlet.box.white > .portlet-title > .caption,\n.portlet.box.white > .portlet-title > .caption > i {\n  color: #666; }\n\n.portlet.box.white > .portlet-title > .actions .btn-default {\n  background: 0 0 !important;\n  border: 1px solid #fff;\n  color: #fff; }\n\n.portlet.box.default > .portlet-title,\n.portlet.default,\n.portlet > .portlet-body.default {\n  background-color: #e1e5ec; }\n\n.portlet.box.white > .portlet-title > .actions .btn-default > i {\n  color: #fff; }\n\n.portlet.box.white > .portlet-title > .actions .btn-default.active,\n.portlet.box.white > .portlet-title > .actions .btn-default:active,\n.portlet.box.white > .portlet-title > .actions .btn-default:focus,\n.portlet.box.white > .portlet-title > .actions .btn-default:hover {\n  border: 1px solid #fff;\n  color: #fff; }\n\n.portlet.solid.default > .portlet-body,\n.portlet.solid.default > .portlet-title {\n  border: 0;\n  color: #666; }\n\n.portlet.solid.default > .portlet-title > .caption > i {\n  color: #666; }\n\n.portlet.solid.default > .portlet-title > .tools > a.fullscreen {\n  color: #fdfdfd; }\n\n.portlet.box.default {\n  border: 1px solid #fff;\n  border-top: 0; }\n\n.portlet.box.default > .portlet-title > .caption,\n.portlet.box.default > .portlet-title > .caption > i {\n  color: #666; }\n\n.portlet.box.default > .portlet-title > .actions .btn-default {\n  background: 0 0 !important;\n  border: 1px solid #fff;\n  color: #fff; }\n\n.portlet.box.dark > .portlet-title,\n.portlet.dark,\n.portlet > .portlet-body.dark {\n  background-color: #2f353b; }\n\n.portlet.box.default > .portlet-title > .actions .btn-default > i {\n  color: #fff; }\n\n.portlet.box.default > .portlet-title > .actions .btn-default.active,\n.portlet.box.default > .portlet-title > .actions .btn-default:active,\n.portlet.box.default > .portlet-title > .actions .btn-default:focus,\n.portlet.box.default > .portlet-title > .actions .btn-default:hover {\n  border: 1px solid #fff;\n  color: #fff; }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background: #F1F3FA; }\n\nbody {\n  overflow-x: hidden; }\n\n#mainNav {\n  background-color: darkslategrey;\n  color: white; }\n\n#mainNav .navbar-brand {\n  color: #fed136;\n  font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; }\n\n.content {\n  flex: 1 0 auto; }\n\n.footer {\n  flex-shrink: 0; }\n\nfooter {\n  text-align: center;\n  background-color: white; }\n\n.ft {\n  padding-left: 22px;\n  padding-right: 31px; }\n\nfooter span.copyright {\n  font-size: 90%;\n  line-height: 40px;\n  text-transform: none;\n  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  color: blak; }\n\nfooter ul.quicklinks {\n  font-size: 90%;\n  line-height: 40px;\n  margin-bottom: 0;\n  text-transform: none;\n  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif; }\n\nul.social-buttons {\n  margin-bottom: 0; }\n\nul.social-buttons li a {\n  font-size: 20px;\n  line-height: 40px;\n  display: block;\n  width: 40px;\n  height: 40px;\n  transition: all 0.3s;\n  color: white;\n  border-radius: 100%;\n  outline: none;\n  background-color: #212529; }\n\nul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\n  background-color: #fed136; }\n\n.content {\n  margin-top: 0px; }\n\n/* Profile container */\n\n.profile {\n  margin: 20px 0; }\n\n/* Profile sidebar */\n\n.profile-sidebar {\n  padding: 20px 0 10px 0;\n  background: #fff; }\n\n.profile-userpic img {\n  float: none;\n  display: block;\n  margin: auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important; }\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 0px; }\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px; }\n\n.profile-usertitle-job {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px; }\n\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 0px; }\n\n.profile-userbuttons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px; }\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px; }\n\n.profile-usermenu {\n  margin-top: 0px; }\n\n.profile-usermenu ul li {\n  border-bottom: 1px solid #f0f4f7; }\n\n.profile-usermenu ul li:last-child {\n  border-bottom: none; }\n\n.profile-usermenu ul li a {\n  color: #93a3b5;\n  font-size: 14px;\n  font-weight: 400; }\n\n.profile-usermenu ul li a i {\n  margin-right: 8px;\n  font-size: 14px; }\n\n.profile-usermenu ul li a:hover {\n  background-color: #fafcfd;\n  color: #5b9bd1; }\n\n.profile-usermenu ul li.active {\n  border-bottom: none; }\n\n.profile-usermenu ul li.active a {\n  color: #5b9bd1;\n  background-color: #f6f9fb;\n  border-left: 2px solid #5b9bd1;\n  margin-left: -2px; }\n\n/* Profile Content */\n\n.profile-content {\n  padding: 20px;\n  background: #fff;\n  min-height: 460px; }\n\n.nav > li {\n  position: relative;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ubmUtbGlzdC9DOlxcVXNlcnNcXGFzdXNcXERlc2t0b3BcXFRWTVxcUGVyc29ubmVzL3NyY1xcYXBwXFxwZXJzb25uZS1saXN0XFxwZXJzb25uZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsZUFBYztFQUNwQixvQkFBbUI7RUFDbkIsd0NBQXVDO0VBQ3ZDLGdCQUFlLEVBQ2Y7O0FBQ0Q7RUFDQyxvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLDJCQUEwQixFQUN2Qjs7QUFDRDtFQUNGLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDZjs7QUFDRDtFQUNDLGFBQVksRUFDWjs7QUFDRDtFQUNDLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWix5QkFBd0I7RUFDeEIsa0JBQWlCLEVBQ2Q7O0FBQ0Q7RUFDRixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUNsQjs7QUFFRTtFQUNJLHNCQUFxQjtFQUMzQixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ25COztBQUNEO0VBQ0MsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUNFO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBQ0o7RUFDQyxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUNsQjs7QUFDRTtFQUNJLGFBQVk7RUFDWixnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGFBQVk7RUFDWixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLDhCQUE2QjtFQUM3QixtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJ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bEIsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbm5lLWxpc3QvcGVyc29ubmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgICAgIGNvbG9yOiAjNTY2Nzg3O1xyXG5cdFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuXHRcdGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblx0LnRhYmxlLXRpdGxlIHsgICAgICAgIFxyXG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcclxuXHRcdGJhY2tncm91bmQ6ICMwODA5MmM7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdHBhZGRpbmc6IDE1cHggMjVweDtcclxuXHRcdG1hcmdpbjogLTE1cHggLTIwcHggMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXRpdGxlIGgge1xyXG5cdFx0bWFyZ2luOiA1cHggMCAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdH1cclxuXHQudGFibGUtdGl0bGUgLmJ0bi1ncm91cCB7XHJcblx0XHRmbG9hdDogcmlnaHQ7XHJcblx0fVxyXG5cdC50YWJsZS10aXRsZSAuYnRuIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSAuYXZhdGFyIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuICAgIHRhYmxlLnRhYmxlIHRyIHRoLCB0YWJsZS50YWJsZSB0ciB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG5cdFx0cGFkZGluZzogMTJweCAxNXB4O1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBcdGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcblx0fVxyXG5cdHRhYmxlLnRhYmxlLXN0cmlwZWQudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuXHR9XHJcbiAgICB0YWJsZS50YWJsZSB0ZCBpIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcblx0dGFibGUudGFibGUgLmF2YXRhciB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24gbGkgYSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVx0XHJcbiAgICAucGFnaW5hdGlvbiBsaS5hY3RpdmUgYSwgLnBhZ2luYXRpb24gbGkuYWN0aXZlIGEucGFnZS1saW5rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24gbGkuYWN0aXZlIGE6aG92ZXIgeyAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAzOTdkNjtcclxuICAgIH1cclxuXHQucGFnaW5hdGlvbiBsaS5kaXNhYmxlZCBpIHtcclxuICAgICAgICBjb2xvcjogI2NjYztcclxuICAgIH1cclxuICAgIC5wYWdpbmF0aW9uIGxpIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4XHJcbiAgICB9XHJcbiAgICAuaGludC10ZXh0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH0gICAgXHJcblxyXG5cdC8qIE1vZGFsIHN0eWxlcyAqL1xyXG5cdC5tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxuXHRcdG1heC13aWR0aDogNDAwcHg7XHJcblx0fVxyXG5cdC5tb2RhbCAubW9kYWwtaGVhZGVyLCAubW9kYWwgLm1vZGFsLWJvZHksIC5tb2RhbCAubW9kYWwtZm9vdGVyIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggMzBweDtcclxuXHR9XHJcblx0Lm1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHR9XHJcblx0Lm1vZGFsIC5tb2RhbC1mb290ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogI2VjZjBmMTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG5cdH1cclxuICAgIC5tb2RhbCAubW9kYWwtdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHQubW9kYWwgLmZvcm0tY29udHJvbCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG5cdH1cclxuXHQubW9kYWwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRcdHJlc2l6ZTogdmVydGljYWw7XHJcblx0fVxyXG5cdC5tb2RhbCAuYnRuIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRcdG1pbi13aWR0aDogMTAwcHg7XHJcblx0fVx0XHJcblx0Lm1vZGFsIGZvcm0gbGFiZWwge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHRcclxuXHQudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG1heC1oZWlnaHQ6IDYwMHB4O1xyXG5cdFx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcdC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRib2R5e3BhZGRpbmctdG9wOjMwcHg7XHJcblx0XHR9XHJcblxyXG4uZ2x5cGhpY29uIHsgIG1hcmdpbi1ib3R0b206IDEwcHg7bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuXHJcbnNtYWxsIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbmxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQGF0LXJvb3QvQGF0LXJvb3RcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiNlOWVjZjM7ICAgIFxyXG59XHJcbi8qcHJvZmlsZSovXHJcbi5wcm9maWxlLXNpZGViYXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5wcm9maWxlLXNpZGViYXItcG9ydGxldCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCFpbXBvcnRhbnRcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnBpYyBpbWcge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnRcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHhcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnRpdGxlLW5hbWUge1xyXG4gICAgY29sb3I6ICM1YTczOTE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJ0aXRsZS1qb2Ige1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjNWI5YmQxO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweFxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJidXR0b25zIC5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcmJ1dHRvbnMgLmJ0bjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMFxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyYnV0dG9ucyBidXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweFxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VybWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHhcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGY0ZjdcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lXHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICM5M2EzYjU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwXHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VybWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZjZmQ7XHJcbiAgICBjb2xvcjogIzViOWJkMVxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VybWVudSB1bCBsaS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogIzViOWJkMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmI7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM1YjliZDE7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweFxyXG59XHJcblxyXG4ucHJvZmlsZS1zdGF0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGY0ZjdcclxufVxyXG5cclxuLnByb2ZpbGUtc3RhdC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzdmOTBhNDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4ucHJvZmlsZS1zdGF0LXRleHQge1xyXG4gICAgY29sb3I6ICM1YjliZDE7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5wcm9maWxlLWRlc2MtdGl0bGUge1xyXG4gICAgY29sb3I6ICM3ZjkwYTQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbn1cclxuXHJcbi5wcm9maWxlLWRlc2MtdGV4dCB7XHJcbiAgICBjb2xvcjogIzdlOGM5ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcblxyXG4ucHJvZmlsZS1kZXNjLWxpbmsgaSB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjYWJiNmM0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcclxufVxyXG5cclxuLnByb2ZpbGUtZGVzYy1saW5rIGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNWI5YmQxXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICAucHJvZmlsZS1zaWRlYmFyIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1zaWRlYmFyPi5wb3J0bGV0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1jb250ZW50IHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypwb3J0bGV0Ki9cclxuLnBhZ2UtcG9ydGxldC1mdWxsc2NyZWVuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLnBvcnRsZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbn1cclxuXHJcbi5wb3J0bGV0LnBvcnRsZXQtZnVsbHNjcmVlbiB7XHJcbiAgICB6LWluZGV4OiAxMDA2MDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZlxyXG59XHJcblxyXG4ucG9ydGxldC5wb3J0bGV0LWZ1bGxzY3JlZW4+LnBvcnRsZXQtYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAxMHB4XHJcbn1cclxuXHJcbi5wb3J0bGV0LnBvcnRsZXQtZnVsbHNjcmVlbj4ucG9ydGxldC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHhcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQxcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDBcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU6YWZ0ZXIsXHJcbi5wb3J0bGV0Pi5wb3J0bGV0LXRpdGxlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlXHJcbn1cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnM+LmJ0bixcclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnM+LmJ0bi1ncm91cD4uYnRuLFxyXG4ucG9ydGxldD4ucG9ydGxldC10aXRsZT4uYWN0aW9ucz4uYnRuLWdyb3VwPi5idG4uYnRuLXNtLFxyXG4ucG9ydGxldD4ucG9ydGxldC10aXRsZT4uYWN0aW9ucz4uYnRuLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1pY29uLW9ubHkge1xyXG4gICAgcGFkZGluZzogNXB4IDdweCAzcHhcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1pY29uLW9ubHkuYnRuLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZzogNHB4IDZweCAycHhcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1pY29uLW9ubHkuYnRuLWRlZmF1bHQ+aSB7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1pY29uLW9ubHkuYnRuLWRlZmF1bHQuZnVsbHNjcmVlbiB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBjb2xvcjogI2EwYTBhMDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHhcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1pY29uLW9ubHkuYnRuLWRlZmF1bHQuZnVsbHNjcmVlbi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogM3B4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIHdpZHRoOiAyN3B4XHJcbn1cclxuXHJcblxyXG4ucG9ydGxldD4ucG9ydGxldC10aXRsZT4udG9vbHM+YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApXHJcbn1cclxuXHJcblxyXG4ucG9ydGxldD4ucG9ydGxldC10aXRsZT4udG9vbHM+YS5mdWxsc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRvcDogLTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGNvbG9yOiAjQUNBQ0FDXHJcbn1cclxuXHJcbi5wb3J0bGV0Pi5wb3J0bGV0LXRpdGxlPi50b29scz5hLmZ1bGxzY3JlZW46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDY1XCJcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+LnRvb2xzPmEuZnVsbHNjcmVlbi5vbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwNjZcIlxyXG59XHJcblxyXG4ucG9ydGxldD4ucG9ydGxldC10aXRsZT4udG9vbHM+YTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApXHJcbn1cclxuXHJcbi5wb3J0bGV0Pi5wb3J0bGV0LXRpdGxlPi5uYXYtdGFicz5saSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDBcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+Lm5hdi10YWJzPmxpPmEge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDFweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtdGl0bGU+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxyXG4ucG9ydGxldD4ucG9ydGxldC10aXRsZT4ubmF2LXRhYnM+bGk6aG92ZXI+YSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDBcclxufVxyXG5cclxuLnBvcnRsZXQ+LnBvcnRsZXQtYm9keSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweFxyXG59XHJcblxyXG4ucG9ydGxldD4ucG9ydGxldC1ib2R5IHAge1xyXG4gICAgbWFyZ2luLXRvcDogMFxyXG59XHJcblxyXG4ucG9ydGxldD4ucG9ydGxldC1lbXB0eSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjVweFxyXG59XHJcblxyXG4ucG9ydGxldC5mdWxsLWhlaWdodC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLnBvcnRsZXQuYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTZlOWVjIWltcG9ydGFudFxyXG59XHJcblxyXG4ucG9ydGxldC5ib3JkZXJlZD4ucG9ydGxldC10aXRsZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LnNvbGlkIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LnNvbGlkPi5wb3J0bGV0LXRpdGxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5wb3J0bGV0LnNvbGlkPi5wb3J0bGV0LXRpdGxlPi5jYXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMCAycHhcclxufVxyXG5cclxuLnBvcnRsZXQuc29saWQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTJweCAwIDZweFxyXG59XHJcblxyXG4ucG9ydGxldC5zb2xpZD4ucG9ydGxldC10aXRsZT4udG9vbHMge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDZweFxyXG59XHJcblxyXG4ucG9ydGxldC5zb2xpZC5ib3JkZXJlZD4ucG9ydGxldC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5wb3J0bGV0LmJveCB7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudFxyXG59XHJcblxyXG4ucG9ydGxldC5ib3g+LnBvcnRsZXQtdGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ucG9ydGxldC5ib3g+LnBvcnRsZXQtdGl0bGU+LmNhcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTFweCAwIDlweFxyXG59XHJcblxyXG5cclxuLnBvcnRsZXQuYm94Pi5wb3J0bGV0LXRpdGxlPi50b29scz5hLmZ1bGxzY3JlZW4ge1xyXG4gICAgY29sb3I6ICNmZGZkZmRcclxufVxyXG5cclxuLnBvcnRsZXQuYm94Pi5wb3J0bGV0LXRpdGxlPi5hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDdweCAwIDVweFxyXG59XHJcblxyXG4ucG9ydGxldC5ib3g+LnBvcnRsZXQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0LmJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VjZjEhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0LmJvcmRlcmVkPi5wb3J0bGV0LXRpdGxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMWY1XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0LmJnLWludmVyc2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjRmN1xyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogNDhweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4uY2FwdGlvbiB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIHBhZGRpbmc6IDEwcHggMFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4uY2FwdGlvbj4uY2FwdGlvbi1zdWJqZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4uY2FwdGlvbj5pIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDNweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4uY2FwdGlvbi5jYXB0aW9uLW1kPi5jYXB0aW9uLXN1YmplY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0Pi5wb3J0bGV0LXRpdGxlPi5jYXB0aW9uLmNhcHRpb24tbWQ+aSB7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogNnB4IDAgMTRweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4uYWN0aW9ucyAuYnRuLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICM2NjZcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1pY29uLW9ubHkge1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDI3cHhcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmRyb3Bkb3duLW1lbnUgbGk+YSB7XHJcbiAgICBjb2xvcjogIzU1NVxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4uaW5wdXRzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDRweCAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0Pi5wb3J0bGV0LXRpdGxlPi5pbnB1dHM+LnBvcnRsZXQtaW5wdXQgLmlucHV0LWljb24+aSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHhcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQ+LnBvcnRsZXQtdGl0bGU+LmlucHV0cz4ucG9ydGxldC1pbnB1dCAuaW5wdXQtaWNvbj4uZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDJweCAyNnB4IDNweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0Pi5wb3J0bGV0LXRpdGxlPi5pbnB1dHM+LnBvcnRsZXQtaW5wdXQ+LmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4ucGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAycHggMCAxM3B4XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0Pi5wb3J0bGV0LXRpdGxlPi50b29scyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDJweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4ubmF2LXRhYnM+bGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodD4ucG9ydGxldC10aXRsZT4ubmF2LXRhYnM+bGk+YSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEzcHggMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNjY2XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0Pi5wb3J0bGV0LXRpdGxlPi5uYXYtdGFicz5saS5hY3RpdmU+YSxcclxuLnBvcnRsZXQubGlnaHQ+LnBvcnRsZXQtdGl0bGU+Lm5hdi10YWJzPmxpOmhvdmVyPmEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMzMzNcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQuZm9ybS1maXQge1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodC5mb3JtLWZpdD4ucG9ydGxldC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDIwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQgLnBvcnRsZXQtYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4XHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0LnBvcnRsZXQtZnVsbHNjcmVlbj4ucG9ydGxldC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDhweCAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0LnBvcnRsZXQtZml0IHtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQucG9ydGxldC1maXQ+LnBvcnRsZXQtdGl0bGUge1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4IDEwcHhcclxufVxyXG5cclxuLnBvcnRsZXQubGlnaHQucG9ydGxldC1maXQ+LnBvcnRsZXQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweFxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodC5wb3J0bGV0LWZpdC5wb3J0bGV0LWZvcm0+LnBvcnRsZXQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LmxpZ2h0LnBvcnRsZXQtZml0LnBvcnRsZXQtZm9ybT4ucG9ydGxldC1ib2R5IC5mb3JtLWFjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZDogMCAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LmJveC53aGl0ZT4ucG9ydGxldC10aXRsZSxcclxuLnBvcnRsZXQud2hpdGUsXHJcbi5wb3J0bGV0Pi5wb3J0bGV0LWJvZHkud2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ucG9ydGxldC5saWdodC5wb3J0bGV0LWRhdGF0YWJsZS5wb3J0bGV0LWZpdD4ucG9ydGxldC1ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweFxyXG59XHJcblxyXG4udGFiLXBhbmU+cDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLnRhYnMtcmV2ZXJzZWQ+bGkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwXHJcbn1cclxuXHJcbi50YWJzLXJldmVyc2VkPmxpPmEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LXNvcnRhYmxlLXBsYWNlaG9sZGVyIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZWVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweFxyXG59XHJcblxyXG4ucG9ydGxldC1zb3J0YWJsZS1lbXB0eSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDVweFxyXG59XHJcblxyXG4ucG9ydGxldC1jb2xsYXBzZWQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xyXG4gICAgLnBvcnRsZXQtY29sbGFwc2VkLW9uLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgfVxyXG59XHJcblxyXG4ucG9ydGxldC5zb2xpZC53aGl0ZT4ucG9ydGxldC1ib2R5LFxyXG4ucG9ydGxldC5zb2xpZC53aGl0ZT4ucG9ydGxldC10aXRsZSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogIzY2NlxyXG59XHJcblxyXG4ucG9ydGxldC5zb2xpZC53aGl0ZT4ucG9ydGxldC10aXRsZT4uY2FwdGlvbj5pIHtcclxuICAgIGNvbG9yOiAjNjY2XHJcbn1cclxuXHJcbi5wb3J0bGV0LnNvbGlkLndoaXRlPi5wb3J0bGV0LXRpdGxlPi50b29scz5hLmZ1bGxzY3JlZW4ge1xyXG4gICAgY29sb3I6ICNmZGZkZmRcclxufVxyXG5cclxuLnBvcnRsZXQuYm94LndoaXRlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiAwXHJcbn1cclxuXHJcbi5wb3J0bGV0LmJveC53aGl0ZT4ucG9ydGxldC10aXRsZT4uY2FwdGlvbixcclxuLnBvcnRsZXQuYm94LndoaXRlPi5wb3J0bGV0LXRpdGxlPi5jYXB0aW9uPmkge1xyXG4gICAgY29sb3I6ICM2NjZcclxufVxyXG5cclxuLnBvcnRsZXQuYm94LndoaXRlPi5wb3J0bGV0LXRpdGxlPi5hY3Rpb25zIC5idG4tZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5wb3J0bGV0LmJveC5kZWZhdWx0Pi5wb3J0bGV0LXRpdGxlLFxyXG4ucG9ydGxldC5kZWZhdWx0LFxyXG4ucG9ydGxldD4ucG9ydGxldC1ib2R5LmRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTVlY1xyXG59XHJcblxyXG4ucG9ydGxldC5ib3gud2hpdGU+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0Pmkge1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnBvcnRsZXQuYm94LndoaXRlPi5wb3J0bGV0LXRpdGxlPi5hY3Rpb25zIC5idG4tZGVmYXVsdC5hY3RpdmUsXHJcbi5wb3J0bGV0LmJveC53aGl0ZT4ucG9ydGxldC10aXRsZT4uYWN0aW9ucyAuYnRuLWRlZmF1bHQ6YWN0aXZlLFxyXG4ucG9ydGxldC5ib3gud2hpdGU+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0OmZvY3VzLFxyXG4ucG9ydGxldC5ib3gud2hpdGU+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ucG9ydGxldC5zb2xpZC5kZWZhdWx0Pi5wb3J0bGV0LWJvZHksXHJcbi5wb3J0bGV0LnNvbGlkLmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6ICM2NjZcclxufVxyXG5cclxuLnBvcnRsZXQuc29saWQuZGVmYXVsdD4ucG9ydGxldC10aXRsZT4uY2FwdGlvbj5pIHtcclxuICAgIGNvbG9yOiAjNjY2XHJcbn1cclxuXHJcbi5wb3J0bGV0LnNvbGlkLmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGU+LnRvb2xzPmEuZnVsbHNjcmVlbiB7XHJcbiAgICBjb2xvcjogI2ZkZmRmZFxyXG59XHJcblxyXG4ucG9ydGxldC5ib3guZGVmYXVsdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMFxyXG59XHJcblxyXG4ucG9ydGxldC5ib3guZGVmYXVsdD4ucG9ydGxldC10aXRsZT4uY2FwdGlvbixcclxuLnBvcnRsZXQuYm94LmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGU+LmNhcHRpb24+aSB7XHJcbiAgICBjb2xvcjogIzY2NlxyXG59XHJcblxyXG4ucG9ydGxldC5ib3guZGVmYXVsdD4ucG9ydGxldC10aXRsZT4uYWN0aW9ucyAuYnRuLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZDogMCAwIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ucG9ydGxldC5ib3guZGFyaz4ucG9ydGxldC10aXRsZSxcclxuLnBvcnRsZXQuZGFyayxcclxuLnBvcnRsZXQ+LnBvcnRsZXQtYm9keS5kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM1M2JcclxufVxyXG5cclxuLnBvcnRsZXQuYm94LmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0Pmkge1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnBvcnRsZXQuYm94LmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0LmFjdGl2ZSxcclxuLnBvcnRsZXQuYm94LmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcclxuLnBvcnRsZXQuYm94LmRlZmF1bHQ+LnBvcnRsZXQtdGl0bGU+LmFjdGlvbnMgLmJ0bi1kZWZhdWx0OmZvY3VzLFxyXG4ucG9ydGxldC5ib3guZGVmYXVsdD4ucG9ydGxldC10aXRsZT4uYWN0aW9ucyAuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyoqLyovKi8qLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYzRkE7XHJcbiAgfVxyXG4gIGJvZHkgeyBcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gIH1cclxuICAjbWFpbk5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICNmZWQxMzY7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgY3Vyc2l2ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmZ0e1xyXG4gICAgcGFkZGluZy1sZWZ0OjIycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjMxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciBzcGFuLmNvcHlyaWdodCB7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6YmxhaztcclxuICB9XHJcbiAgXHJcbiAgZm9vdGVyIHVsLnF1aWNrbGlua3Mge1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIHVsLnNvY2lhbC1idXR0b25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIHVsLnNvY2lhbC1idXR0b25zIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICB9XHJcbiAgXHJcbiAgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTphY3RpdmUsIHVsLnNvY2lhbC1idXR0b25zIGxpIGE6Zm9jdXMsIHVsLnNvY2lhbC1idXR0b25zIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgIH1cclxuICBcclxuICBcclxuICAvKiBQcm9maWxlIGNvbnRhaW5lciAqL1xyXG4gIC5wcm9maWxlIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICAvKiBQcm9maWxlIHNpZGViYXIgKi9cclxuICAucHJvZmlsZS1zaWRlYmFyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VycGljIGltZyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcnRpdGxlLW5hbWUge1xyXG4gICAgY29sb3I6ICM1YTczOTE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VydGl0bGUtam9iIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzViOWJkMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VyYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJidXR0b25zIC5idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VyYnV0dG9ucyAuYnRuOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gICAgICBcclxuICAucHJvZmlsZS11c2VybWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmNGY3O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICM5M2EzYjU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmNmZDtcclxuICAgIGNvbG9yOiAjNWI5YmQxO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaS5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICM1YjliZDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWI5YmQxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2ZpbGUgQ29udGVudCAqL1xyXG4gIC5wcm9maWxlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdj5saSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/personne-list/personne-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/personne-list/personne-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonneListComponent", function() { return PersonneListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Personne_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Personne.model */ "./src/app/models/Personne.model.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_professional_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/professional.model */ "./src/app/models/professional.model.ts");
/* harmony import */ var _services_profession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/profession.service */ "./src/app/services/profession.service.ts");








var PersonneListComponent = /** @class */ (function () {
    function PersonneListComponent(persService, router, profService) {
        this.persService = persService;
        this.router = router;
        this.profService = profService;
        this.personnes = [];
        this.error = '';
        this.success = '';
        this.currentUser = new _models_Personne_model__WEBPACK_IMPORTED_MODULE_2__["Personne"]();
        this.cUprofessionnel = new _models_professional_model__WEBPACK_IMPORTED_MODULE_6__["Professionnal"]('', '', '', '', '', '', '', '');
        this.linkImg = "";
        this.p = 1;
    }
    PersonneListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPersonnes();
        this.idUser = +localStorage.getItem('currentUser');
        this.persService.getSinglePersonne(this.idUser).subscribe(function (res) {
            _this.currentUser = res;
            _this.linkImg = "assets/images/" + _this.currentUser.image;
        }, function (err) {
            _this.error = err;
        });
        this.profService.getSinglePersonneProf(+localStorage.getItem('currentUser')).subscribe(function (res) {
            _this.cUprofessionnel = res;
        }, function (err) {
            _this.error = err;
        });
    };
    PersonneListComponent.prototype.gotoProfil = function (ind) {
        this.router.navigate(['/Personne', 'view', +ind]);
    };
    PersonneListComponent.prototype.gotoProfilUser = function () {
        this.router.navigate(['/Personne', 'view', this.idUser]);
    };
    PersonneListComponent.prototype.onNewPersonne = function () {
        this.router.navigate(['/auth', 'signup']);
    };
    PersonneListComponent.prototype.getPersonnes = function () {
        var _this = this;
        this.persService.getAll(localStorage.getItem('currentUserServ')).subscribe(function (res) {
            _this.personnes = res.filter(function (personne) {
                return +personne['id'] !== +_this.idUser;
            });
        }, function (err) {
            _this.error = err;
        });
    };
    PersonneListComponent.prototype.onDeletePers = function (id, nom) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Confirmation Suppression !?",
            text: "Vous voulez vraiment supprimer l'employé : " + nom,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Oui, Supprimer!',
            cancelButtonText: "Non, Annuler!"
        }).then(function (val) {
            if (val.value == true) {
                _this.persService.delete(id)
                    .subscribe(function (res) {
                    _this.persService.personnes = res;
                }, function (err) { return _this.error = err; });
                window.location.reload();
            }
        });
    };
    PersonneListComponent.prototype.getNombre = function () {
        return this.personnes.length;
    };
    PersonneListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personne-list ',
            template: __webpack_require__(/*! ./personne-list.component.html */ "./src/app/personne-list/personne-list.component.html"),
            styles: [__webpack_require__(/*! ./personne-list.component.scss */ "./src/app/personne-list/personne-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_personnes_service__WEBPACK_IMPORTED_MODULE_3__["PersonnesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_profession_service__WEBPACK_IMPORTED_MODULE_7__["ProfessionService"]])
    ], PersonneListComponent);
    return PersonneListComponent;
}());



/***/ }),

/***/ "./src/app/personne-list/single-personne/single-personne.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/personne-list/single-personne/single-personne.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\n\t\t\t<div id=\"user-profile-2\" class=\"container-fluid col-xs-10 col-md-10\">\n\t\t\t\t\t<div class=\"tabbable\">\n\n\t\t\t\t\t\t<div class=\"tab-content no-border\" style=\"padding-top: 0%\">\n\t\t\t\t\t\t\t<div id=\"home\" class=\"tab-pane in active\" style=\"padding-top: 0%\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"background-color: rgb(209, 203, 198) ; border-radius:10px;\">\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-3 center\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"profile-picture\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"editable img-responsive\" alt=\" Avatar\" id=\"avatar2\" [src]=\"linkImg \">\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"ace-icon fa fa-plus-circle bigger-110\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn-file ace-icon fa fa-plus-circle bigger-110 btn btn-sm btn-block btn-primary\" style=\"font-size:17px\">\n\t\t\t\t\t\t\t\t\t\t\t\tChanger Profil <input type=\"file\" id=\"reavatar\" name=\"reavatar\" (change)=\"check()\" accept=\"Image/*\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-picture\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"isIn==false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Veuillez choisir un format de fichier Image correct (jpg,png,gif,jpeg)</strong>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-file ace-icon fa fa-plus-circle bigger-110 btn btn-sm btn-block btn-info\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onViewCV()\" style=\"font-size:17px\">Voir CV \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-eye-open\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"isSelected==true && isIn==true\" class=\"btn btn-success btn-block pull-right\" (click)=\"onChangeProfil()\" >\t\n\t\t\t\t\t\t\t\t\t\t\t\t\tAppuyez pour appliquer  \n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div><!-- /.col -->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/Personnes\" style=\"color:black\">Revenir à listes </a>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger pull-right\" (click)=\"onDeletePersonne()\">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupprimer ce compte  <b class=\"glyphicon glyphicon-trash\"></b>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-purple arrowed-in-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ace-icon fa fa-circle smaller-80 align-middle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<br>\n\n\t\t\t\t\t\t\t\t\t\t<!--details Personne-->\n\t\t\t\t\t\t\t\t\t\t<div style=\"background-color: rgb(243, 243, 243); border-radius: 8px ;\n\t\t\t\t\t\t\t\t\t\t \t\t\tborder-color: black;border-width:1px; border-style:solid;\n\t\t\t\t\t\t\t\t\t\t\t\t\tpadding-left: 10px ; padding-top: 10px ;padding-right: 10px\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t\t\t\t<tabset >\n\t\t\t\t\t\t\t\t\t\t\t\t<tab heading=\"Détails personnels\" class=\"mt-1\" (select)=\"onSelect($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-fluid\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info\" (click)=\"onUpdate(template)\">Modifier\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-cog\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b><span class=\"middle\" style=\"font-size:25px ; color :rgb(1, 1, 34)\">{{personne.nom}}</span></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-user-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Prénom:  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.prenom}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Genre : </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.genre}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Adresse : </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.adresse}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Province : </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.province}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Née le : </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.dateNaissance}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Civilité :</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.civilite}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Nationalité : </div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.nationalite}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Adresse mail :</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.email}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Contact :</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.numTel}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\">Nbr d'enfants: </div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{personne.nbEnfants}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hr hr-8 dotted\"></div>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t\t\t<tab heading=\"Détails professionnels\" class=\"mt-2\" (select)=\"onSelect($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"alert alert-info btn-block\"  *ngIf=\"isInCV==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Votre CV est bien insérée :) </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"alert alert-danger btn-block\"  *ngIf=\"isInCV==false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <strong>Veuillez choisir un format de fichier texte correct (.doc - .pdf - .html)</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" style=\"background-color:teal;color: cornsilk\" (click)=\"onUpdateProf(templateProf)\">Modifier\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-cog\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <div class=\"profile-info-name\">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn-file ace-icon fa fa-plus-circle btn btn-sm btn-primary \" style=\"font-size:15px;color: cornsilk ;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b> Changer CV  </b> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"CV\" name=\"CV\" (change)=\"checkCV()\" accept=\".pdf,.doc,.html\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"glyphicon glyphicon-folder-open\"></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success pull-right \" style=\"color: cornsilk\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onUpdateCV()\" *ngIf=\"isInCV==true\"> <b> Valider </b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-user-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Matricule : </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color: rgb(51, 51, 53) ;font-size: 18px\"><b>{{profession.matricule}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Grade :  </div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color: steelblue ;font-size: 16px\"><b>{{profession.grade}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Service :</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{profession.nomService}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Fonction </div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{profession.fonction}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Date d'embauche: </div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{profession.dateEmbauche}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hr hr-8 dotted\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-user-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\"> Contact(Tel,Mail)</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a target=\"_blank\">{{profession.numProf}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"middle ace-icon fa fa-facebook-square bigger-150 blue\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>{{personne.numTel}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"middle ace-icon fa fa-twitter-square bigger-150 light-green\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-info-value\" style=\"color :rgb(64, 224, 125)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color :rgb(13, 100, 5)\">{{profession.emailProf}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tab heading=\"Diplomes\" class=\"mt-2\" (select)=\"onSelect($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-striped table-bordered\" *ngIf=\"contentLength > 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead style=\" border-radius: 8px ;background-color: rgb(212, 204, 204);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Degrée</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Filière </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mention</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nom Institution</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let diplome of contentArray \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\t{{diplome.degree}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\t{{diplome.filiere}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{diplome.mention}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{diplome.nomInstitution}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tab>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tab heading=\"Congés\" class=\"mt-2\" (select)=\"onSelect($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form #f4=\"ngForm\" name=\"theForm\" (submit)=\"onAddConge(f4)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dateDebut\">Date de début :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datePickerConfig\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dateDebut\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"conge.dateDebut\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dateDebut=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dateDebut\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Date de début\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement=\"bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Nombre de jours:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"nbJour\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"conge.nbJours\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#nbJour=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nombre de jour\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"nbJour.errors?.required && nbJour.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNombre de jour obligatoire !!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        </div>\n \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dateRetour\">Date de retour :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datePickerConfig\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dateRetour\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"conge.dateRetour\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dateRetour=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dateRetour\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Date de retour\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement=\"bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Motif :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea type=\"textarea\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"motif\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"conge.motif\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#motif=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Motif\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:green\" class=\"help-block danger\" *ngIf=\"motif.errors?.required && motif.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMotif obligatoire !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-success btn-block pull-right\" [disabled]=\"f4.invalid\" (click)=\"onAddConge(f4)\" value=\"Demander congé\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-fluid\" *ngIf=\"congesLength > 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-striped table-bordered\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead style=\" border-radius: 8px ;background-color: rgb(212, 204, 204);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>IDCongé</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Date de début </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre de jour</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Date de retour</th>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Motif</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let conge of conges | paginate: {itemsPerPage : 3 ,currentPage: p2 } ,index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\t{{(i+1)+(p2-1)*3}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\t{{conge.dateDebut}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{conge.nbJours}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{conge.dateRetour}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{conge.motif}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<pagination-controls class=\"pull-right\" (pageChange)=\" p2 = $event \" autoHide=\"true\" previousLabel=\"Précédent\" nextLabel=\"Suivant\"></pagination-controls>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color:black\" class=\"pull-left\">Nombre de congés  ({{congesLength}})</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tab>\n\n\t\t\t\t\t\t\t\t\t\t\t</tabset>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div><!-- /.col -->\n\t\t\t\t\t\t\t\t</div><!-- /.row -->\n\n\t\t\t\t\t\t\t\t<div class=\"space-20\"></div>\n\n\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"widget-box transparent\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"widget-header widget-header-small\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"widget-title smaller\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ace-icon fa fa-check-square-o bigger-110\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\tLittle About Me\n\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"widget-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"widget-main\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy job is mostly lorem ipsuming and dolor sit ameting as long as consectetur adipiscing elit.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSometimes quisque commodo massa gets in the way and sed ipsum porttitor facilisis.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThe best thing about my job is that vestibulum id ligula porta felis euismod and nullam quis risus eget urna mollis ornare.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThanks for visiting my profile.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>--><!-- /#home -->\n\n\t\t\t\t\t\t\t\t<div class=\"space-12\"></div>\n\n\t\t\t\t\t\t\t</div><!-- /#pictures -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\t<!-- Modification details single Personne -->\n\t\t\t\t<ng-template #template >\t\t\t\n\t\t\t\t\t<div class=\"modal-body\" >\t\n\t\t\t\t\t\t<div id=\"theForm\" >\n\t\t\t\t\t\t\t<div class=\"modal-header btn btn-primary btn-block\" style=\" color:rgb(255, 249, 249) ;border-radius: 5px\">\n\t\t\t\t\t\t\t\t\t<h3><u>Modification détails personnels</u></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<form #f=\"ngForm\" name=\"theForm\" (submit)=\"updatePersDetails(f)\" >\n\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t<label>Nom:</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tname=\"nom\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.nom\"\n\t\t\t\t\t\t\t\t\t#nomPers=\"ngModel\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\tpattern=\"^[a-zA-Z]+$\" placeholder=\"Anarana\" \n\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t<span style=\"color:green\" class=\"help-block danger\" *ngIf=\"nomPers.errors?.required && nomPers.touched\">\n\t\t\t\t\t\t\t\tLe nom est obligatoire !!\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-group col-sm-5\">\n\t\t\t\t\t\t\t\t<label>Prénom:</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tname=\"prenom\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.prenom\"\n\t\t\t\t\t\t\t\t\t\t#prenomPers=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Fanampnah Anarana\" \n\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t<span style=\"color:green\" class=\"help-block danger\" *ngIf=\"prenomPers.errors?.required && prenomPers.touched\">\n\t\t\t\t\t\t\t\t\tLe Prénom est obligatoire !!\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t<label>Genre:</label>\n\t\t\t\t\t\t\t<select class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"genre\"\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.genre\"\n\t\t\t\t\t\t\t\t\t\t\t#genre=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Homme\">Homme</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Jeune homme\">Jeune homme</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Femme\">Femme</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Jeune femme\">Jeune femme</option>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div *ngIf=\"currentUserGrade == 'Chef' || currentUserGrade == 'Directeur'\" class=\"form-group col-sm-5\">\n\t\t\t\t\t\t\t<label>Mot de Passe:</label>\n\t\t\t\t\t\t\t<input type=\"password\"\n\t\t\t\t\t\t\t\t\t\tid=\"password\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tname=\"passwordPers\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.password\"\n\t\t\t\t\t\t\t\t\t\t#passwordPers=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nouveau de Passe\" \n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-eye-open\" style=\"cursor:pointer;\" (click)=\"onViewPassword('password')\"></span>\n\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"passwordPers.errors?.required && passwordPers.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>Password</b> obligatoire!\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"currentUserGrade == 'Chef' || currentUserGrade == 'Directeur'\" class=\"row\">\n\t\t\t\t\t\t<div class=\"form-group col-sm-9\">\n\t\t\t\t\t\t\t\t<label>Confirmation mot de Passe:</label>\n\t\t\t\t\t\t\t\t<input type=\"password\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"Cpassword\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"Cpassword\"\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"Cpass\"\n\t\t\t\t\t\t\t\t\t\t\t#Cpassword=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Confirmez votre mot de Passe\" \n\t\t\t\t\t\t\t\t\t\t\tcompare=\"passwordPers\"                                                            \n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-eye-open\" style=\"cursor:pointer;\" (click)=\"onViewPassword('Cpassword')\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"Cpassword.errors?.required && Cpassword.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\t\t\t Confirmation <b>Password</b> obligatoire!\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"Cpassword.errors?.compare && Cpassword.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\tLes <b>mots de passe</b>  ne correspondent pas!\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label>Adresse:</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"adresse\"\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.adresse\"\n\t\t\t\t\t\t\t\t\t\t\t#adresse=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Adresse\" \n\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t<span style=\"color:green\" class=\"help-block danger\" *ngIf=\"adresse.errors?.required && adresse.touched\">\n\t\t\t\t\t\t\t\t\t\t<b> Adresse </b>obligatoire !!\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"province\">Province</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"                                                                          \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"province\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.province\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#province=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Antananarivo\">Antananarivo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Antsiranana\">Antsiranana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Antsirabe\">Antsirabe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Fianarantsoa\">Fianarantsoa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mahajanga\">Mahajanga</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Toamasina\">Toamasina</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Toliara\">Toliara</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label>Numéro Téléphone:</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tname=\"numTel\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.numTel\"\n\t\t\t\t\t\t\t\t\t\t#numTel=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tpattern=\"[0-9]{10}\"\n\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Numéro téléphone\">\n\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"numTel.errors?.required && numTel.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\tVotre numéro est obligatoire !!\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\" class=\"help-block danger\" *ngIf=\"numTel.errors?.pattern && numTel.touched\">\n\t\t\t\t\t\t\t\t\t\tLe numéro doit seulement contenir des Chiffres (0-9) et minimum 10 chiifres !\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t<div class=\"form-group col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Adresse E-Mail:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"email\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.email\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#email=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Adresse email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" class=\"help-block danger\" *ngIf=\"email.errors?.pattern && email.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdresse <b> E-Mail</b> invvalide!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">  \n\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<label>Nationalité :</label>\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"nationalite\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.nationalite\"\n\t\t\t\t\t\t\t\t\t\t\t\t#nationalite=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\trequired >\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Malagasy\" selected><b>Malagasy</b></option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Nationalité étrangère\"><b>Autre nationalité</b></option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<label>Etat civil :</label>\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"civilite\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.civilite\"\n\t\t\t\t\t\t\t\t\t\t\t\t#civilite=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Marié\">Marié</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Divorcé\">Divorcé</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Célibataire\">Célibataire</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<label>Nombre d'enfants :</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"nbEnfants\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"personne.nbEnfants\"\n\t\t\t\t\t\t\t\t\t\t\t\t#nbEnfants=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nombre d'enfants\" \n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"dateNaissance\">Date de naissance</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker \n\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datePickerConfig\" \n\t\t\t\t\t\t\t\t\t\t\t\tid=\"dateNaiss\"  \n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"stringDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t#dateNaiss=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"dateNaiss\"\n\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Date de naissance\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"isChanged==true\"\n\t\t\t\t\t\t\t\t\t\t\t\tplacement=\"top\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success pull-right\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"f.invalid && isIn!=true\">Appliquer les modifications\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button \n\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-default pull-left\" \n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"modalRef.hide()\">Annuler\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t\t\t</ng-template>\n\n\t\t\t\t<!--tepmlate professionnnel -------------------------------------->\n\n\t\t\t<ng-template #templateProf>\n\t\t\t\t\t<div class=\"modal-body\" >\t\n\t\t\t\t\t\t\t<div id=\"theForm\" >\n\t\t\t\t\t\t\t\t<div class=\"modal-header btn btn-danger btn-block\" style=\" color:rgb(255, 249, 249) ;border-radius: 5px\">\n\t\t\t\t\t\t\t\t\t\t<h3><u>Modification détails professionnels</u></h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<form #f2=\"ngForm\" name=\"theForm\" (submit)=\"updatePersDetailsProf()\" >\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Numéro Matricule:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  name=\"mat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"profession.matricule\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  #mat=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  required\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  pattern=\"[0-9]*\" placeholder=\"Matricule\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:green\" class=\"help-block danger\" *ngIf=\"mat.errors?.required && mat.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  Numéro <b> matricule </b>  obligatoire !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" class=\"help-block danger\" *ngIf=\"mat.errors?.pattern && mat.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeulement des Chiffres (0-9) please !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dateembauche\">Date d'embauche:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datePickerConfig\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dateembauche\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"stringDateEmb\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dateembauche=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dateembauche\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Date d'embauche\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement=\"bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>E-Mail professionnel:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  name=\"emailProf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"profession.emailProf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  #emailProf=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  placeholder=\"Adresse mail au travail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span style=\"color:red\" class=\"help-block danger\" *ngIf=\"emailProf.errors?.pattern && emailProf.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   Adresse <b> E-Mail</b> invalide!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span style=\"color:green\" class=\"help-block danger\" *ngIf=\"emailProf.errors?.required && emailProf.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <b> Adresse mail professionnel </b>obligatoire !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Téléphone professionnel:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  name=\"numProf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"profession.numProf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  #numProf=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  required\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  pattern=\"[0-9]{10}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  placeholder=\"Numéro téléphone professionnel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"numProf.errors?.required && numProf.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <b> Numéro professionnel</b> obligatoire !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" class=\"help-block danger\" *ngIf=\"numProf.errors?.pattern && numProf.touched\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLe numéro doit seulement contenir des Chiffres (0-9) et minimum 10 chiifres !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"currentUserGrade == 'Chef' || currentUserGrade == 'Directeur'\" class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"grade\">Grade:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"                                                                          \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"grade\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"profession.grade\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#grade=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"this.profService.verifChef(profession.grade)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [disabled]=\"this.profService.existDirecteur\" value=\"Directeur\">Directeur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [disabled]=\"this.profService.isFullChef\" value=\"Chef\">Chef</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Employé\">Employé</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Stagiaire\">Stagiaire</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>                  \n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"service\">Service:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"                                                                          \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"service\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"profession.nomService\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#service=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change) =\"profService.service(profession.nomService)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled selected style=\"color: grey\">Choisir service</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let grade of profService.getGrade(profession.grade) ; let i=index\"  [disabled]=\"profService.selectedChefExists[i]==true\" value=\"{{grade}}\">{{grade}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"service.errors?.required && service.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  Choisissez un <b> service</b> !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"fonction\">Fonction:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"                                                                          \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fonction\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"profession.fonction\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fonction=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled selected style=\"color: grey\">Choisir fonction:</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let fonct of this.profService.getService(profession.grade)\" value=\"{{fonct}}\">{{fonct}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"help-block danger\" *ngIf=\"service.errors?.required && service.touched\" style=\"color:green\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  Choisissez un <b> service</b> !\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success pull-right\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"f2.invalid && isIn!=true\">Appliquer les modifications\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-default pull-left\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"modalRef.hide()\">Annuler\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  \n\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t\t\n\n\n\n\n\t\t\t\t"

/***/ }),

/***/ "./src/app/personne-list/single-personne/single-personne.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/personne-list/single-personne/single-personne.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin-top: 20px; }\n\n.align-center, .center {\n  text-align: center !important; }\n\n.profile-user-info {\n  display: table;\n  width: 98%;\n  width: calc(100% - 24px);\n  margin: 0 auto; }\n\n.profile-info-row {\n  display: table-row; }\n\n.profile-info-name,\n.profile-info-value {\n  display: table-cell;\n  border-top: 1px dotted #D5E4F1; }\n\n.profile-info-name {\n  text-align: right;\n  padding: 6px 10px 6px 4px;\n  font-weight: 400;\n  color: #667E99;\n  background-color: transparent;\n  width: 110px;\n  vertical-align: middle; }\n\n.profile-info-value {\n  padding: 6px 4px 6px 6px; }\n\n.profile-info-value > span + span:before {\n  display: inline;\n  content: \",\";\n  margin-left: 1px;\n  margin-right: 3px;\n  color: #666;\n  border-bottom: 1px solid #FFF; }\n\n.profile-info-value > span + span.editable-container:before {\n  display: none; }\n\n.profile-info-row:first-child .profile-info-name,\n.profile-info-row:first-child .profile-info-value {\n  border-top: none; }\n\n.profile-user-info-striped {\n  border: 1px solid #DCEBF7; }\n\n.profile-user-info-striped .profile-info-name {\n  color: #336199;\n  background-color: #EDF3F4;\n  border-top: 1px solid #F7FBFF; }\n\n.profile-user-info-striped .profile-info-value {\n  border-top: 1px dotted #DCEBF7;\n  padding-left: 12px; }\n\n.profile-picture {\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  padding: 4px;\n  display: inline-block;\n  max-width: 100%;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15); }\n\n.profile-activity {\n  padding: 10px 4px;\n  border-bottom: 1px dotted #D0D8E0;\n  position: relative;\n  border-left: 1px dotted #FFF;\n  border-right: 1px dotted #FFF; }\n\n.profile-activity:first-child {\n  border-top: 1px dotted transparent; }\n\n.profile-activity:first-child:hover {\n  border-top-color: #D0D8E0; }\n\n.profile-activity:hover {\n  background-color: #F4F9FD;\n  border-left: 1px dotted #D0D8E0;\n  border-right: 1px dotted #D0D8E0; }\n\n.profile-activity img {\n  border: 2px solid #C9D6E5;\n  border-radius: 100%;\n  max-width: 40px;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none; }\n\n.profile-activity .thumbicon {\n  background-color: #74ABD7;\n  display: inline-block;\n  border-radius: 100%;\n  width: 38px;\n  height: 38px;\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  line-height: 38px;\n  margin-right: 10px;\n  margin-left: 0;\n  text-shadow: none !important; }\n\n.profile-activity .time {\n  display: block;\n  margin-top: 4px;\n  color: #777; }\n\n.profile-activity a.user {\n  font-weight: 700;\n  color: #9585BF; }\n\n.profile-activity .tools {\n  position: absolute;\n  right: 12px;\n  bottom: 8px;\n  display: none; }\n\n.profile-activity:hover .tools {\n  display: block; }\n\n.user-profile .ace-thumbnails li {\n  border: 1px solid #CCC;\n  padding: 3px;\n  margin: 6px; }\n\n.user-profile .ace-thumbnails li .tools {\n  left: 3px;\n  right: 3px; }\n\n.user-profile .ace-thumbnails li:hover .tools {\n  bottom: 3px; }\n\n.user-title-label:hover {\n  text-decoration: none; }\n\n.user-title-label + .dropdown-menu {\n  margin-left: -12px; }\n\n.profile-contact-links {\n  padding: 4px 2px 5px;\n  border: 1px solid #E0E2E5;\n  background-color: #F8FAFC; }\n\n.btn-link:hover .ace-icon {\n  text-decoration: none !important; }\n\n.profile-social-links > a:hover > .ace-icon,\n.profile-users .memberdiv .name a:hover .ace-icon,\n.profile-users .memberdiv .tools > a:hover {\n  text-decoration: none; }\n\n.profile-social-links > a {\n  text-decoration: none;\n  margin: 0 1px; }\n\n.profile-skills .progress {\n  height: 26px;\n  margin-bottom: 2px;\n  background-color: transparent; }\n\n.profile-skills .progress .progress-bar {\n  line-height: 26px;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: \"Open Sans\";\n  padding: 0 8px; }\n\n.profile-users .user {\n  display: block;\n  position: static;\n  text-align: center;\n  width: auto; }\n\n.profile-users .user img {\n  padding: 2px;\n  border-radius: 100%;\n  border: 1px solid #AAA;\n  max-width: none;\n  width: 64px;\n  transition: all .1s; }\n\n.profile-users .user img:hover {\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.33); }\n\n.profile-users .memberdiv {\n  background-color: #FFF;\n  width: 100px;\n  box-sizing: border-box;\n  border: none;\n  text-align: center;\n  margin: 0 8px 24px; }\n\n.profile-users .memberdiv .body {\n  display: inline-block;\n  margin: 8px 0 0; }\n\n.profile-users .memberdiv .popover {\n  visibility: hidden;\n  min-width: 0;\n  max-height: 0;\n  max-width: 0;\n  margin-left: 0;\n  margin-right: 0;\n  top: -5%;\n  left: auto;\n  right: auto;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  transition: opacity .2s linear 0s, visibility 0s linear .2s, max-height 0s linear .2s, max-width 0s linear .2s, min-width 0s linear .2s; }\n\n.profile-users .memberdiv .popover.right {\n  left: 100%;\n  right: auto;\n  display: block; }\n\n.profile-users .memberdiv .popover.left {\n  left: auto;\n  right: 100%;\n  display: block; }\n\n.profile-users .memberdiv > :first-child:hover .popover {\n  visibility: visible;\n  opacity: 1;\n  z-index: 1060;\n  max-height: 250px;\n  max-width: 250px;\n  min-width: 150px;\n  transition-delay: 0s; }\n\n.profile-users .memberdiv .tools {\n  position: static;\n  display: block;\n  width: 100%;\n  margin-top: 2px; }\n\n.profile-users .memberdiv .tools > a {\n  margin: 0 2px; }\n\n.user-status {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  background-color: #FFF;\n  border: 3px solid #AAA;\n  border-radius: 100%;\n  vertical-align: middle;\n  margin-right: 1px; }\n\n.user-status.status-online {\n  border-color: #8AC16C; }\n\n.user-status.status-busy {\n  border-color: #E07F69; }\n\n.user-status.status-idle {\n  border-color: #FFB752; }\n\n.tab-content.profile-edit-tab-content {\n  border: 1px solid #DDD;\n  padding: 8px 32px 32px;\n  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);\n  background-color: #FFF; }\n\n@media only screen and (max-width: 480px) {\n  .profile-info-name {\n    width: 80px; }\n  .profile-user-info-striped .profile-info-name {\n    float: none;\n    width: auto;\n    text-align: left;\n    padding: 6px 4px 6px 10px;\n    display: block; }\n  .profile-user-info-striped .profile-info-value {\n    margin-left: 10px;\n    display: block; }\n  .user-profile .memberdiv {\n    width: 50%;\n    margin-left: 0;\n    margin-right: 0; } }\n\n.itemdiv {\n  padding-right: 3px;\n  min-height: 66px; }\n\n.itemdiv > .user {\n  display: inline-block;\n  width: 42px;\n  position: absolute;\n  left: 0; }\n\n.itemdiv > .user > .img,\n.itemdiv > .user > img {\n  border-radius: 100%;\n  border: 2px solid #5293C4;\n  max-width: 40px;\n  position: relative; }\n\n.itemdiv > .user > .img {\n  padding: 2px; }\n\n.itemdiv > .body {\n  width: auto;\n  margin-left: 50px;\n  margin-right: 12px;\n  position: relative; }\n\n.itemdiv > .body > .time {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #666;\n  position: absolute;\n  right: 9px;\n  top: 0; }\n\n.itemdiv > .body > .time .ace-icon {\n  font-size: 14px;\n  font-weight: 400; }\n\n.itemdiv > .body > .name {\n  display: block;\n  color: #999; }\n\n.itemdiv > .body > .name > b {\n  color: #777; }\n\n.itemdiv > .body > .text {\n  display: block;\n  position: relative;\n  margin-top: 2px;\n  padding-bottom: 19px;\n  padding-left: 7px;\n  font-size: 13px; }\n\n.itemdiv.dialogdiv:before,\n.itemdiv.dialogdiv > .body:before,\n.itemdiv > .body > .text:after {\n  content: \"\";\n  position: absolute; }\n\n.itemdiv > .body > .text:after {\n  display: block;\n  height: 1px;\n  font-size: 0;\n  overflow: hidden;\n  left: 16px;\n  right: -12px;\n  margin-top: 9px;\n  border-top: 1px solid #E4ECF3; }\n\n.itemdiv > .body > .text > .ace-icon:first-child {\n  color: #DCE3ED;\n  margin-right: 4px; }\n\n.itemdiv:last-child > .body > .text {\n  border-bottom-width: 0; }\n\n.itemdiv:last-child > .body > .text:after {\n  display: none; }\n\n.itemdiv.dialogdiv {\n  padding-bottom: 14px; }\n\n.itemdiv.dialogdiv:before {\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 19px;\n  width: 3px;\n  max-width: 3px;\n  background-color: #E1E6ED;\n  border: 1px solid #D7DBDD;\n  border-width: 0 1px; }\n\n.itemdiv.dialogdiv:last-child {\n  padding-bottom: 0; }\n\n.itemdiv.dialogdiv:last-child:before {\n  display: none; }\n\n.itemdiv.dialogdiv > .user > img {\n  border-color: #C9D6E5; }\n\n.itemdiv.dialogdiv > .body {\n  border: 1px solid #DDE4ED;\n  padding: 5px 8px 8px;\n  border-left-width: 2px;\n  margin-right: 1px; }\n\n.itemdiv.dialogdiv > .body:before {\n  display: block;\n  left: -7px;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #DDE4ED;\n  border-width: 2px 0 0 2px;\n  background-color: #FFF;\n  box-sizing: content-box;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.itemdiv.dialogdiv > .body > .time {\n  position: static;\n  float: right; }\n\n.itemdiv.dialogdiv > .body > .text {\n  padding-left: 0;\n  padding-bottom: 0; }\n\n.itemdiv.dialogdiv > .body > .text:after {\n  display: none; }\n\n.itemdiv.dialogdiv .tooltip-inner {\n  word-break: break-all; }\n\n.itemdiv.memberdiv {\n  width: 175px;\n  padding: 2px;\n  margin: 3px 0;\n  float: left;\n  border-bottom: 1px solid #E8E8E8; }\n\n@media (min-width: 992px) {\n  .itemdiv.memberdiv {\n    max-width: 50%; } }\n\n@media (max-width: 991px) {\n  .itemdiv.memberdiv {\n    min-width: 33.333%; } }\n\n.itemdiv.memberdiv > .user > img {\n  border-color: #DCE3ED; }\n\n.itemdiv.memberdiv > .body > .time {\n  position: static; }\n\n.itemdiv.memberdiv > .body > .name {\n  line-height: 18px;\n  height: 18px;\n  margin-bottom: 0; }\n\n.itemdiv.memberdiv > .body > .name > a {\n  display: inline-block;\n  max-width: 100px;\n  max-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all; }\n\n.itemdiv .tools {\n  position: absolute;\n  right: 5px;\n  bottom: 10px;\n  display: none; }\n\n.item-list > li > .checkbox,\n.item-list > li > label.inline,\n.itemdiv:hover .tools {\n  display: inline-block; }\n\n.itemdiv .tools .btn {\n  border-radius: 36px;\n  margin: 1px 0; }\n\n.itemdiv .body .tools {\n  bottom: 4px; }\n\n.itemdiv.commentdiv .tools {\n  right: 9px; }\n\n.item-list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.item-list > li {\n  padding: 9px;\n  background-color: #FFF;\n  margin-top: -1px;\n  position: relative; }\n\n.item-list > li.selected {\n  color: #8090A0;\n  background-color: #F4F9FC; }\n\n.item-list > li.selected .lbl,\n.item-list > li.selected label {\n  text-decoration: line-through;\n  color: #8090A0; }\n\n.item-list > li label {\n  font-size: 13px; }\n\n.item-list > li .percentage {\n  font-size: 11px;\n  font-weight: 700;\n  color: #777; }\n\n.ace-thumbnails > li,\n.ace-thumbnails > li > :first-child {\n  display: block;\n  position: relative; }\n\n.ace-thumbnails {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.ace-thumbnails > li {\n  float: left;\n  overflow: hidden;\n  margin: 2px;\n  border: 2px solid #333; }\n\n.ace-thumbnails > li > :first-child:focus {\n  outline: 0; }\n\n.ace-thumbnails > li .tags {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n  direction: rtl;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  background-color: transparent;\n  border-width: 0;\n  vertical-align: inherit; }\n\n.ace-thumbnails > li .tags > .label-holder {\n  opacity: .92;\n  filter: alpha(opacity=92);\n  display: table;\n  margin: 1px 0 0;\n  direction: ltr;\n  text-align: left; }\n\n.ace-thumbnails > li > .tools,\n.ace-thumbnails > li > :first-child > .text {\n  position: absolute;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55); }\n\n.ace-thumbnails > li .tags > .label-holder:hover {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.ace-thumbnails > li > .tools {\n  top: 0;\n  bottom: 0;\n  left: -30px;\n  width: 24px;\n  vertical-align: middle;\n  transition: all .2s ease; }\n\n.ace-thumbnails > li > .tools.tools-right {\n  left: auto;\n  right: -30px; }\n\n.ace-thumbnails > li > .tools.tools-bottom {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: -30px; }\n\n.ace-thumbnails > li > .tools.tools-top {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: -30px;\n  bottom: auto; }\n\n.ace-thumbnails > li:hover > .tools {\n  left: 0;\n  right: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-bottom {\n  top: auto;\n  bottom: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-top {\n  bottom: auto;\n  top: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-right {\n  left: auto;\n  right: 0; }\n\n.ace-thumbnails > li > .in.tools {\n  left: 0;\n  right: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-bottom {\n  top: auto;\n  bottom: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-top {\n  bottom: auto;\n  top: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-right {\n  left: auto;\n  right: 0; }\n\n.ace-thumbnails > li > .tools > a,\n.ace-thumbnails > li > :first-child .inner a {\n  display: inline-block;\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0 4px; }\n\n.ace-thumbnails > li > .tools > a:hover,\n.ace-thumbnails > li > :first-child .inner a:hover {\n  text-decoration: none;\n  color: #C9E2EA; }\n\n.ace-thumbnails > li .tools.tools-bottom > a,\n.ace-thumbnails > li .tools.tools-top > a {\n  display: inline-block; }\n\n.ace-thumbnails > li > :first-child > .text {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  color: #FFF;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: all .2s ease; }\n\n.dialogs,\n.itemdiv {\n  position: relative; }\n\n.ace-thumbnails > li > :first-child > .text:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 0; }\n\n.ace-thumbnails > li > :first-child > .text > .inner {\n  padding: 4px 0;\n  margin: 0;\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 90%; }\n\n.ace-thumbnails > li:hover > :first-child > .text {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n@media only screen and (max-width: 480px) {\n  .ace-thumbnails {\n    text-align: center; }\n  .ace-thumbnails > li {\n    float: none;\n    display: inline-block; } }\n\n.tab-content {\n  border: 1px solid #C5D0DC;\n  position: relative; }\n\n.tab-content.no-padding {\n  padding: 0; }\n\n.tab-content.no-border {\n  border: none;\n  padding: 12px; }\n\n.tab-content.padding-32 {\n  padding: 32px 24px; }\n\n.tab-content.no-border.padding-32 {\n  padding: 32px; }\n\n.tab-content.padding-30 {\n  padding: 30px 23px; }\n\n.tab-content.no-border.padding-30 {\n  padding: 30px; }\n\n.tab-content.padding-28 {\n  padding: 28px 21px; }\n\n.tab-content.no-border.padding-28 {\n  padding: 28px; }\n\n.tab-content.padding-26 {\n  padding: 26px 20px; }\n\n.tab-content.no-border.padding-26 {\n  padding: 26px; }\n\n.tab-content.padding-24 {\n  padding: 24px 18px; }\n\n.tab-content.no-border.padding-24 {\n  padding: 24px; }\n\n.tab-content.padding-22 {\n  padding: 22px 17px; }\n\n.tab-content.no-border.padding-22 {\n  padding: 22px; }\n\n.tab-content.padding-20 {\n  padding: 20px 15px; }\n\n.tab-content.no-border.padding-20 {\n  padding: 20px; }\n\n.tab-content.padding-18 {\n  padding: 18px 14px; }\n\n.tab-content.no-border.padding-18 {\n  padding: 18px; }\n\n.tab-content.padding-16 {\n  padding: 16px 12px; }\n\n.tab-content.no-border.padding-16 {\n  padding: 16px; }\n\n.tab-content.padding-14 {\n  padding: 14px 11px; }\n\n.tab-content.no-border.padding-14 {\n  padding: 14px; }\n\n.tab-content.padding-12 {\n  padding: 12px 9px; }\n\n.tab-content.no-border.padding-12 {\n  padding: 12px; }\n\n.tab-content.padding-10 {\n  padding: 10px 8px; }\n\n.tab-content.no-border.padding-10 {\n  padding: 10px; }\n\n.tab-content.padding-8 {\n  padding: 8px 6px; }\n\n.tab-content.no-border.padding-8 {\n  padding: 8px; }\n\n.tab-content.padding-6 {\n  padding: 6px 5px; }\n\n.tab-content.no-border.padding-6 {\n  padding: 6px; }\n\n.tab-content.padding-4 {\n  padding: 4px 3px; }\n\n.tab-content.no-border.padding-4 {\n  padding: 4px; }\n\n.tab-content.no-border.padding-2,\n.tab-content.padding-2 {\n  padding: 2px; }\n\n.tab-content.no-border.padding-0,\n.tab-content.padding-0 {\n  padding: 0; }\n\n.nav.nav-tabs.padding-28 {\n  padding-left: 28px; }\n\n.tabs-left > .nav.nav-tabs.padding-28,\n.tabs-right > .nav.nav-tabs.padding-28 {\n  padding-left: 0;\n  padding-top: 28px; }\n\n.nav.nav-tabs.padding-26 {\n  padding-left: 26px; }\n\n.tabs-left > .nav.nav-tabs.padding-26,\n.tabs-right > .nav.nav-tabs.padding-26 {\n  padding-left: 0;\n  padding-top: 26px; }\n\n.nav.nav-tabs.padding-24 {\n  padding-left: 24px; }\n\n.tabs-left > .nav.nav-tabs.padding-24,\n.tabs-right > .nav.nav-tabs.padding-24 {\n  padding-left: 0;\n  padding-top: 24px; }\n\n.nav.nav-tabs.padding-22 {\n  padding-left: 22px; }\n\n.tabs-left > .nav.nav-tabs.padding-22,\n.tabs-right > .nav.nav-tabs.padding-22 {\n  padding-left: 0;\n  padding-top: 22px; }\n\n.nav.nav-tabs.padding-20 {\n  padding-left: 20px; }\n\n.tabs-left > .nav.nav-tabs.padding-20,\n.tabs-right > .nav.nav-tabs.padding-20 {\n  padding-left: 0;\n  padding-top: 20px; }\n\n.nav.nav-tabs.padding-18 {\n  padding-left: 18px; }\n\n.tabs-left > .nav.nav-tabs.padding-18,\n.tabs-right > .nav.nav-tabs.padding-18 {\n  padding-left: 0;\n  padding-top: 18px; }\n\n.nav.nav-tabs.padding-16 {\n  padding-left: 16px; }\n\n.tabs-left > .nav.nav-tabs.padding-16,\n.tabs-right > .nav.nav-tabs.padding-16 {\n  padding-left: 0;\n  padding-top: 16px; }\n\n.nav.nav-tabs.padding-14 {\n  padding-left: 14px; }\n\n.tabs-left > .nav.nav-tabs.padding-14,\n.tabs-right > .nav.nav-tabs.padding-14 {\n  padding-left: 0;\n  padding-top: 14px; }\n\n.nav.nav-tabs.padding-12 {\n  padding-left: 12px; }\n\n.tabs-left > .nav.nav-tabs.padding-12,\n.tabs-right > .nav.nav-tabs.padding-12 {\n  padding-left: 0;\n  padding-top: 12px; }\n\n.nav.nav-tabs.padding-10 {\n  padding-left: 10px; }\n\n.tabs-left > .nav.nav-tabs.padding-10,\n.tabs-right > .nav.nav-tabs.padding-10 {\n  padding-left: 0;\n  padding-top: 10px; }\n\n.nav.nav-tabs.padding-8 {\n  padding-left: 8px; }\n\n.tabs-left > .nav.nav-tabs.padding-8,\n.tabs-right > .nav.nav-tabs.padding-8 {\n  padding-left: 0;\n  padding-top: 8px; }\n\n.nav.nav-tabs.padding-6 {\n  padding-left: 6px; }\n\n.tabs-left > .nav.nav-tabs.padding-6,\n.tabs-right > .nav.nav-tabs.padding-6 {\n  padding-left: 0;\n  padding-top: 6px; }\n\n.nav.nav-tabs.padding-4 {\n  padding-left: 4px; }\n\n.tabs-left > .nav.nav-tabs.padding-4,\n.tabs-right > .nav.nav-tabs.padding-4 {\n  padding-left: 0;\n  padding-top: 4px; }\n\n.nav.nav-tabs.padding-2 {\n  padding-left: 2px; }\n\n.tabs-left > .nav.nav-tabs.padding-2,\n.tabs-right > .nav.nav-tabs.padding-2 {\n  padding-left: 0;\n  padding-top: 2px; }\n\n.nav-tabs {\n  border-color: #C5D0DC;\n  margin-bottom: 0 !important;\n  position: relative;\n  top: 1px; }\n\n.nav-tabs > li > a {\n  padding: 7px 12px 8px; }\n\n.nav-tabs > li > a,\n.nav-tabs > li > a:focus {\n  border-radius: 0 !important;\n  border-color: #C5D0DC;\n  background-color: #F9F9F9;\n  color: #999;\n  margin-right: -1px;\n  line-height: 18px;\n  position: relative; }\n\n.nav-tabs > li > a:hover {\n  background-color: #FFF;\n  color: #4C8FBD;\n  border-color: #C5D0DC; }\n\n.nav-tabs > li > a:active,\n.nav-tabs > li > a:focus {\n  outline: 0 !important; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #576373;\n  border-color: #C5D0DC #C5D0DC transparent;\n  border-top: 2px solid #4C8FBD;\n  background-color: #FFF;\n  z-index: 1;\n  line-height: 18px;\n  margin-top: -1px;\n  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.tabs-below > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  margin-top: -1px;\n  border-color: #C5D0DC;\n  border-bottom-width: 0; }\n\n.tabs-below > .nav-tabs > li > a,\n.tabs-below > .nav-tabs > li > a:focus,\n.tabs-below > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC; }\n\n.tabs-below > .nav-tabs > li.active > a,\n.tabs-below > .nav-tabs > li.active > a:focus,\n.tabs-below > .nav-tabs > li.active > a:hover {\n  border-color: transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-bottom: 2px solid #4C8FBD;\n  margin-top: 0;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a {\n  min-width: 60px; }\n\n.tabs-left > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: left; }\n\n.tabs-left > .nav-tabs > li {\n  float: none !important; }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-left > .nav-tabs > li > a:focus,\n.tabs-left > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px 0 0; }\n\n.tabs-left > .nav-tabs > li.active > a,\n.tabs-left > .nav-tabs > li.active > a:focus,\n.tabs-left > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-left: 2px solid #4C8FBD;\n  margin: 0 -1px;\n  box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.15) !important; }\n\n.tabs-right > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: right; }\n\n.tabs-right > .nav-tabs > li {\n  float: none !important; }\n\n.tabs-right > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a:focus,\n.tabs-right > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px; }\n\n.tabs-right > .nav-tabs > li.active > a,\n.tabs-right > .nav-tabs > li.active > a:focus,\n.tabs-right > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC #C5D0DC #C5D0DC transparent;\n  border-top-width: 1px;\n  border-right: 2px solid #4C8FBD;\n  margin: 0 -2px 0 -1px;\n  box-shadow: 2px 0 3px 0 rgba(0, 0, 0, 0.15); }\n\n.nav-tabs > li > a .badge {\n  padding: 1px 5px;\n  line-height: 15px;\n  opacity: .75;\n  vertical-align: initial; }\n\n.nav-tabs > li > a .ace-icon {\n  opacity: .75; }\n\n.nav-tabs > li.active > a .ace-icon,\n.nav-tabs > li.active > a .badge {\n  opacity: 1; }\n\n.nav-tabs li .ace-icon {\n  width: 1.25em;\n  display: inline-block;\n  text-align: center; }\n\n.nav-tabs > li.open .dropdown-toggle {\n  background-color: #4F99C6;\n  border-color: #4F99C6;\n  color: #FFF; }\n\n.nav-tabs > li.open .dropdown-toggle > .ace-icon {\n  color: #FFF !important; }\n\n.tabs-left .tab-content,\n.tabs-right .tab-content {\n  overflow: auto; }\n\n.dark {\n  color: #333 !important; }\n\n.white {\n  color: #FFF !important; }\n\n.red {\n  color: #DD5A43 !important; }\n\n.red2 {\n  color: #E08374 !important; }\n\n.light-red {\n  color: #F77 !important; }\n\n.blue {\n  color: #02021d !important;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\n.light-blue {\n  color: #93CBF9 !important; }\n\n.green {\n  color: #69AA46 !important; }\n\n.light-green {\n  color: #B0D877 !important; }\n\n.orange {\n  color: #FF892A !important; }\n\n.orange2 {\n  color: #FEB902 !important; }\n\n.light-orange {\n  color: #FCAC6F !important; }\n\n.purple {\n  color: #A069C3 !important; }\n\n.pink {\n  color: #C6699F !important; }\n\n.pink2 {\n  color: #D6487E !important; }\n\n.brown {\n  color: brown !important; }\n\n.grey {\n  color: #777 !important; }\n\n.btn-file {\n  position: relative;\n  overflow: hidden; }\n\n.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;\n  cursor: inherit;\n  display: block; }\n\n.myHeader {\n  background-color: #46454b;\n  text-align: left;\n  font-size: 13px; }\n\n.myHeader:hover {\n  background-color: #46454b;\n  text-align: left;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ubmUtbGlzdC9zaW5nbGUtcGVyc29ubmUvQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxUVk1cXFBlcnNvbm5lcy9zcmNcXGFwcFxccGVyc29ubmUtbGlzdFxcc2luZ2xlLXBlcnNvbm5lXFxzaW5nbGUtcGVyc29ubmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBSyxpQkFBZSxFQUFHOztBQUV2QjtFQUNJLDhCQUE0QixFQUMvQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxXQUFVO0VBQ1YseUJBQXdCO0VBQ3hCLGVBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7O0VBRUksb0JBQW1CO0VBQ25CLCtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsOEJBQTZCO0VBQzdCLGFBQVk7RUFDWix1QkFDSixFQUFDOztBQUVEO0VBQ0kseUJBQ0osRUFBQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLDhCQUNKLEVBQUM7O0FBRUQ7RUFDSSxjQUNKLEVBQUM7O0FBRUQ7O0VBRUksaUJBQ0osRUFBQzs7QUFFRDtFQUNJLDBCQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLDhCQUNKLEVBQUM7O0FBRUQ7RUFDSSwrQkFBOEI7RUFDOUIsbUJBQ0osRUFBQzs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixnQkFBZTtFQUdmLHVCQUFzQjtFQUN0Qiw0Q0FBMEMsRUFDN0M7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsa0NBQWlDO0VBQ2pDLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsOEJBQ0osRUFBQzs7QUFFRDtFQUNJLG1DQUNKLEVBQUM7O0FBRUQ7RUFDSSwwQkFDSixFQUFDOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGdDQUErQjtFQUMvQixpQ0FDSixFQUFDOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsaUJBQ0osRUFBQzs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLDZCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLFlBQ0osRUFBQzs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixlQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFlBQVc7RUFDWCxjQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUNKLEVBQUM7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLFlBQ0osRUFBQzs7QUFFRDtFQUNJLFVBQVM7RUFDVCxXQUNKLEVBQUM7O0FBRUQ7RUFDSSxZQUNKLEVBQUM7O0FBRUQ7RUFDSSxzQkFDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDtFQUNJLHFCQUFvQjtFQUNwQiwwQkFBeUI7RUFDekIsMEJBQ0osRUFBQzs7QUFFRDtFQUNJLGlDQUErQixFQUNsQzs7QUFFRDs7O0VBR0ksc0JBQ0osRUFBQzs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQixjQUNKLEVBQUM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDhCQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIseUJBQXdCO0VBQ3hCLGVBQ0osRUFBQzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLFlBQ0osRUFBQzs7QUFFRDtFQUNJLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsWUFBVztFQUdYLG9CQUNKLEVBQUM7O0FBRUQ7RUFFSSw0Q0FBMEMsRUFDN0M7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsYUFBWTtFQUdaLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsZ0JBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osY0FBYTtFQUNiLGFBQVk7RUFDWixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixTQUFRO0VBQ1IsV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUdsQix3SUFDSixFQUFDOztBQUVEO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxlQUNKLEVBQUM7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLGVBQ0osRUFBQzs7QUFFRDtFQUNJLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBSWhCLHFCQUNKLEVBQUM7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLFlBQVc7RUFDWCxnQkFDSixFQUFDOztBQUVEO0VBQ0ksY0FDSixFQUFDOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxzQkFDSixFQUFDOztBQUVEO0VBQ0ksc0JBQ0osRUFBQzs7QUFFRDtFQUNJLHNCQUNKLEVBQUM7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsdUJBQXNCO0VBRXRCLDJDQUF5QztFQUN6Qyx1QkFDSixFQUFDOztBQUVEO0VBQ0k7SUFDSSxZQUNKLEVBQUM7RUFDRDtJQUNJLFlBQVc7SUFDWCxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLDBCQUF5QjtJQUN6QixlQUNKLEVBQUM7RUFDRDtJQUNJLGtCQUFpQjtJQUNqQixlQUNKLEVBQUM7RUFDRDtJQUNJLFdBQVU7SUFDVixlQUFjO0lBQ2QsZ0JBQ0osRUFBQyxFQUFBOztBQUtMO0VBQ0ksbUJBQWtCO0VBQ2xCLGlCQUNKLEVBQUM7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixRQUNKLEVBQUM7O0FBRUQ7O0VBRUksb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxhQUNKLEVBQUM7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFDSixFQUFDOztBQUVEO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLE9BQ0osRUFBQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQ0osRUFBQzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxZQUNKLEVBQUM7O0FBRUQ7RUFDSSxZQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YscUJBQW9CO0VBQ3BCLGtCQUFpQjtFQUNqQixnQkFDSixFQUFDOztBQUVEOzs7RUFHSSxZQUFXO0VBQ1gsbUJBQ0osRUFBQzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsOEJBQ0osRUFBQzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxrQkFDSixFQUFDOztBQUVEO0VBQ0ksdUJBQ0osRUFBQzs7QUFFRDtFQUNJLGNBQ0osRUFBQzs7QUFFRDtFQUNJLHFCQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsT0FBTTtFQUNOLFVBQVM7RUFDVCxXQUFVO0VBQ1YsV0FBVTtFQUNWLGVBQWM7RUFDZCwwQkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLG9CQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFDSixFQUFDOztBQUVEO0VBQ0ksY0FDSixFQUFDOztBQUVEO0VBQ0ksc0JBQ0osRUFBQzs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIsdUJBQXNCO0VBQ3RCLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVTtFQUNWLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLDBCQUF5QjtFQUN6QiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBR3RCLHdCQUF1QjtFQUN2QixrQ0FBaUM7RUFHakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGFBQ0osRUFBQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2Ysa0JBQ0osRUFBQzs7QUFFRDtFQUNJLGNBQ0osRUFBQzs7QUFFRDtFQUNJLHNCQUNKLEVBQUM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osYUFBWTtFQUNaLGNBQWE7RUFDYixZQUFXO0VBQ1gsaUNBQ0osRUFBQzs7QUFFRDtFQUNJO0lBQ0ksZUFDSixFQUFDLEVBQUE7O0FBR0w7RUFDSTtJQUNJLG1CQUNKLEVBQUMsRUFBQTs7QUFHTDtFQUNJLHNCQUNKLEVBQUM7O0FBRUQ7RUFDSSxpQkFDSixFQUFDOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixpQkFDSixFQUFDOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixzQkFDSixFQUFDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixhQUFZO0VBQ1osY0FDSixFQUFDOztBQUVEOzs7RUFHSSxzQkFDSixFQUFDOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGNBQ0osRUFBQzs7QUFFRDtFQUNJLFlBQ0osRUFBQzs7QUFFRDtFQUNJLFdBQ0osRUFBQzs7QUFFRDtFQUNJLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQ0osRUFBQzs7QUFFRDtFQUNJLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsMEJBQ0osRUFBQzs7QUFFRDs7RUFFSSw4QkFBNkI7RUFDN0IsZUFDSixFQUFDOztBQUVEO0VBQ0ksZ0JBQ0osRUFBQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLFlBQ0osRUFBQzs7QUFHRDs7RUFFSSxlQUFjO0VBQ2QsbUJBQ0osRUFBQzs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixVQUFTO0VBQ1QsV0FDSixFQUFDOztBQUVEO0VBQ0ksWUFBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsdUJBQ0osRUFBQzs7QUFFRDtFQUNJLFdBQ0osRUFBQzs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULFNBQVE7RUFDUixrQkFBaUI7RUFDakIsZUFBYztFQUNkLFdBQVU7RUFDVixVQUFTO0VBQ1QsYUFBWTtFQUNaLFlBQVc7RUFDWCw4QkFBNkI7RUFDN0IsZ0JBQWU7RUFDZix3QkFDSixFQUFDOztBQUVEO0VBQ0ksYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsaUJBQ0osRUFBQzs7QUFFRDs7RUFFSSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHNDQUFvQyxFQUN2Qzs7QUFFRDtFQUNJLFdBQVU7RUFDViwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxPQUFNO0VBQ04sVUFBUztFQUNULFlBQVc7RUFDWCxZQUFXO0VBQ1gsdUJBQXNCO0VBR3RCLHlCQUNKLEVBQUM7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsYUFDSixFQUFDOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxjQUNKLEVBQUM7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLFFBQU87RUFDUCxTQUFRO0VBQ1IsV0FBVTtFQUNWLGFBQ0osRUFBQzs7QUFFRDtFQUNJLFFBQU87RUFDUCxTQUNKLEVBQUM7O0FBRUQ7RUFDSSxVQUFTO0VBQ1QsVUFDSixFQUFDOztBQUVEO0VBQ0ksYUFBWTtFQUNaLE9BQ0osRUFBQzs7QUFFRDtFQUNJLFdBQVU7RUFDVixTQUNKLEVBQUM7O0FBRUQ7RUFDSSxRQUFPO0VBQ1AsU0FDSixFQUFDOztBQUVEO0VBQ0ksVUFBUztFQUNULFVBQ0osRUFBQzs7QUFFRDtFQUNJLGFBQVk7RUFDWixPQUNKLEVBQUM7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsU0FDSixFQUFDOztBQUVEOztFQUVJLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZUFDSixFQUFDOztBQUVEOztFQUVJLHNCQUFxQjtFQUNyQixlQUNKLEVBQUM7O0FBRUQ7O0VBRUksc0JBQ0osRUFBQzs7QUFFRDtFQUNJLFNBQVE7RUFDUixRQUFPO0VBQ1AsVUFBUztFQUNULE9BQU07RUFDTixZQUFXO0VBQ1gsV0FBVTtFQUNWLHlCQUF3QjtFQUd4Qix5QkFDSixFQUFDOztBQUVEOztFQUVJLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsZ0JBQ0osRUFBQzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxVQUFTO0VBQ1Qsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixlQUNKLEVBQUM7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0k7SUFDSSxtQkFDSixFQUFDO0VBQ0Q7SUFDSSxZQUFXO0lBQ1gsc0JBQ0osRUFBQyxFQUFBOztBQUlMO0VBQ0ksMEJBQXlCO0VBRXpCLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxXQUNKLEVBQUM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osY0FDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDtFQUNJLGNBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxjQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFDSixFQUFDOztBQUVEO0VBQ0ksY0FDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDtFQUNJLGNBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxjQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFDSixFQUFDOztBQUVEO0VBQ0ksY0FDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDtFQUNJLGNBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSxjQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFDSixFQUFDOztBQUVEO0VBQ0ksY0FDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDtFQUNJLGNBQ0osRUFBQzs7QUFFRDtFQUNJLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxjQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFDSixFQUFDOztBQUVEO0VBQ0ksY0FDSixFQUFDOztBQUVEO0VBQ0ksaUJBQ0osRUFBQzs7QUFFRDtFQUNJLGFBQ0osRUFBQzs7QUFFRDtFQUNJLGlCQUNKLEVBQUM7O0FBRUQ7RUFDSSxhQUNKLEVBQUM7O0FBRUQ7RUFDSSxpQkFDSixFQUFDOztBQUVEO0VBQ0ksYUFDSixFQUFDOztBQUVEOztFQUVJLGFBQ0osRUFBQzs7QUFFRDs7RUFFSSxXQUNKLEVBQUM7O0FBR0Q7RUFDSSxtQkFDSixFQUFDOztBQUVEOztFQUVJLGdCQUFlO0VBQ2Ysa0JBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7O0VBRUksZ0JBQWU7RUFDZixrQkFDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDs7RUFFSSxnQkFBZTtFQUNmLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFDSixFQUFDOztBQUVEOztFQUVJLGdCQUFlO0VBQ2Ysa0JBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7O0VBRUksZ0JBQWU7RUFDZixrQkFDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDs7RUFFSSxnQkFBZTtFQUNmLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFDSixFQUFDOztBQUVEOztFQUVJLGdCQUFlO0VBQ2Ysa0JBQ0osRUFBQzs7QUFFRDtFQUNJLG1CQUNKLEVBQUM7O0FBRUQ7O0VBRUksZ0JBQWU7RUFDZixrQkFDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDs7RUFFSSxnQkFBZTtFQUNmLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxtQkFDSixFQUFDOztBQUVEOztFQUVJLGdCQUFlO0VBQ2Ysa0JBQ0osRUFBQzs7QUFFRDtFQUNJLGtCQUNKLEVBQUM7O0FBRUQ7O0VBRUksZ0JBQWU7RUFDZixpQkFDSixFQUFDOztBQUVEO0VBQ0ksa0JBQ0osRUFBQzs7QUFFRDs7RUFFSSxnQkFBZTtFQUNmLGlCQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFDSixFQUFDOztBQUVEOztFQUVJLGdCQUFlO0VBQ2YsaUJBQ0osRUFBQzs7QUFFRDtFQUNJLGtCQUNKLEVBQUM7O0FBRUQ7O0VBRUksZ0JBQWU7RUFDZixpQkFDSixFQUFDOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLDRCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsU0FDSixFQUFDOztBQUVEO0VBQ0ksc0JBQ0osRUFBQzs7QUFFRDs7RUFFSSw0QkFBMEI7RUFDMUIsc0JBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFDSixFQUFDOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLGVBQWM7RUFDZCxzQkFDSixFQUFDOztBQUVEOztFQUVJLHNCQUFvQixFQUN2Qjs7QUFFRDs7O0VBR0ksZUFBYztFQUNkLDBDQUF5QztFQUN6Qyw4QkFBNkI7RUFDN0IsdUJBQXNCO0VBQ3RCLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLDZDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLFVBQVM7RUFDVCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQix1QkFDSixFQUFDOztBQUVEOzs7RUFHSSxzQkFDSixFQUFDOztBQUVEOzs7RUFHSSwwQ0FBeUM7RUFDekMsc0JBQXFCO0VBQ3JCLGlDQUFnQztFQUNoQyxjQUFhO0VBQ2IsNENBQTBDLEVBQzdDOztBQUVEOztFQUVJLGdCQUNKLEVBQUM7O0FBRUQ7RUFDSSxVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixZQUNKLEVBQUM7O0FBRUQ7RUFDSSx1QkFBcUIsRUFDeEI7O0FBRUQ7OztFQUdJLHNCQUFxQjtFQUNyQixtQkFDSixFQUFDOztBQUVEOzs7RUFHSSxrREFBaUQ7RUFDakQsc0JBQXFCO0VBQ3JCLCtCQUE4QjtFQUM5QixlQUFjO0VBRWQsd0RBQXFELEVBQ3hEOztBQUVEO0VBQ0ksVUFBUztFQUNULGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsYUFDSixFQUFDOztBQUVEO0VBQ0ksdUJBQXFCLEVBQ3hCOztBQUVEOzs7RUFHSSxzQkFBcUI7RUFDckIsZUFDSixFQUFDOztBQUVEOzs7RUFHSSxrREFBaUQ7RUFDakQsc0JBQXFCO0VBQ3JCLGdDQUErQjtFQUMvQixzQkFBcUI7RUFFckIsNENBQTBDLEVBQzdDOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osd0JBQ0osRUFBQzs7QUFFRDtFQUNJLGFBQ0osRUFBQzs7QUFFRDs7RUFFSSxXQUNKLEVBQUM7O0FBRUQ7RUFDSSxjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG1CQUNKLEVBQUM7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsc0JBQXFCO0VBQ3JCLFlBQ0osRUFBQzs7QUFFRDtFQUNJLHVCQUFxQixFQUN4Qjs7QUFFRDs7RUFFSSxlQUNKLEVBQUM7O0FBRUQ7RUFDSSx1QkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSx1QkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSwwQkFBd0IsRUFDM0I7O0FBRUQ7RUFDSSwwQkFBd0IsRUFDM0I7O0FBRUQ7RUFDSSx1QkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSwwQkFBNkI7RUFDN0Isc0RBQXNELEVBQ3pEOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksd0JBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksdUJBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFdBQVU7RUFDVixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksMEJBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSwwQkFBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbm5lLWxpc3Qvc2luZ2xlLXBlcnNvbm5lL3NpbmdsZS1wZXJzb25uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5e21hcmdpbi10b3A6MjBweDt9XHJcblxyXG4uYWxpZ24tY2VudGVyLCAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCk7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3dcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mby1uYW1lLFxyXG4ucHJvZmlsZS1pbmZvLXZhbHVlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNENUU0RjFcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mby1uYW1lIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzY2N0U5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvLXZhbHVlIHtcclxuICAgIHBhZGRpbmc6IDZweCA0cHggNnB4IDZweFxyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvLXZhbHVlPnNwYW4rc3BhbjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29udGVudDogXCIsXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGXHJcbn1cclxuXHJcbi5wcm9maWxlLWluZm8tdmFsdWU+c3BhbitzcGFuLmVkaXRhYmxlLWNvbnRhaW5lcjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvLXJvdzpmaXJzdC1jaGlsZCAucHJvZmlsZS1pbmZvLW5hbWUsXHJcbi5wcm9maWxlLWluZm8tcm93OmZpcnN0LWNoaWxkIC5wcm9maWxlLWluZm8tdmFsdWUge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRENFQkY3XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tbmFtZSB7XHJcbiAgICBjb2xvcjogIzMzNjE5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREYzRjQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0Y3RkJGRlxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLXZhbHVlIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI0RDRUJGNztcclxuICAgIHBhZGRpbmctbGVmdDogMTJweFxyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE1KVxyXG59XHJcblxyXG5cclxuXHJcbi5wcm9maWxlLWFjdGl2aXR5IHtcclxuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjRDBEOEUwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI0ZGRjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjRkZGXHJcbn1cclxuXHJcbi5wcm9maWxlLWFjdGl2aXR5OmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0QwRDhFMFxyXG59XHJcblxyXG4ucHJvZmlsZS1hY3Rpdml0eTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGOUZEO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI0QwRDhFMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjRDBEOEUwXHJcbn1cclxuXHJcbi5wcm9maWxlLWFjdGl2aXR5IGltZyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzlENkU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS1hY3Rpdml0eSAudGh1bWJpY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NEFCRDc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSFpbXBvcnRhbnRcclxufVxyXG5cclxuLnByb2ZpbGUtYWN0aXZpdHkgLnRpbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBjb2xvcjogIzc3N1xyXG59XHJcblxyXG4ucHJvZmlsZS1hY3Rpdml0eSBhLnVzZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjOTU4NUJGXHJcbn1cclxuXHJcbi5wcm9maWxlLWFjdGl2aXR5IC50b29scyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGJvdHRvbTogOHB4O1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS1hY3Rpdml0eTpob3ZlciAudG9vbHMge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZSAuYWNlLXRodW1ibmFpbHMgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogNnB4XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUgLmFjZS10aHVtYm5haWxzIGxpIC50b29scyB7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICByaWdodDogM3B4XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUgLmFjZS10aHVtYm5haWxzIGxpOmhvdmVyIC50b29scyB7XHJcbiAgICBib3R0b206IDNweFxyXG59XHJcblxyXG4udXNlci10aXRsZS1sYWJlbDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLnVzZXItdGl0bGUtbGFiZWwrLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhY3QtbGlua3Mge1xyXG4gICAgcGFkZGluZzogNHB4IDJweCA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMkU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGQ1xyXG59XHJcblxyXG4uYnRuLWxpbms6aG92ZXIgLmFjZS1pY29uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnRcclxufVxyXG5cclxuLnByb2ZpbGUtc29jaWFsLWxpbmtzPmE6aG92ZXI+LmFjZS1pY29uLFxyXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5uYW1lIGE6aG92ZXIgLmFjZS1pY29uLFxyXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC50b29scz5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS1zb2NpYWwtbGlua3M+YSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgMXB4XHJcbn1cclxuXHJcbi5wcm9maWxlLXNraWxscyAucHJvZ3Jlc3Mge1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLnByb2ZpbGUtc2tpbGxzIC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgcGFkZGluZzogMCA4cHhcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnMgLnVzZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGF1dG9cclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnMgLnVzZXIgaW1nIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VycyAudXNlciBpbWc6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zMylcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCA4cHggMjRweFxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogOHB4IDAgMFxyXG59XHJcblxyXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIHRvcDogLTUlO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4ycztcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4ycztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4yc1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyLnJpZ2h0IHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIubGVmdCB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2PjpmaXJzdC1jaGlsZDpob3ZlciAucG9wb3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwNjA7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzXHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzPmEge1xyXG4gICAgbWFyZ2luOiAwIDJweFxyXG59XHJcblxyXG4udXNlci1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0FBQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHhcclxufVxyXG5cclxuLnVzZXItc3RhdHVzLnN0YXR1cy1vbmxpbmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEFDMTZDXHJcbn1cclxuXHJcbi51c2VyLXN0YXR1cy5zdGF0dXMtYnVzeSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNFMDdGNjlcclxufVxyXG5cclxuLnVzZXItc3RhdHVzLnN0YXR1cy1pZGxlIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGQjc1MlxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucHJvZmlsZS1lZGl0LXRhYi1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMzJweCAzMnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRlxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuICAgIC5wcm9maWxlLWluZm8tbmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHhcclxuICAgIH1cclxuICAgIC5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tbmFtZSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNHB4IDZweCAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLXZhbHVlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gICAgLnVzZXItcHJvZmlsZSAubWVtYmVyZGl2IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5pdGVtZGl2IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIG1pbi1oZWlnaHQ6IDY2cHhcclxufVxyXG5cclxuLml0ZW1kaXY+LnVzZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwXHJcbn1cclxuXHJcbi5pdGVtZGl2Pi51c2VyPi5pbWcsXHJcbi5pdGVtZGl2Pi51c2VyPmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzUyOTNDNDtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uaXRlbWRpdj4udXNlcj4uaW1nIHtcclxuICAgIHBhZGRpbmc6IDJweFxyXG59XHJcblxyXG4uaXRlbWRpdj4uYm9keSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5pdGVtZGl2Pi5ib2R5Pi50aW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIHRvcDogMFxyXG59XHJcblxyXG4uaXRlbWRpdj4uYm9keT4udGltZSAuYWNlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxyXG59XHJcblxyXG4uaXRlbWRpdj4uYm9keT4ubmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjOTk5XHJcbn1cclxuXHJcbi5pdGVtZGl2Pi5ib2R5Pi5uYW1lPmIge1xyXG4gICAgY29sb3I6ICM3NzdcclxufVxyXG5cclxuLml0ZW1kaXY+LmJvZHk+LnRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTlweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4XHJcbn1cclxuXHJcbi5pdGVtZGl2LmRpYWxvZ2RpdjpiZWZvcmUsXHJcbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keTpiZWZvcmUsXHJcbi5pdGVtZGl2Pi5ib2R5Pi50ZXh0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxufVxyXG5cclxuLml0ZW1kaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgcmlnaHQ6IC0xMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNEVDRjNcclxufVxyXG5cclxuLml0ZW1kaXY+LmJvZHk+LnRleHQ+LmFjZS1pY29uOmZpcnN0LWNoaWxkIHtcclxuICAgIGNvbG9yOiAjRENFM0VEO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHhcclxufVxyXG5cclxuLml0ZW1kaXY6bGFzdC1jaGlsZD4uYm9keT4udGV4dCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwXHJcbn1cclxuXHJcbi5pdGVtZGl2Omxhc3QtY2hpbGQ+LmJvZHk+LnRleHQ6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uaXRlbWRpdi5kaWFsb2dkaXYge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHhcclxufVxyXG5cclxuLml0ZW1kaXYuZGlhbG9nZGl2OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDE5cHg7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgbWF4LXdpZHRoOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFNkVEO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3REJERDtcclxuICAgIGJvcmRlci13aWR0aDogMCAxcHhcclxufVxyXG5cclxuLml0ZW1kaXYuZGlhbG9nZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBcclxufVxyXG5cclxuLml0ZW1kaXYuZGlhbG9nZGl2Omxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLml0ZW1kaXYuZGlhbG9nZGl2Pi51c2VyPmltZyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNDOUQ2RTVcclxufVxyXG5cclxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREU0RUQ7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4IDhweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweFxyXG59XHJcblxyXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogLTdweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEREU0RUQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweCAwIDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpXHJcbn1cclxuXHJcbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keT4udGltZSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgZmxvYXQ6IHJpZ2h0XHJcbn1cclxuXHJcbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keT4udGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxyXG59XHJcblxyXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uaXRlbWRpdi5kaWFsb2dkaXYgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsXHJcbn1cclxuXHJcbi5pdGVtZGl2Lm1lbWJlcmRpdiB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFOFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLml0ZW1kaXYubWVtYmVyZGl2IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xyXG4gICAgLml0ZW1kaXYubWVtYmVyZGl2IHtcclxuICAgICAgICBtaW4td2lkdGg6IDMzLjMzMyVcclxuICAgIH1cclxufVxyXG5cclxuLml0ZW1kaXYubWVtYmVyZGl2Pi51c2VyPmltZyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNEQ0UzRURcclxufVxyXG5cclxuLml0ZW1kaXYubWVtYmVyZGl2Pi5ib2R5Pi50aW1lIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWNcclxufVxyXG5cclxuLml0ZW1kaXYubWVtYmVyZGl2Pi5ib2R5Pi5uYW1lIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uaXRlbWRpdi5tZW1iZXJkaXY+LmJvZHk+Lm5hbWU+YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMThweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxyXG59XHJcblxyXG4uaXRlbWRpdiAudG9vbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLml0ZW0tbGlzdD5saT4uY2hlY2tib3gsXHJcbi5pdGVtLWxpc3Q+bGk+bGFiZWwuaW5saW5lLFxyXG4uaXRlbWRpdjpob3ZlciAudG9vbHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbi5pdGVtZGl2IC50b29scyAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgICBtYXJnaW46IDFweCAwXHJcbn1cclxuXHJcbi5pdGVtZGl2IC5ib2R5IC50b29scyB7XHJcbiAgICBib3R0b206IDRweFxyXG59XHJcblxyXG4uaXRlbWRpdi5jb21tZW50ZGl2IC50b29scyB7XHJcbiAgICByaWdodDogOXB4XHJcbn1cclxuXHJcbi5pdGVtLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLml0ZW0tbGlzdD5saSB7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uaXRlbS1saXN0PmxpLnNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiAjODA5MEEwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGQ1xyXG59XHJcblxyXG4uaXRlbS1saXN0PmxpLnNlbGVjdGVkIC5sYmwsXHJcbi5pdGVtLWxpc3Q+bGkuc2VsZWN0ZWQgbGFiZWwge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogIzgwOTBBMFxyXG59XHJcblxyXG4uaXRlbS1saXN0PmxpIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweFxyXG59XHJcblxyXG4uaXRlbS1saXN0PmxpIC5wZXJjZW50YWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzc3N1xyXG59XHJcblxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpLFxyXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMFxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdFxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3M+LmxhYmVsLWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAuOTI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTIpO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDFweCAwIDA7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIHRleHQtYWxpZ246IGxlZnRcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scyxcclxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZD4udGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NSlcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpIC50YWdzPi5sYWJlbC1ob2xkZXI6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogLTMwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZVxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLnRvb2xzLXJpZ2h0IHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogLTMwcHhcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scy50b29scy1ib3R0b20ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IC0zMHB4XHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMudG9vbHMtdG9wIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGJvdHRvbTogYXV0b1xyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+LnRvb2xzIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMFxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+LnRvb2xzLnRvb2xzLWJvdHRvbSB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDBcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy10b3Age1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgdG9wOiAwXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj4udG9vbHMudG9vbHMtcmlnaHQge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAwXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtYm90dG9tIHtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogMFxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGk+LmluLnRvb2xzLnRvb2xzLXRvcCB7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICB0b3A6IDBcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpPi5pbi50b29scy50b29scy1yaWdodCB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDBcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scz5hLFxyXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkIC5pbm5lciBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDAgNHB4XHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHM+YTpob3ZlcixcclxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZCAuaW5uZXIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0M5RTJFQVxyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRvb2xzLnRvb2xzLWJvdHRvbT5hLFxyXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRvb2xzLnRvb2xzLXRvcD5hIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcblxyXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlXHJcbn1cclxuXHJcbi5kaWFsb2dzLFxyXG4uaXRlbWRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZD4udGV4dDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ+LnRleHQ+LmlubmVyIHtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1heC13aWR0aDogOTAlXHJcbn1cclxuXHJcbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj46Zmlyc3QtY2hpbGQ+LnRleHQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLmFjZS10aHVtYm5haWxzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICAgIC5hY2UtdGh1bWJuYWlscz5saSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1RDBEQztcclxuICAgIC8vcGFkZGluZzogMTZweCAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi50YWItY29udGVudC5uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnRhYi1jb250ZW50Lm5vLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMnB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5wYWRkaW5nLTMyIHtcclxuICAgIHBhZGRpbmc6IDMycHggMjRweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMzIge1xyXG4gICAgcGFkZGluZzogMzJweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucGFkZGluZy0zMCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIzcHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTMwIHtcclxuICAgIHBhZGRpbmc6IDMwcHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50LnBhZGRpbmctMjgge1xyXG4gICAgcGFkZGluZzogMjhweCAyMXB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yOCB7XHJcbiAgICBwYWRkaW5nOiAyOHB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5wYWRkaW5nLTI2IHtcclxuICAgIHBhZGRpbmc6IDI2cHggMjBweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjYge1xyXG4gICAgcGFkZGluZzogMjZweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucGFkZGluZy0yNCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE4cHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTI0IHtcclxuICAgIHBhZGRpbmc6IDI0cHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50LnBhZGRpbmctMjIge1xyXG4gICAgcGFkZGluZzogMjJweCAxN3B4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yMiB7XHJcbiAgICBwYWRkaW5nOiAyMnB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5wYWRkaW5nLTIwIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjAge1xyXG4gICAgcGFkZGluZzogMjBweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucGFkZGluZy0xOCB7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTE4IHtcclxuICAgIHBhZGRpbmc6IDE4cHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50LnBhZGRpbmctMTYge1xyXG4gICAgcGFkZGluZzogMTZweCAxMnB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xNiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5wYWRkaW5nLTE0IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTFweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTQge1xyXG4gICAgcGFkZGluZzogMTRweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucGFkZGluZy0xMiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDlweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTIge1xyXG4gICAgcGFkZGluZzogMTJweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucGFkZGluZy0xMCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTAge1xyXG4gICAgcGFkZGluZzogMTBweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQucGFkZGluZy04IHtcclxuICAgIHBhZGRpbmc6IDhweCA2cHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTgge1xyXG4gICAgcGFkZGluZzogOHB4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5wYWRkaW5nLTYge1xyXG4gICAgcGFkZGluZzogNnB4IDVweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctNiB7XHJcbiAgICBwYWRkaW5nOiA2cHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50LnBhZGRpbmctNCB7XHJcbiAgICBwYWRkaW5nOiA0cHggM3B4XHJcbn1cclxuXHJcbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy00IHtcclxuICAgIHBhZGRpbmc6IDRweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMixcclxuLnRhYi1jb250ZW50LnBhZGRpbmctMiB7XHJcbiAgICBwYWRkaW5nOiAycHhcclxufVxyXG5cclxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTAsXHJcbi50YWItY29udGVudC5wYWRkaW5nLTAge1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG5cclxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI4IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yOCxcclxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI4IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4XHJcbn1cclxuXHJcbi5uYXYubmF2LXRhYnMucGFkZGluZy0yNiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHhcclxufVxyXG5cclxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjYsXHJcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yNiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjZweFxyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4XHJcbn1cclxuXHJcbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI0LFxyXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHhcclxufVxyXG5cclxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTIyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjJweFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yMixcclxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAyMnB4XHJcbn1cclxuXHJcbi5uYXYubmF2LXRhYnMucGFkZGluZy0yMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcclxufVxyXG5cclxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjAsXHJcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweFxyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4XHJcbn1cclxuXHJcbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE4LFxyXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHhcclxufVxyXG5cclxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xNixcclxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4XHJcbn1cclxuXHJcbi5uYXYubmF2LXRhYnMucGFkZGluZy0xNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHhcclxufVxyXG5cclxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTQsXHJcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweFxyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4XHJcbn1cclxuXHJcbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTEyLFxyXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHhcclxufVxyXG5cclxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xMCxcclxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5uYXYubmF2LXRhYnMucGFkZGluZy04IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4XHJcbn1cclxuXHJcbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTgsXHJcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy04IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHhcclxufVxyXG5cclxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHhcclxufVxyXG5cclxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNixcclxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweFxyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy00LFxyXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4XHJcbn1cclxuXHJcbi5uYXYubmF2LXRhYnMucGFkZGluZy0yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4XHJcbn1cclxuXHJcbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIsXHJcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAycHhcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxcHhcclxufVxyXG5cclxuLm5hdi10YWJzPmxpPmEge1xyXG4gICAgcGFkZGluZzogN3B4IDEycHggOHB4XHJcbn1cclxuXHJcbi5uYXYtdGFicz5saT5hLFxyXG4ubmF2LXRhYnM+bGk+YTpmb2N1cyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIG1hcmdpbi1yaWdodDogLTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5uYXYtdGFicz5saT5hOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBjb2xvcjogIzRDOEZCRDtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQ1xyXG59XHJcblxyXG4ubmF2LXRhYnM+bGk+YTphY3RpdmUsXHJcbi5uYXYtdGFicz5saT5hOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5uYXYtdGFicz5saS5hY3RpdmU+YSxcclxuLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLFxyXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM1NzYzNzM7XHJcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREMgI0M1RDBEQyB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNEM4RkJEO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIC0ycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpXHJcbn1cclxuXHJcbi50YWJzLWJlbG93Pi5uYXYtdGFicyB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBcclxufVxyXG5cclxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpPmEsXHJcbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saT5hOmZvY3VzLFxyXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGk+YTpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNDNUQwRENcclxufVxyXG5cclxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxyXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXHJcbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNDNUQwREMgI0M1RDBEQztcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEM4RkJEO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KVxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hLFxyXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGk+YSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHhcclxufVxyXG5cclxuLnRhYnMtbGVmdD4ubmF2LXRhYnMge1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpIHtcclxuICAgIGZsb2F0OiBub25lIWltcG9ydGFudFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hLFxyXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hOmZvY3VzLFxyXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcclxuICAgIG1hcmdpbjogMCAtMXB4IDAgMFxyXG59XHJcblxyXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saS5hY3RpdmU+YSxcclxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXHJcbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQyB0cmFuc3BhcmVudCAjQzVEMERDICNDNUQwREM7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0QzhGQkQ7XHJcbiAgICBtYXJnaW46IDAgLTFweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KSFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudFxyXG59XHJcblxyXG4udGFicy1yaWdodD4ubmF2LXRhYnMge1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcclxuICAgIGZsb2F0OiByaWdodFxyXG59XHJcblxyXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGkge1xyXG4gICAgZmxvYXQ6IG5vbmUhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saT5hLFxyXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGk+YTpmb2N1cyxcclxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpPmE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xyXG4gICAgbWFyZ2luOiAwIC0xcHhcclxufVxyXG5cclxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxyXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXHJcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREMgI0M1RDBEQyAjQzVEMERDIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzRDOEZCRDtcclxuICAgIG1hcmdpbjogMCAtMnB4IDAgLTFweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpXHJcbn1cclxuXHJcbi5uYXYtdGFicz5saT5hIC5iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBvcGFjaXR5OiAuNzU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbFxyXG59XHJcblxyXG4ubmF2LXRhYnM+bGk+YSAuYWNlLWljb24ge1xyXG4gICAgb3BhY2l0eTogLjc1XHJcbn1cclxuXHJcbi5uYXYtdGFicz5saS5hY3RpdmU+YSAuYWNlLWljb24sXHJcbi5uYXYtdGFicz5saS5hY3RpdmU+YSAuYmFkZ2Uge1xyXG4gICAgb3BhY2l0eTogMVxyXG59XHJcblxyXG4ubmF2LXRhYnMgbGkgLmFjZS1pY29uIHtcclxuICAgIHdpZHRoOiAxLjI1ZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLm5hdi10YWJzPmxpLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY5OUM2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNEY5OUM2O1xyXG4gICAgY29sb3I6ICNGRkZcclxufVxyXG5cclxuLm5hdi10YWJzPmxpLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZT4uYWNlLWljb24ge1xyXG4gICAgY29sb3I6ICNGRkYhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50YWJzLWxlZnQgLnRhYi1jb250ZW50LFxyXG4udGFicy1yaWdodCAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG9cclxufVxyXG5cclxuLmRhcmsge1xyXG4gICAgY29sb3I6ICMzMzMhaW1wb3J0YW50XHJcbn1cclxuXHJcbi53aGl0ZSB7XHJcbiAgICBjb2xvcjogI0ZGRiFpbXBvcnRhbnRcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogI0RENUE0MyFpbXBvcnRhbnRcclxufVxyXG5cclxuLnJlZDIge1xyXG4gICAgY29sb3I6ICNFMDgzNzQhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5saWdodC1yZWQge1xyXG4gICAgY29sb3I6ICNGNzchaW1wb3J0YW50XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICAgIGNvbG9yOnJnYigyLCAyLCAyOSkhaW1wb3J0YW50IDtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIDtcclxufVxyXG5cclxuLmxpZ2h0LWJsdWUge1xyXG4gICAgY29sb3I6ICM5M0NCRjkhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjogIzY5QUE0NiFpbXBvcnRhbnRcclxufVxyXG5cclxuLmxpZ2h0LWdyZWVuIHtcclxuICAgIGNvbG9yOiAjQjBEODc3IWltcG9ydGFudFxyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICAgIGNvbG9yOiAjRkY4OTJBIWltcG9ydGFudFxyXG59XHJcblxyXG4ub3JhbmdlMiB7XHJcbiAgICBjb2xvcjogI0ZFQjkwMiFpbXBvcnRhbnRcclxufVxyXG5cclxuLmxpZ2h0LW9yYW5nZSB7XHJcbiAgICBjb2xvcjogI0ZDQUM2RiFpbXBvcnRhbnRcclxufVxyXG5cclxuLnB1cnBsZSB7XHJcbiAgICBjb2xvcjogI0EwNjlDMyFpbXBvcnRhbnRcclxufVxyXG5cclxuLnBpbmsge1xyXG4gICAgY29sb3I6ICNDNjY5OUYhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5waW5rMiB7XHJcbiAgICBjb2xvcjogI0Q2NDg3RSFpbXBvcnRhbnRcclxufVxyXG5cclxuLmJyb3duIHtcclxuICAgIGNvbG9yOiBicm93biFpbXBvcnRhbnRcclxufVxyXG5cclxuLmdyZXkge1xyXG4gICAgY29sb3I6ICM3NzchaW1wb3J0YW50XHJcbn1cclxuLy8vVXBsb2FkIEltZ1xyXG4uYnRuLWZpbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTsgICBcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5teUhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjksIDc1KSA7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdCA7XHJcbiAgICBmb250LXNpemU6IDEzcHggO1xyXG59XHJcbi5teUhlYWRlcjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjksIDc1KSA7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdCA7XHJcbiAgICBmb250LXNpemU6IDEzcHggO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/personne-list/single-personne/single-personne.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/personne-list/single-personne/single-personne.component.ts ***!
  \****************************************************************************/
/*! exports provided: SinglePersonneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePersonneComponent", function() { return SinglePersonneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Personne_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Personne.model */ "./src/app/models/Personne.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_personnes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_models_professional_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/professional.model */ "./src/app/models/professional.model.ts");
/* harmony import */ var src_app_services_profession_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/profession.service */ "./src/app/services/profession.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");













Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('fr', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_7__["frLocale"]);
var SinglePersonneComponent = /** @class */ (function () {
    function SinglePersonneComponent(route, personnesService, router, elem, bsModalService, localeService, profService, auhtService) {
        this.route = route;
        this.personnesService = personnesService;
        this.router = router;
        this.elem = elem;
        this.bsModalService = bsModalService;
        this.localeService = localeService;
        this.profService = profService;
        this.auhtService = auhtService;
        this.profession = new src_app_models_professional_model__WEBPACK_IMPORTED_MODULE_10__["Professionnal"]('', '', '', '', '', '', '', '');
        this.error = '';
        this.success = '';
        this.extension = '';
        this.isSelected = false;
        this.file = "";
        this.listExt = [".jpg", '.png', '.gif', '.jpeg'];
        this.linkImg = "";
        this.p = 1;
        this.p2 = 1;
        this.Cpass = "";
        this.userNum = localStorage.getItem('currentUser');
        this.currentUserGrade = localStorage.getItem('currentUserGrade');
        this.datePickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            dateInputFormat: "DD/MM/YYYY",
        });
        this.localeService.use('fr');
    }
    SinglePersonneComponent.prototype.onAddConge = function (f4) {
        this.conge.idProf = this.profession.idEmp;
        this.conge.dateDebut = this.personnesService.frenchDate(this.conge.dateDebut);
        this.conge.dateRetour = this.personnesService.frenchDate(this.conge.dateRetour);
        this.conges.push(this.conge);
        this.profService.addConge(this.conge).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Demande congé envoyé!",
            text: "Votre demande a été envoyé!",
            type: "success"
        }).then(function (val) {
            if (val.value == true) {
                window.location.reload();
            }
        });
        //console.log(this.conge) ;
    };
    SinglePersonneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conge = { 'idProf': 0, 'dateDebut': '', 'nbJours': '', 'dateRetour': '', 'motif': '' };
        this.conges = [];
        this.profService.onVerifDirecteur('Directeur', 'TVM');
        this.profService.fullChef();
        this.profService.selectedChefExists = [];
        this.personne = new src_app_models_Personne_model__WEBPACK_IMPORTED_MODULE_2__["Personne"]();
        var id = this.route.snapshot.params['id'];
        this.contentArray = [];
        this.personnesService.getSinglePersonne(+id).subscribe(function (res) {
            _this.personne = res;
            _this.linkImg = "assets/images/" + _this.personne.image;
            _this.stringDate = _this.personne.dateNaissance;
        }, function (err) {
            _this.error = err;
        });
        this.profService.getSinglePersonneProf(+id).subscribe(function (res) {
            _this.profession = res;
            _this.contentArray = res.diplome;
            _this.stringDateEmb = res.dateEmbauche;
            _this.conges = res.conges;
            _this.contentLength = _this.contentArray.length;
            _this.congesLength = _this.conges.length;
        }, function (err) {
            _this.error = err;
        });
    };
    ///////////////////////
    SinglePersonneComponent.prototype.onSelect = function (data) {
        this.value = data.heading;
    };
    //////////////////////////////suppression personne
    SinglePersonneComponent.prototype.onDeletePersonne = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Confirmation Suppression !?",
            text: "Vous voulez vraiment supprimer l'employé : " + this.personne.nom,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            cancelButtonText: "Non, Annuler!",
            confirmButtonText: 'Oui, Supprimer!'
        }).then(function (val) {
            if (val.value == true) {
                _this.personnesService.delete(_this.personne.id)
                    .subscribe(function (res) {
                    _this.personnesService.personnes = res;
                }, function (err) { return _this.error = err; });
                if (_this.personne.id == +localStorage.getItem('currentUser')) {
                    _this.auhtService.logout();
                }
                else {
                    _this.router.navigate(['/Personnes']);
                }
                window.location.reload();
            }
        });
    };
    //////////Changement avatar
    SinglePersonneComponent.prototype.onChangeProfil = function () {
        var files = this.elem.nativeElement.querySelector('#reavatar').files;
        var formData = new FormData();
        var file = files[0];
        this.extension = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
        var oldLink = this.personne.image.trim();
        var newLink = this.personne.numTel + "_Image" + this.extension;
        this.file = file.name;
        formData.append('reavatar', file, file.name);
        var listLink = { 'oldLink': oldLink, 'newLink': newLink, 'id': this.personne.id.toString() };
        this.personnesService.reUploadImage(formData, listLink).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Nouvelle photo de profil ajouté!",
            text: "Votre photo de profil est à jour !",
            type: "success"
        }).then(function (val) {
            if (val.value == true) {
                window.location.reload();
            }
        });
    };
    SinglePersonneComponent.prototype.check = function () {
        this.isSelected = true;
        var files = this.elem.nativeElement.querySelector('#reavatar').files;
        var file = files[0];
        this.extension = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
        this.file = file.name;
        if (this.listExt.indexOf(this.extension) >= 0) {
            this.isIn = true;
        }
        else {
            this.isIn = false;
        }
    };
    //Update personnes 
    SinglePersonneComponent.prototype.onUpdate = function (template) {
        this.modalRef = this.bsModalService.show(template, { class: 'container' });
    };
    SinglePersonneComponent.prototype.onUpdateProf = function (templateProf) {
        this.profService.nomService = this.profession.nomService;
        this.modalRef = this.bsModalService.show(templateProf, { class: 'container' });
    };
    SinglePersonneComponent.prototype.updatePersDetails = function (f) {
        var _this = this;
        this.personne.nom = this.personne.nom.toUpperCase();
        if (this.personne.dateNaissance == this.stringDate.toString()) {
            this.personne.dateNaissance = this.stringDate.toString();
        }
        else {
            this.personne.dateNaissance = this.personnesService.frenchDate(this.stringDate.toString());
        }
        this.personnesService.update(this.personne).subscribe(function (res) {
            //Mis a jour liste pers
            _this.personnesService.personnes = res;
            //reset the form
        }, function (err) { return _this.error = err; });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Détails personnels changé",
            text: "Vos détails personnels ont été changé",
            type: "success"
        }).then(function (val) {
            if (val.value == true) {
                _this.modalRef.hide();
                window.location.reload();
            }
        });
    };
    SinglePersonneComponent.prototype.onViewCV = function () {
        if (this.profession.pathCV != 'Pas de CV') {
            window.open('assets/fichiers/' + this.profession.pathCV);
            window.close;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('CV téléchargé', "Ouvrir le fichier pour voir le contenu");
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Pas de CV', "Cette employé n'a pas de CV!");
        }
    };
    SinglePersonneComponent.prototype.updatePersDetailsProf = function () {
        var _this = this;
        if (this.profession.dateEmbauche == this.stringDateEmb.toString()) {
            this.profession.dateEmbauche = this.stringDateEmb.toString();
        }
        else {
            this.profession.dateEmbauche = this.personnesService.frenchDate(this.stringDateEmb.toString());
        }
        this.profService.updateProf(this.profession).subscribe(function (res) {
            //Mis a jour liste pers
            //reset the form
        }, function (err) { return _this.error = err; });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Détails professionnels changé",
            text: "Vos détails professionnels ont été changé",
            type: "success"
        }).then(function (val) {
            if (val.value == true) {
                _this.modalRef.hide();
                window.location.reload();
            }
        });
    };
    SinglePersonneComponent.prototype.checkCV = function () {
        this.profService.isSelectedCV = true;
        var files = this.elem.nativeElement.querySelector('#CV').files;
        var file = files[0];
        this.file = file.name;
        console.log(file.size);
        this.profService.extensionCV = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
        if (this.profService.listExtCV.indexOf(this.profService.extensionCV) >= 0) {
            this.isInCV = true;
        }
        else {
            this.isInCV = false;
        }
    };
    SinglePersonneComponent.prototype.onUpdateCV = function () {
        var files = this.elem.nativeElement.querySelector('#CV').files;
        var formData = new FormData();
        var file = files[0];
        this.profService.extensionCV = ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase();
        var oldLink = this.profession.pathCV.trim();
        var newLink = this.profession.matricule + "_CV" + this.profService.extensionCV;
        this.file = file.name;
        formData.append('CV', file, file.name);
        var listLink = { 'oldLink': oldLink, 'newLink': newLink, 'id': this.profession.idEmp.toString() };
        this.profService.reUploadCV(formData, listLink).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Nouveau CV enregistré !",
            text: "Votre CV est à jour !",
            type: "success"
        }).then(function (val) {
            if (val.value == true) {
                window.location.reload();
            }
        });
    };
    SinglePersonneComponent.prototype.onViewPassword = function (champ) {
        this.personnesService.onViewPassword(champ);
    };
    SinglePersonneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-personne',
            template: __webpack_require__(/*! ./single-personne.component.html */ "./src/app/personne-list/single-personne/single-personne.component.html"),
            styles: [__webpack_require__(/*! ./single-personne.component.scss */ "./src/app/personne-list/single-personne/single-personne.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_personnes_service__WEBPACK_IMPORTED_MODULE_4__["PersonnesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"],
            src_app_services_profession_service__WEBPACK_IMPORTED_MODULE_11__["ProfessionService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]])
    ], SinglePersonneComponent);
    return SinglePersonneComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminGuardService = /** @class */ (function () {
    function AdminGuardService(router) {
        this.router = router;
    }
    AdminGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUserGrade') !== 'Employé' && localStorage.getItem('currentUserGrade') !== 'Stagiaire') {
            // logged as admin so return true
            return true;
        }
        // not logged as admin so redirect to the profile
        this.router.navigate(['Personne/view/' + localStorage.getItem('currentUser')]);
        return false;
    };
    AdminGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuardService);
    return AdminGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/signin']);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, route) {
        this.http = http;
        this.route = route;
        this.baseUrl = 'http://localhost/api';
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.baseUrl + "/auth", JSON.stringify({ username: username, password: password }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user.status == 200) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', user.data['IDPERS']);
                localStorage.setItem('currentUserGrade', user.data['GRADE']);
                localStorage.setItem('currentUserServ', user.data['NOMSERV']);
            }
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserGrade');
        localStorage.removeItem('currentUserServ');
        this.route.navigate(['auth/signin']);
        window.location.reload();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/is-auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/is-auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: IsAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthGuardService", function() { return IsAuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var IsAuthGuardService = /** @class */ (function () {
    function IsAuthGuardService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    IsAuthGuardService.prototype.canActivate = function () {
        if (!localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        else {
            this.router.navigate(['/Personne/view/' + localStorage.getItem('currentUser')]);
            return false;
        }
    };
    IsAuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], IsAuthGuardService);
    return IsAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/personnes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/personnes.service.ts ***!
  \***********************************************/
/*! exports provided: PersonnesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnesService", function() { return PersonnesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Personne_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Personne.model */ "./src/app/models/Personne.model.ts");






var PersonnesService = /** @class */ (function () {
    function PersonnesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost/api';
        this.personnes = [];
    }
    PersonnesService.prototype.ngOnInit = function () {
        var _this = this;
        this.getAll('TVM').subscribe(function (res) {
            _this.personnes = res['data'];
        });
    };
    PersonnesService.prototype.getAll = function (service) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('service', service);
        return this.http.get(this.baseUrl + "/list", { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.personnes = res['data'];
            return _this.personnes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    PersonnesService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Erreur sur qlq chose.');
    };
    ////////////get single personne personnel
    PersonnesService.prototype.getSinglePersonne = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id', id.toString());
        var personne = new _models_Personne_model__WEBPACK_IMPORTED_MODULE_5__["Personne"]();
        return this.http.get(this.baseUrl + "/singlePersonne", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            personne = res['data'];
            return personne;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ////////delete personne data
    PersonnesService.prototype.delete = function (id) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id', id.toString());
        return this.http.delete(this.baseUrl + "/delete", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var persfiltred = _this.personnes.filter(function (personne) {
                return +personne['id'] !== +id;
            });
            return _this.personnes = persfiltred;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Engish date to french
    PersonnesService.prototype.frenchDate = function (date) {
        date = date.toString().slice(0, 15);
        var months = { 'Jan': '01', 'Feb': '02', 'Mar': '03',
            'Apr': '04', 'May': '05', 'Jun': '06',
            'Jul': '07', 'Aug': '08', 'Sep': '09',
            'Oct': '10', 'Nov': '11', 'Dec': '12' };
        var days = { 'Mon': 'Lundi', 'Tue': 'Mardi', 'Wed': 'Mercredi',
            'Thu': 'Jeudi', 'Fri': 'Vendredi', 'Sat': 'Samedi',
            'Sun': 'Dimanche' };
        var spiltedDate = date.trim().split(' ');
        date = (days[spiltedDate[0]] + "  " + spiltedDate[2] + "/" + months[spiltedDate[1]] + "/" + spiltedDate[3]).toString();
        return date;
    };
    //////////Update personnes details
    PersonnesService.prototype.update = function (personne) {
        var _this = this;
        return this.http.put(this.baseUrl + "/updatePersDetails", { data: personne })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.personnes.push(res['data']);
            return _this.personnes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /////////store one person
    PersonnesService.prototype.store = function (personne) {
        var _this = this;
        return this.http.post(this.baseUrl + "/store", { data: personne })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            localStorage.setItem('idEmp', res['data']['id']);
            _this.personnes.push(res['data']);
            return _this.personnes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ////////upload avatar
    PersonnesService.prototype.uploadImage = function (formdata, link) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id', link.toString());
        return this.http.post(this.baseUrl + "/uploadImg", formdata, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res['message'];
        }));
    };
    ///reUpload avatar
    PersonnesService.prototype.reUploadImage = function (formdata, link) {
        return this.http.post(this.baseUrl + "/reUploadImg", formdata, { params: link });
    };
    ///////////////liste des numTel
    PersonnesService.prototype.getAllNumber = function () {
        return this.http.get(this.baseUrl + "/getAllNumber").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res['data'];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    PersonnesService.prototype.onViewPassword = function (champ) {
        var passwordField = document.getElementById(champ);
        if (passwordField.getAttribute('type') == 'password')
            passwordField.setAttribute('type', 'text');
        else
            passwordField.setAttribute('type', 'password');
    };
    PersonnesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonnesService);
    return PersonnesService;
}());



/***/ }),

/***/ "./src/app/services/profession.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/profession.service.ts ***!
  \************************************************/
/*! exports provided: ProfessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionService", function() { return ProfessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_professional_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/professional.model */ "./src/app/models/professional.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProfessionService = /** @class */ (function () {
    function ProfessionService(router, http) {
        this.router = router;
        this.http = http;
        this.nbChef = 0;
        this.nomService = '';
        this.isSelectedCV = false;
        this.listExtCV = [".doc", ".pdf", ".html"];
        this.file = "";
        this.degrees = ['BEPC', 'Bacc', 'Licence', 'Master', 'Doctorat'];
        this.mentions = ['Excellent', 'Très bien', 'Bien', 'Assez bien', 'Passable'];
        this.existDiplome = false;
        this.services = ['Informatique', 'Technique', 'Programmation', 'Production', 'Information'];
        this.branche = ['TVM'];
        this.fonctions = {
            'Informatique': ['ADSL', 'Monteur', 'Programme', 'Réseaux', 'Développeur Web'],
            'Technique': ['Technicien', 'Journaliste', 'Endineer'],
            'Programmation': ['aaaaa', 'bbbbb', 'ccccc'],
            'Production': ['ttttty', 'eeeeee', 'zzzzz'],
            'Information': ['yyyy', 'ggggg', 'nnnnnnn']
        };
        this.baseUrl = 'http://localhost/api';
    }
    ProfessionService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Erreur sur qlq chose.');
    };
    ProfessionService.prototype.getService = function (grade) {
        var grades = { 'Directeur': [this.branche, ['Directeur générale']],
            'Chef': [this.services, ['Chef de service']],
            'Employé': [this.services, this.fonctions[this.nomService]],
            'Stagiaire': [this.services, this.fonctions[this.nomService]]
        };
        return grades[grade][1];
    };
    ProfessionService.prototype.service = function (nService) {
        this.nomService = nService;
    };
    ProfessionService.prototype.getGrade = function (grade) {
        var grades = { 'Directeur': [this.branche, ['Directeur générale']],
            'Chef': [this.services, ['Chef de service']],
            'Employé': [this.services, this.fonctions[this.nomService]],
            'Stagiaire': [this.services, this.fonctions[this.nomService]]
        };
        return grades[grade][0];
    };
    /////////////verification Compte directeur
    ProfessionService.prototype.onVerifDirecteur = function (grade, nomService) {
        var _this = this;
        this.onVerifGrad(grade, nomService).subscribe(function (res) {
            if (res == '200') {
                _this.existDirecteur = true;
            }
            else if (res = '300') {
                _this.existDirecteur = false;
            }
        }, function (err) {
            _this.error = err;
        });
    };
    /////////////verification Compte chefs
    ProfessionService.prototype.verifChef = function (grade) {
        var _this = this;
        if (grade == "Chef") {
            var _loop_1 = function (i) {
                this_1.onVerifGrad("Chef", this_1.services[i]).subscribe(function (res) {
                    if (res == '200') {
                        _this.selectedChefExists[i] = true;
                    }
                    else if (res = '300') {
                        _this.selectedChefExists[i] = false;
                    }
                }, function (err) {
                    _this.error = err;
                });
                ;
            };
            var this_1 = this;
            for (var i = 0; i < this.services.length; i++) {
                _loop_1(i);
            }
        }
        else {
            this.selectedChefExists = [];
        }
    };
    ;
    /////////////poste chef full
    ProfessionService.prototype.fullChef = function () {
        var _this = this;
        for (var i = 0; i < this.services.length; i++) {
            this.onVerifGrad("Chef", this.services[i]).subscribe(function (res) {
                if (res == '200') {
                    _this.nbChef++;
                }
                if (_this.nbChef == _this.services.length) {
                    _this.isFullChef = true;
                }
            }, function (err) {
                _this.error = err;
            });
            ;
        }
    };
    ProfessionService.prototype.getSinglePersonneProf = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('id', id.toString());
        var profession;
        return this.http.get(this.baseUrl + "/singlePersonneProf", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            profession = res['data'];
            profession.diplome = res['diplomes'];
            profession.conges = res['conges'];
            return profession;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    /////////////verification Compte chef et directeur
    ProfessionService.prototype.onVerifGrad = function (grade, nomService) {
        var profession = new _models_professional_model__WEBPACK_IMPORTED_MODULE_2__["Professionnal"]('', '', '', '', nomService, '', grade, '');
        return this.http.post(this.baseUrl + "/verifGrad", { data: profession })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res['status'].toString();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    //////////////////////sendProfessionnal INfo
    ProfessionService.prototype.sendInfo = function (infoProf) {
        return this.http.post(this.baseUrl + "/storeProf", { data: infoProf })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            //this.currentId = res['data']['idEmp'] ;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ///////////////////////////upload CV
    ProfessionService.prototype.uploadCV = function (formdata, pathCV) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('id', pathCV.toString());
        return this.http.post(this.baseUrl + "/uploadCV", formdata, { params: params });
    };
    ProfessionService.prototype.updateProf = function (profession) {
        profession.diplome = [];
        console.log(profession);
        return this.http.put(this.baseUrl + "/updateProfDetails", { data: profession })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ProfessionService.prototype.reUploadCV = function (formdata, link) {
        return this.http.post(this.baseUrl + "/reUploadCV", formdata, { params: link });
    };
    ProfessionService.prototype.addConge = function (conge) {
        return this.http.post(this.baseUrl + "/addConge", { data: conge })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            //this.currentId = res['data']['idEmp'] ;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ProfessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProfessionService);
    return ProfessionService;
}());



/***/ }),

/***/ "./src/app/shared/compare-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/compare-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (c) {
        if (c.value === null || c.value.length == 0) {
            return null; // don't validate empty value
        }
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
    var CompareValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CompareValidatorDirective_1, multi: true }]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asus\Desktop\TVM\Personnes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map