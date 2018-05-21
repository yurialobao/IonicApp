webpackJsonp([2],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosPageModule", function() { return DadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dados__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DadosPageModule = /** @class */ (function () {
    function DadosPageModule() {
    }
    DadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dados__["a" /* DadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dados__["a" /* DadosPage */]),
            ],
        })
    ], DadosPageModule);
    return DadosPageModule;
}());

//# sourceMappingURL=dados.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the DadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DadosPage = /** @class */ (function () {
    function DadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DadosPage.prototype.continuar = function () {
        this.navCtrl.push('LocalizacaoPage');
    };
    DadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DadosPage');
    };
    DadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dados',template:/*ion-inline-start:"C:\Users\aline\Documents\Trabalhos Faculdade\IonicApp\SamuApp\src\pages\dados\dados.html"*/'<!--\n  Generated template for the DadosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dados da Vítima</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <img class="logo" src="assets/imgs/samu.png" alt="">\n    </div>\n    <div>\n        <ion-item>\n            <ion-label color="laranja" floating>Sexo</ion-label>\n            <ion-select [(ngModel)]="genderVitima">\n              <ion-option value="f">Feminino</ion-option>\n              <ion-option value="m">Masculino</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Faixa Etária</ion-label>\n              <ion-select [(ngModel)]="faixaEtaria">\n                <ion-option>0 - 1 anos</ion-option>\n                <ion-option>2 - 4 anos</ion-option>\n                <ion-option>5 - 9 anos</ion-option>\n                <ion-option>10 - 19 anos</ion-option>\n                <ion-option>20 - 59 anos</ion-option>\n                <ion-option>>60 anos</ion-option>\n              </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="laranja" floating>Queixa Principal</ion-label>\n          <ion-select [(ngModel)]="queixa">\n                <ion-option>Acidente de trânsito - atropelamento</ion-option>\n                <ion-option>Acidente de trânsito - automóvel</ion-option>\n                <ion-option>Acidente de trânsito - motocicleta</ion-option>\n                <ion-option>Uso de drogas ilícitas</ion-option>\n                <ion-option>Agressão</ion-option>\n                <ion-option>Convulsão</ion-option>\n                <ion-option>Crise nervosa/Crise de ansiedade</ion-option>\n                <ion-option>Dispneia</ion-option>\n                <ion-option>Dor abdominal</ion-option>\n                <ion-option>Dor precordial</ion-option>\n                <ion-option>Embriaguez</ion-option>\n                <ion-option>Ferimento contuso</ion-option>\n                <ion-option>Hipoglicemia</ion-option>\n                <ion-option>Intoxicação exógena</ion-option>\n                <ion-option>Mal-estar</ion-option>\n                <ion-option>PCR</ion-option>\n                <ion-option>Queda (inespecífica)</ion-option>\n                <ion-option>Queda da própria altura</ion-option>\n                <ion-option>Síncope</ion-option>\n                <ion-option>Suspeita de AVC</ion-option>\n                <ion-option>Tentativa de suicídio</ion-option>\n                <ion-option>Trauma (inespecífico)</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Vítima Consciente?</ion-label>\n            <ion-select [(ngModel)]="consciente">\n              <ion-option value="s">Sim</ion-option>\n              <ion-option value="n">Não</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Sangramento no Local?</ion-label>\n            <ion-select [(ngModel)]="consciente">\n              <ion-option value="s">Sim</ion-option>\n              <ion-option value="n">Não</ion-option>\n            </ion-select>\n        </ion-item>\n\n    </div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="danger">\n      <button ion-button full color="danger" (click)="continuar()">continuar</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\aline\Documents\Trabalhos Faculdade\IonicApp\SamuApp\src\pages\dados\dados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DadosPage);
    return DadosPage;
}());

//# sourceMappingURL=dados.js.map

/***/ })

});
//# sourceMappingURL=2.js.map