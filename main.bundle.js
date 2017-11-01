webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cell {\n    height: 45px;\n    width: 45px;\n    margin: 5px;\n    padding: 0;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.error {\n    border: thin red solid;\n}\n\nbutton {\n    font-weight: bold !important;\n    color: black !important;\n}\n\n.animate-me {\n    -webkit-animation: 0.3s infinite bgcolorchange;\n            animation: 0.3s infinite bgcolorchange;\n}\n\n@-webkit-keyframes bgcolorchange {\n    0% {\n        background-color: yellow;\n        color: blue;\n    }\n    33% {\n        background-color: blue;\n        color: red;\n    }\n    66% {\n        background-color: red;\n        color: green;\n    }\n    100% {\n        background-color: green;\n        color: black;\n    }\n}\n\n@keyframes bgcolorchange {\n    0% {\n        background-color: yellow;\n        color: blue;\n    }\n    33% {\n        background-color: blue;\n        color: red;\n    }\n    66% {\n        background-color: red;\n        color: green;\n    }\n    100% {\n        background-color: green;\n        color: black;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <h1 class=\"text-center\">Create New Game</h1>\n            <hr>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label for=\"columns\">Row Count</label>\n                    <label>(Min 5, Max 10)</label>\n                    <input id=\"columns\" [class.error]=\"!columns || columns <= 4 || columns > 10\" class=\"form-control\" type=\"number\" [(ngModel)]=\"columns\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label for=\"rows\">Column Count (Min 5, Max 10)</label>\n                    <input id=\"rows\" [class.error]=\"!rows || rows <= 4 || rows > 10\" class=\"form-control\" type=\"number\" [(ngModel)]=\"rows\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label for=\"mines\">Mine Count (Min 1, Max {{rows * columns - 1}})</label>\n                    <input id=\"mines\" [class.error]=\"!mines || mines == 0\" class=\"form-control\" type=\"number\" [(ngModel)]=\"mines\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <button class=\"btn btn-lg btn-primary col-lg-12\" (click)=\"createMineSweeper()\" [disabled]=\"(!rows || rows <= 4 || rows > 10) || (!columns || columns <= 4 || columns > 10) || (!mines || mines == 0 || rows * columns < mines)\">\n                        Create Mine Sweeper\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <ul>\n                    <li>Start by clicking a random unverified cell to check if it's a mine.</li>\n                    <li>Create a suspicious cell if you are unsure if it's a mine.</li>\n                    <li>To do this hold the Shift button whilst clicking the cell to mark it suspicious.</li>\n                    <li>Refer following legends for different cell types -</li>\n                </ul>\n            </div>\n            <div class=\"row\" class=\"text-center\">\n                <div class=\"col-lg-3\">\n                    <button id=\"unverified\" class=\"btn btn-sm btn-primary cell\">&#10068;</button>\n                    <label for=\"unverified\">unverified cell</label>\n                </div>\n                <div class=\"col-lg-3\">\n                    <button id=\"checked\" class=\"btn btn-sm btn-success cell\">&#10112;</button>\n                    <label for=\"checked\">cell with 1 mine around</label>\n                </div>\n                <div class=\"col-lg-3\">\n                    <button id=\"suspicious\" class=\"btn btn-sm btn-warning cell\">&#10069;</button>\n                    <label for=\"suspicious\">suspicious cell</label>\n                </div>\n                <div class=\"col-lg-3\">\n                    <button id=\"mine\" class=\"btn btn-sm btn-danger cell\">&#x2718;</button>\n                    <label for=\"mine\">cell with mine</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-8 text-center\">\n            <h1 class=\"title text-center\" \n                [class.text-danger]=\"message === 'Mine Exploded!!!!!'\" \n                [class.text-success]=\"!tilesRemaining\">\n                {{message}}\n            </h1>\n            <br>\n            <div *ngFor=\"let cellRow of mineSweeper?.cells\">\n                <button *ngFor=\"let cell of cellRow\" \n                    class=\"btn btn-primary cell\" #btn \n                    [disabled]=\"message === 'Mine Exploded!!!!!'\" \n                    [class.btn-success]=\"!cell.isHidden && !cell.isMine && !cell.suspicious\"\n                    [class.btn-danger]=\"!cell.isHidden && cell.isMine && !cell.suspicious\"\n                    [class.btn-warning]=\"cell.suspicious\"\n                    [class.animate-me]=\"!tilesRemaining\"\n                    (click)=\"updateGame($event, cell)\"\n                    [innerHtml]=\"cell.label\">\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mine_sweeper__ = __webpack_require__("../../../../../src/app/models/mine-sweeper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.message = "Welcome To Minesweeper Game!!";
        this.rows = 10;
        this.columns = 10;
        this.tilesRemaining = 0;
        this.mines = 10;
        this.mineSweeper = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("rows")) {
            this.rows = parseInt(sessionStorage.getItem("rows"));
        }
        if (sessionStorage.getItem("columns")) {
            this.columns = parseInt(sessionStorage.getItem("columns"));
        }
        if (sessionStorage.getItem("mines")) {
            this.mines = parseInt(sessionStorage.getItem("mines"));
        }
        if (this.rows && this.columns && this.mines) {
            this.mineSweeper = new __WEBPACK_IMPORTED_MODULE_1__models_mine_sweeper__["a" /* MineSweeper */](this.mines, this.rows, this.columns);
            this.mineSweeper.initialise();
            this.tilesRemaining = this.rows * this.columns - this.mines;
            this.message = "Remaining tiles - " + this.tilesRemaining;
        }
    };
    AppComponent.prototype.createMineSweeper = function () {
        sessionStorage.setItem('rows', this.rows.toString());
        sessionStorage.setItem('columns', this.columns.toString());
        sessionStorage.setItem('mines', this.mines.toString());
        this.mineSweeper = new __WEBPACK_IMPORTED_MODULE_1__models_mine_sweeper__["a" /* MineSweeper */](this.mines, this.rows, this.columns);
        this.mineSweeper.initialise();
        this.tilesRemaining = this.rows * this.columns - this.mines;
        this.message = "Remaining tiles - " + this.tilesRemaining;
    };
    AppComponent.prototype.updateGame = function (event, cell) {
        if (!cell.isHidden) {
            return;
        }
        if (event.shiftKey) {
            cell.suspicious = true;
            cell.label = "&#10069;";
            return;
        }
        cell.suspicious = false;
        cell.isHidden = false;
        if (cell.isMine) {
            cell.label = "&#x2718;";
            this.message = "Mine Exploded!!!!!";
            this.mineSweeper.cells.forEach(function (cellRow) {
                cellRow.forEach(function (cell) {
                    if (cell.isMine) {
                        cell.isHidden = false;
                        cell.label = "&#x2718;";
                    }
                });
            });
        }
        else {
            var mineCount = 0;
            var colNumber = cell.xId;
            var rowNumber = cell.yId;
            if (this.mineSweeper.cells[rowNumber - 1]) {
                if (this.mineSweeper.cells[rowNumber - 1][colNumber - 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber - 1][colNumber - 1].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber - 1][colNumber]) {
                    mineCount = this.mineSweeper.cells[rowNumber - 1][colNumber].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber - 1][colNumber + 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber - 1][colNumber + 1].isMine ? ++mineCount : mineCount;
                }
            }
            if (this.mineSweeper.cells[rowNumber][colNumber - 1]) {
                mineCount = this.mineSweeper.cells[rowNumber][colNumber - 1].isMine ? ++mineCount : mineCount;
            }
            if (this.mineSweeper.cells[rowNumber][colNumber + 1]) {
                mineCount = this.mineSweeper.cells[rowNumber][colNumber + 1].isMine ? ++mineCount : mineCount;
            }
            if (this.mineSweeper.cells[rowNumber + 1]) {
                if (this.mineSweeper.cells[rowNumber + 1][colNumber - 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber + 1][colNumber - 1].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber + 1][colNumber]) {
                    mineCount = this.mineSweeper.cells[rowNumber + 1][colNumber].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber + 1][colNumber + 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber + 1][colNumber + 1].isMine ? ++mineCount : mineCount;
                }
            }
            cell.label = this.getMineCount(mineCount);
            --this.tilesRemaining;
            this.message = this.tilesRemaining ? "Remaining tiles - " + this.tilesRemaining : "Level Cleared!!";
        }
    };
    AppComponent.prototype.getMineCount = function (count) {
        var label = "";
        switch (count) {
            case 0:
                label = "&#10061;";
                break;
            case 1:
                label = "&#10112;";
                break;
            case 2:
                label = "&#10113;";
                break;
            case 3:
                label = "&#10114;";
                break;
            case 4:
                label = "&#10115;";
                break;
            case 5:
                label = "&#10116;";
                break;
            case 6:
                label = "&#10117;";
                break;
            case 7:
                label = "&#10118;";
                break;
            case 8:
                label = "&#10118;";
                break;
            default:
                break;
        }
        return label;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var Cell = (function () {
    function Cell(xId, yId, isMine) {
        if (typeof xId !== "number") {
            console.error("Invalid id");
        }
        if (typeof yId !== "number") {
            console.error("Invalid id");
        }
        this._xId = xId;
        this._yId = yId;
        this._isMine = isMine;
        this._isHidden = true;
        this.label = "&#10068;";
    }
    Object.defineProperty(Cell.prototype, "xId", {
        get: function () {
            return this._xId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "yId", {
        get: function () {
            return this._yId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (isHidden) {
            this._isHidden = isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "isMine", {
        get: function () {
            return this._isMine;
        },
        set: function (isMine) {
            this._isMine = isMine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (v) {
            this._label = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "suspicious", {
        get: function () {
            return this._suspicious;
        },
        set: function (suspicious) {
            this._suspicious = suspicious;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());

//# sourceMappingURL=cell.js.map

/***/ }),

/***/ "../../../../../src/app/models/mine-sweeper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineSweeper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__("../../../../../src/app/models/cell.ts");

var MineSweeper = (function () {
    function MineSweeper(mineCount, xDimention, yDimention) {
        if (xDimention === void 0) { xDimention = 10; }
        if (yDimention === void 0) { yDimention = 10; }
        this._mineCount = mineCount;
        this._xDimention = xDimention;
        this._yDimention = yDimention;
        this._cells = [];
    }
    Object.defineProperty(MineSweeper.prototype, "isInitialised", {
        get: function () {
            return this._isInitialised;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MineSweeper.prototype, "mineCount", {
        get: function () {
            return this._mineCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MineSweeper.prototype, "xDimention", {
        get: function () {
            return this._xDimention;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MineSweeper.prototype, "yDimention", {
        get: function () {
            return this._yDimention;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MineSweeper.prototype, "cells", {
        get: function () {
            return this._cells;
        },
        set: function (v) {
            this._cells = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * initialise
     * initialises the mine sweeper by creating cells with provided configuration
     */
    MineSweeper.prototype.initialise = function () {
        for (var yIndex = 0; yIndex < this._yDimention; yIndex++) {
            this._cells[yIndex] = [];
            for (var xIndex = 0; xIndex < this._xDimention; xIndex++) {
                this._cells[yIndex].push(new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](xIndex, yIndex, false));
            }
        }
        this.setMines();
    };
    MineSweeper.prototype.setMines = function () {
        var mineCount = 0;
        while (mineCount !== this._mineCount) {
            var randomX = Math.floor(Math.random() * 100);
            while (randomX >= this._xDimention) {
                randomX = Math.floor(Math.random() * 100);
            }
            var randomY = Math.floor(Math.random() * 100);
            while (randomY >= this._yDimention) {
                randomY = Math.floor(Math.random() * 100);
            }
            if (this.cells[randomX][randomY] && !this.cells[randomX][randomY].isMine) {
                this.cells[randomX][randomY].isMine = true;
                ++mineCount;
            }
        }
    };
    MineSweeper.getCell = function (x, y, cells) {
        return cells.find(function (cell) {
            return cell.xId === x && cell.yId === y;
        });
    };
    return MineSweeper;
}());

//# sourceMappingURL=mine-sweeper.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map