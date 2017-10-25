webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n.footer {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 768px;\n  height: 50px;\n}\n.footer button {\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".pages {\n  width: 627px;\n  height: 1000px;\n  margin-bottom: 50px;\n}\nimg {\n    max-width: 768px;\n}\nbutton {\n  position: absolute;\n  background-color: transparent;\n  border: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "button {\n    margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "\n<app-content [content]=\"page\" [btns]=\"btns\"></app-content>\n<div class=\"footer\">\n  <button class=\"btn btn-success\" *ngFor=\"let page of pages; index as i\" (click)=\"changePage(i)\">{{ page.pageId }} </button>\n</div>\n\n\n\n"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<div class=\"pages\" >\n  <img [src]=\"content.bgPath\">\n  <button \n  *ngFor=\"let btn of btns\" \n  [ngStyle]=\"{'background-color': btn.bgcolor,'left': btn.left,'top': btn.top,'width': btn.width,'height':btn.height}\"\n  (click)=\"playAudio(btn.mp3Path)\"></button>\n</div>\n "

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zhijianhuang/Documents/study/angular2/05 Components  Databinding Deep Dive/attached_files/059 Splitting Apps into Components/cmp-databinding-start/src/main.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.page = {
            pageId: 1,
            bgPath: "http://oyda7feie.bkt.clouddn.com/17-10-25/86357991.jpg",
        };
        this.btns = [
            {
                btnId: 1,
                left: '105px',
                top: '26px',
                width: '150px',
                height: '75px',
                mp3Path: 'http://oyda7feie.bkt.clouddn.com/01hello.mp3'
            },
            {
                btnId: 2,
                left: '467px',
                top: '143px',
                width: '135px',
                height: '45px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/02hello-hi.mp3'
            },
            {
                btnId: 3,
                left: '128px',
                top: '216px',
                width: '161px',
                height: '54px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/03lets-talk.mp3'
            },
            {
                btnId: 4,
                left: '247px',
                top: '290px',
                width: '114px',
                height: '45px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/04hello.mp3'
            },
            {
                btnId: 5,
                left: '467px',
                top: '298px',
                width: '124px',
                height: '54px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/05hi.mp3'
            },
            {
                btnId: 6,
                left: '226px',
                top: '589px',
                width: '135px',
                height: '45px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/06goodbye.mp3'
            },
            {
                btnId: 7,
                left: '565px',
                top: '791px',
                width: '135px',
                height: '45px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/07goodbye.mp3'
            },
            {
                btnId: 8,
                left: '317px',
                top: '871px',
                width: '195px',
                height: '45px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/08good-morning.mp3'
            },
            {
                btnId: 9,
                left: '543px',
                top: '1089px',
                width: '195px',
                height: '45px',
                mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/09good-morning.mp3'
            },
        ];
        this.pages = [
            {
                pageId: 1,
                bgPath: 'http://oyda7feie.bkt.clouddn.com/17-10-25/86357991.jpg',
                btns: [
                    {
                        btnId: 1,
                        left: '105px',
                        top: '26px',
                        width: '150px',
                        height: '75px',
                        mp3Path: 'http://oyda7feie.bkt.clouddn.com/01hello.mp3'
                    },
                    {
                        btnId: 2,
                        left: '467px',
                        top: '143px',
                        width: '135px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/02hello-hi.mp3'
                    },
                    {
                        btnId: 3,
                        left: '128px',
                        top: '216px',
                        width: '161px',
                        height: '54px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/03lets-talk.mp3'
                    },
                    {
                        btnId: 4,
                        left: '247px',
                        top: '290px',
                        width: '114px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/04hello.mp3'
                    },
                    {
                        btnId: 5,
                        left: '467px',
                        top: '298px',
                        width: '124px',
                        height: '54px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/05hi.mp3'
                    },
                    {
                        btnId: 6,
                        left: '226px',
                        top: '589px',
                        width: '135px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/06goodbye.mp3'
                    },
                    {
                        btnId: 7,
                        left: '565px',
                        top: '791px',
                        width: '135px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/07goodbye.mp3'
                    },
                    {
                        btnId: 8,
                        left: '317px',
                        top: '871px',
                        width: '195px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/08good-morning.mp3'
                    },
                    {
                        btnId: 9,
                        left: '543px',
                        top: '1089px',
                        width: '195px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/09good-morning.mp3'
                    },
                ]
            },
            {
                pageId: 2,
                bgPath: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509524719&di=ac316de89a09c2a7ef787eb26c9cf168&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0b7b02087bf40ad1cd0f99c55d2c11dfa9ecce29.jpg',
                btns: [
                    {
                        btnId: 1,
                        left: '105px',
                        top: '26px',
                        width: '150px',
                        height: '75px',
                        mp3Path: 'http://oyda7feie.bkt.clouddn.com/01hello.mp3'
                    },
                    {
                        btnId: 2,
                        left: '467px',
                        top: '143px',
                        width: '135px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/02hello-hi.mp3'
                    },
                    {
                        btnId: 3,
                        left: '128px',
                        top: '216px',
                        width: '161px',
                        height: '54px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/03lets-talk.mp3'
                    },
                    {
                        btnId: 4,
                        left: '247px',
                        top: '290px',
                        width: '114px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/04hello.mp3'
                    },
                    {
                        btnId: 5,
                        left: '467px',
                        top: '298px',
                        width: '124px',
                        height: '54px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/05hi.mp3'
                    },
                    {
                        btnId: 6,
                        left: '226px',
                        top: '589px',
                        width: '135px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/06goodbye.mp3'
                    },
                    {
                        btnId: 7,
                        left: '565px',
                        top: '791px',
                        width: '135px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/07goodbye.mp3'
                    },
                    {
                        btnId: 8,
                        left: '317px',
                        top: '871px',
                        width: '195px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/08good-morning.mp3'
                    },
                    {
                        btnId: 9,
                        left: '543px',
                        top: '1089px',
                        width: '195px',
                        height: '45px',
                        mp3Path: 'http://oydjxe8fa.bkt.clouddn.com/mp3/school/g1/1/unit1/page2/09good-morning.mp3'
                    },
                ]
            },
        ];
    }
    AppComponent.prototype.changePage = function (id) {
        this.page = this.pages[id];
        this.btns = this.pages[id].btns;
        console.log(this.pages[id]);
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(147),
        styles: [__webpack_require__(143)]
    })
], AppComponent);

//# sourceMappingURL=/Users/zhijianhuang/Documents/study/angular2/05 Components  Databinding Deep Dive/attached_files/059 Splitting Apps into Components/cmp-databinding-start/src/app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_content_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages_component__["a" /* PagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/zhijianhuang/Documents/study/angular2/05 Components  Databinding Deep Dive/attached_files/059 Splitting Apps into Components/cmp-databinding-start/src/app.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    // bg = 'url(http://oyda7feie.bkt.clouddn.com/17-10-25/86357991.jpg)';
    // btns = [
    //       {
    //         id: 1,
    //         left: '79px',
    //         top: '20px',
    //         width: '135px',
    //         height: '75px',
    //         mp3Path: '../../assets/mp3/01hello.mp3'
    //       },
    //       {
    //         id: 2,
    //         left: '372px',
    //         top: '115px',
    //         width: '135px',
    //         height: '45px',
    //         mp3Path: '../../assets/mp3/02hello-hi.mp3'
    //       },
    // ]
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.playAudio = function (name) {
        var audio = new Audio(name);
        audio.play();
    };
    return ContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ContentComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ContentComponent.prototype, "btns", void 0);
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__(148),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

//# sourceMappingURL=/Users/zhijianhuang/Documents/study/angular2/05 Components  Databinding Deep Dive/attached_files/059 Splitting Apps into Components/cmp-databinding-start/src/content.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    return PagesComponent;
}());
PagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-pages',
        template: __webpack_require__(149),
        styles: [__webpack_require__(145)]
    }),
    __metadata("design:paramtypes", [])
], PagesComponent);

//# sourceMappingURL=/Users/zhijianhuang/Documents/study/angular2/05 Components  Databinding Deep Dive/attached_files/059 Splitting Apps into Components/cmp-databinding-start/src/pages.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/zhijianhuang/Documents/study/angular2/05 Components  Databinding Deep Dive/attached_files/059 Splitting Apps into Components/cmp-databinding-start/src/environment.js.map

/***/ })

},[183]);
//# sourceMappingURL=main.bundle.js.map