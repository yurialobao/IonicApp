webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoPageModule", function() { return LocalizacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizacao__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalizacaoPageModule = /** @class */ (function () {
    function LocalizacaoPageModule() {
    }
    LocalizacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localizacao__["a" /* LocalizacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localizacao__["a" /* LocalizacaoPage */]),
            ],
        })
    ], LocalizacaoPageModule);
    return LocalizacaoPageModule;
}());

//# sourceMappingURL=localizacao.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalizacaoPage = /** @class */ (function () {
    function LocalizacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocalizacaoPage.prototype.onMaps = function () {
        this.navCtrl.push('MapaPage');
    };
    LocalizacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalizacaoPage');
    };
    LocalizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-localizacao',template:/*ion-inline-start:"C:\Users\aline\Documents\Trabalhos Faculdade\IonicApp\SamuApp\src\pages\localizacao\localizacao.html"*/'<!--\n  Generated template for the LocalizacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Localização</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <img class="logo" src="assets/imgs/samu.png" alt="">\n    </div>\n    <Div>\n        <button ion-button full color="danger" icon-end (click)="onMaps()">\n          Localização\n          <ion-icon name="pin"></ion-icon>\n        </button>\n        <ion-item>\n            <ion-label color="laranja" floating>Estado</ion-label>\n            <ion-select [(ngModel)]="uf">\n              </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Cidade</ion-label>\n            <ion-select [(ngModel)]="city">\n              </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Endereço</ion-label>\n            <ion-input type = "text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Bairro</ion-label>\n            <ion-input type = "text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="laranja" floating>Complemento</ion-label>\n            <ion-input type = "text"></ion-input>\n        </ion-item>\n\n    </Div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="danger">\n      <button ion-button full color="danger">Concluir</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\aline\Documents\Trabalhos Faculdade\IonicApp\SamuApp\src\pages\localizacao\localizacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LocalizacaoPage);
    return LocalizacaoPage;
}());

//# sourceMappingURL=localizacao.js.map

/***/ })

});
//# sourceMappingURL=1.js.map