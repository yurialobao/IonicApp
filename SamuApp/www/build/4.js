webpackJsonp([4],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroPage.prototype.cancelar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Lumahay Uruguai\Desktop\Yuri\Ionic Projects\IonicApp\SamuApp\src\pages\cadastro\cadastro.html"*/'<!--\n\n  Generated template for the CadastroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <img class="logo" src="assets/imgs/samu.png" alt="">\n\n    </div>\n\n    <div>\n\n      <ion-item>\n\n        <br><br>\n\n       <ion-label color="laranja">Nome</ion-label>\n\n       <ion-input type = "text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <br><br>\n\n       <ion-label color="laranja">CPF</ion-label>\n\n       <ion-input type = "text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="laranja" >Nascimento</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="laranja">Sexo</ion-label>\n\n        <ion-select [(ngModel)]="gender">\n\n          <ion-option value="f">Feminino</ion-option>\n\n          <ion-option value="m">Masculino</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label color="laranja">Senha</ion-label>\n\n          <ion-input type = "text" placeholder="letras e numeros"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <br>\n\n    <br>\n\n    <button ion-button full color="danger">Salvar</button>\n\n    <button ion-button full color="danger" (click)="cancelar()">Cancelar</button>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="danger">\n\n\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Lumahay Uruguai\Desktop\Yuri\Ionic Projects\IonicApp\SamuApp\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ })

});
//# sourceMappingURL=4.js.map