webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
            ],
        })
    ], DetailPageModule);
    return DetailPageModule;
}());

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
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
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    //private url = "http://192.168.43.65/ionicuas/web/";
    function DetailPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.images = [];
        //private url = "http://localhost:8080/";
        this.url = "https://webmobile99.000webhostapp.com/yiiweb/ionicuas/web/";
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        //console.log(this.navParams.get("record"));
        if (this.navParams.get("record")) {
            this.item = this.navParams.get("record");
            this.id = this.item.wis_id;
            this.lat = this.item.wis_lat;
            this.long = this.item.wis_long;
            this.name = this.item.wis_nama;
            this.ket = this.item.wis_keterangan;
            this.kab = this.item.kab_nama;
            this.img = this.item.wis_id + '.' + this.item.wis_gambar;
            this.tampilMap(this.lat, this.long, this.name);
            this.loadGallery();
        }
    };
    DetailPage.prototype.tampilMap = function (lat, long, name) {
        var _this = this;
        var locationOptions = { timeout: 20000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var myLatlng = new google.maps.LatLng(lat, long);
            var options = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById('akupeta'), options);
            _this.buatMarker(name);
            //document.getElementById('spin').visibility = 'hidden';
        }, function (error) {
            console.log(error);
        }, locationOptions);
    };
    DetailPage.prototype.buatMarker = function (name) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var konten = "<h5 style='color:rgb(0, 128, 248)'>" + name + "</h5>";
        var infoWindow = new google.maps.InfoWindow({
            content: konten,
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    // load data
    DetailPage.prototype.loadGallery = function () {
        var _this = this;
        this.http
            .get(this.url + 'api/get-gallery?id=' + this.id)
            .subscribe(function (data) {
            console.dir(data);
            _this.images = data;
        }, function (error) {
            console.dir(error);
        });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"d:\prg\ionic\ionicuas\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12 col-md-8 push-md-4 style="padding-right: 0;">\n      <div id="akupeta" style="width:100%;height:450px;">peta</div>\n    </ion-col>\n    <ion-col col-12 col-md-4 pull-md-8 style="max-height: 450px; overflow: auto;">\n      <div class="">\n        <img src="{{url}}gambar/wisata/{{img}}" style="width: 100%;">\n      </div>\n      <div class="lokasi-judul">\n        <h4>{{name}}</h4>\n      </div>\n      <div class="detail">\n        <p>{{ket}}</p>\n        <hr>\n        <p>\n          <b>{{kab}}, DIY</b>\n        </p>\n        <p>Latitude : {{lat}}</p>\n        <p>Longitude : {{long}}</p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <hr>\n  <ion-row>\n    <ion-col col-12>\n      <h3>Gallery</h3>\n      <ion-row *ngIf="images.length">\n        <ion-col col-6 col-md-3 *ngFor="let data of images">\n          <img src="{{url}}gambar/gallery/{{id}}_{{data.gl_id}}.{{data.gl_gambar}}" style="width: 100%;">\n          <b>{{data.gl_nama}}</b>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 *ngIf="!images.length">Data gallery tidak ditemukan</ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"d:\prg\ionic\ionicuas\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map