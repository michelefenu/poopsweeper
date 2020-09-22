(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/poopsweeper/poopsweeper/src/main.ts */"zUnb");


/***/ }),

/***/ "06R6":
/*!***********************************************************************!*\
  !*** ./src/minesweeper/components/scorepanel/scorepanel.component.ts ***!
  \***********************************************************************/
/*! exports provided: ScorepanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorepanelComponent", function() { return ScorepanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "SsIC");



class ScorepanelComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
    }
    newGame() {
        this.gameService.resetGame();
    }
}
ScorepanelComponent.ɵfac = function ScorepanelComponent_Factory(t) { return new (t || ScorepanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
ScorepanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScorepanelComponent, selectors: [["score-panel"]], inputs: { board: "board" }, decls: 7, vars: 3, consts: [[3, "click"]], template: function ScorepanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScorepanelComponent_Template_button_click_3_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board.availableFlags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board.emoji);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board.unrevealedCells);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-style: solid;\n  border-color: grey white white grey;\n  height: 50px;\n  margin-bottom: 10px;\n  position: relative;\n  text-align: center;\n}\n\ndiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: monospace;\n  font-size: 1.8em;\n  background: grey;\n  color: firebrick;\n  padding: 3px;\n}\n\ndiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 35px;\n}\n\ndiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  left: 20px;\n}\n\ndiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\n  right: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 35px;\n  margin: 7px;\n  padding-top: 3px;\n  font-size: 1.3em;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL3Njb3JlcGFuZWwvc2NvcmVwYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL3Njb3JlcGFuZWwvc2NvcmVwYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICBncmV5IHdoaXRlIHdoaXRlIGdyZXk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2IHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgY29sb3I6IGZpcmVicmljaztcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbmRpdiBzcGFuIHtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuZGl2IHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbGVmdDogMjBweDtcbn1cblxuZGl2IHNwYW46bGFzdC1vZi10eXBlIHtcbiAgICByaWdodDogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScorepanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-panel',
                templateUrl: './scorepanel.component.html',
                styleUrls: ['./scorepanel.component.scss']
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { board: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9N9O":
/*!***********************************************************!*\
  !*** ./src/minesweeper/components/grid/grid.component.ts ***!
  \***********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "SsIC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell/cell.component */ "eeyU");





function GridComponent_div_0_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reveal", function GridComponent_div_0_cell_1_Template_cell_reveal_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.handleReveal($event); })("flag", function GridComponent_div_0_cell_1_Template_cell_flag_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.handleFlag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cell", cell_r3);
} }
function GridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_div_0_cell_1_Template, 1, 1, "cell", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class GridComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
    }
    handleReveal(cell) {
        if (cell.mine) {
            this.gameService.gameOver();
        }
        else {
            this.gameService.floodReveal(cell);
            this.gameService.checkWin();
        }
    }
    handleFlag(cell) {
        this.gameService.flag(cell);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["grid"]], inputs: { grid: "grid" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "cell", "reveal", "flag", 4, "ngFor", "ngForOf"], [3, "cell", "reveal", "flag"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grid.cells);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__["CellComponent"]], styles: ["cell[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\ndiv[_ngcontent-%COMP%] {\n  display: table-row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRyxrQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IFxufVxuXG5kaXYgIHtcbiAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss']
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "JRZ0":
/*!*************************************************************!*\
  !*** ./src/minesweeper/components/board/board.component.ts ***!
  \*************************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scorepanel_scorepanel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scorepanel/scorepanel.component */ "06R6");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid/grid.component */ "9N9O");




class BoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["board"]], inputs: { board: "board" }, decls: 2, vars: 2, consts: [[3, "board"], [3, "grid"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "grid", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("board", ctx.board);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("grid", ctx.board.grid);
    } }, directives: [_scorepanel_scorepanel_component__WEBPACK_IMPORTED_MODULE_1__["ScorepanelComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]], styles: ["grid[_ngcontent-%COMP%] {\n  display: table;\n  border-width: 2px;\n  border-style: solid;\n  border-color: grey white white grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZ3JpZCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICBncmV5IHdoaXRlIHdoaXRlIGdyZXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss']
            }]
    }], function () { return []; }, { board: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KzLD":
/*!****************************!*\
  !*** ./src/models/grid.ts ***!
  \****************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "sYCi");

class Grid {
    constructor(rows, cols) {
        this.cells = new Array(rows);
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i] = new Array(cols);
            for (let j = 0; j < this.cells[i].length; j++) {
                this.cells[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__["Cell"](i, j);
            }
        }
    }
}


/***/ }),

/***/ "SsIC":
/*!**************************************************!*\
  !*** ./src/minesweeper/services/game.service.ts ***!
  \**************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/board */ "rlQ4");
/* harmony import */ var _models_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cell */ "sYCi");




class GameService {
    constructor() { }
    createBoard(rows, cols, mineNumber) {
        this.board = new _models_board__WEBPACK_IMPORTED_MODULE_1__["Board"](rows, cols, mineNumber);
        this.inizializeGame(mineNumber);
    }
    getBoard() {
        return this.board;
    }
    resetGame() {
        this.board.unrevealedCells = this.board.rows * this.board.cols;
        this.board.availableFlags = this.board.mines;
        for (let i = 0; i < this.board.rows; i++) {
            for (let j = 0; j < this.board.cols; j++) {
                this.board.grid.cells[i][j] = new _models_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](i, j);
            }
        }
        this.inizializeGame(this.board.mines);
    }
    // If there are no mine around
    floodReveal(cell) {
        if (!cell.flagged && !cell.revealed && !cell.mine) {
            cell.revealed = true;
            this.board.unrevealedCells--;
            if (!cell.neighbours) {
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        let x = cell.x + i;
                        let y = cell.y + j;
                        if (this.board.grid.cells[x] && this.board.grid.cells[x][y]) {
                            this.floodReveal(this.board.grid.cells[x][y]);
                        }
                    }
                }
            }
        }
    }
    checkWin() {
        if (this.board.unrevealedCells === this.board.mines) {
            for (let i = 0; i < this.board.rows; i++) {
                for (let j = 0; j < this.board.cols; j++) {
                    this.board.grid.cells[i][j].revealed = true;
                    this.board.grid.cells[i][j].flagged = false;
                    if (this.board.grid.cells[i][j].mine) {
                        this.board.grid.cells[i][j].cleaned = true;
                    }
                }
            }
            this.board.emoji = "🥳";
            console.log("YOU WIN!");
        }
    }
    gameOver() {
        for (let i = 0; i < this.board.rows; i++) {
            for (let j = 0; j < this.board.cols; j++) {
                this.board.grid.cells[i][j].revealed = true;
                this.board.grid.cells[i][j].flagged = false;
            }
        }
        this.board.emoji = "💩";
        console.log("YOU LOSE!");
    }
    flag(cell) {
        if (cell.flagged) {
            this.board.availableFlags++;
            cell.flagged = false;
        }
        else if (this.board.availableFlags > 0) {
            this.board.availableFlags--;
            cell.flagged = true;
        }
    }
    inizializeGame(mineNumber) {
        this.setmines(mineNumber);
        this.board.emoji = "😊";
        // Pre-count the numer of neighbours per cell
        for (let i = 0; i < this.board.rows; i++) {
            for (let j = 0; j < this.board.cols; j++) {
                this.board.grid.cells[i][j].neighbours = this.countNeighbours(this.board.grid.cells[i][j]);
            }
        }
    }
    setmines(n) {
        let availablePositions = [];
        for (let i = 0; i < this.board.rows; i++) {
            for (let j = 0; j < this.board.cols; j++) {
                availablePositions.push({ x: i, y: j });
            }
        }
        for (let i = 0; i < n; i++) {
            let index = Math.floor(Math.random() * availablePositions.length);
            let position = availablePositions[index];
            this.board.grid.cells[position.x][position.y].mine = true;
            availablePositions.splice(index, 1);
        }
    }
    countNeighbours(cell) {
        let neighbours = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let x = cell.x + i;
                let y = cell.y + j;
                if (this.board.grid.cells[x] && this.board.grid.cells[x][y] && this.board.grid.cells[x][y].mine) {
                    neighbours = neighbours + 1;
                }
            }
        }
        return neighbours;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _minesweeper_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../minesweeper/services/game.service */ "SsIC");
/* harmony import */ var _minesweeper_components_board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper/components/board/board.component */ "JRZ0");




class AppComponent {
    constructor(gameService) {
        this.gameService = gameService;
        gameService.createBoard(9, 9, 10);
        this.board = gameService.getBoard();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_minesweeper_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [[3, "board"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "board", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("board", ctx.board);
    } }, directives: [_minesweeper_components_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]], styles: ["board[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-style: outset;\n  border-color: lightgray;\n  background-color: lightgray;\n  padding: 10px;\n  display: table;\n  margin: 0 auto;\n  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n}\n\nbody[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFHQSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvYXJkIHtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _minesweeper_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _minesweeper_components_board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../minesweeper/components/board/board.component */ "JRZ0");
/* harmony import */ var _minesweeper_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../minesweeper/components/grid/grid.component */ "9N9O");
/* harmony import */ var _minesweeper_components_cell_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../minesweeper/components/cell/cell.component */ "eeyU");
/* harmony import */ var _minesweeper_components_scorepanel_scorepanel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../minesweeper/components/scorepanel/scorepanel.component */ "06R6");
/* harmony import */ var _minesweeper_services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../minesweeper/services/game.service */ "SsIC");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _minesweeper_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _minesweeper_components_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
        _minesweeper_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
        _minesweeper_components_cell_cell_component__WEBPACK_IMPORTED_MODULE_5__["CellComponent"],
        _minesweeper_components_scorepanel_scorepanel_component__WEBPACK_IMPORTED_MODULE_6__["ScorepanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _minesweeper_components_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
                    _minesweeper_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
                    _minesweeper_components_cell_cell_component__WEBPACK_IMPORTED_MODULE_5__["CellComponent"],
                    _minesweeper_components_scorepanel_scorepanel_component__WEBPACK_IMPORTED_MODULE_6__["ScorepanelComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [
                    _minesweeper_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eeyU":
/*!***********************************************************!*\
  !*** ./src/minesweeper/components/cell/cell.component.ts ***!
  \***********************************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2, a3) { return { "revealed": a0, "flagged": a1, "mine": a2, "cleaned": a3 }; };
class CellComponent {
    constructor() {
        this.reveal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (!this.cell.mine) {
            this.cell.content = this.cell.neighbours ? this.cell.neighbours + '' : '';
        }
        switch (this.cell.neighbours) {
            case 1:
                this.textStyle = { 'color': 'blue' };
                break;
            case 2:
                this.textStyle = { 'color': 'green' };
                break;
            case 3:
                this.textStyle = { 'color': 'red' };
                break;
            case 4:
                this.textStyle = { 'color': 'darkblue' };
                break;
            default:
                break;
        }
    }
    handleReveal() {
        if (!this.cell.flagged) {
            this.reveal.emit(this.cell);
        }
    }
    handleFlag() {
        this.flag.emit(this.cell);
        return false;
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellComponent, selectors: [["cell"]], inputs: { cell: "cell" }, outputs: { reveal: "reveal", flag: "flag" }, decls: 2, vars: 8, consts: [[3, "ngClass", "ngStyle", "click", "contextmenu"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CellComponent_Template_button_click_0_listener() { return ctx.handleReveal(); })("contextmenu", function CellComponent_Template_button_contextmenu_0_listener() { return ctx.handleFlag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx.cell.revealed, ctx.cell.flagged, ctx.cell.mine, ctx.cell.cleaned))("ngStyle", ctx.textStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cell.revealed ? ctx.cell.content : "", "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["@charset \"UTF-8\";\nbutton[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  background-color: darkgrey;\n  outline: none;\n  cursor: pointer;\n  font-family: monospace;\n  font-size: 1em;\n  font-weight: bold;\n  vertical-align: top;\n  position: relative;\n}\nbutton.revealed[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\nbutton.revealed.mine[_ngcontent-%COMP%] {\n  background-color: burlywood;\n}\nbutton.revealed.mine[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCA9\";\n  padding: 0 -3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  transform: translateX(-50%) translateY(-50%);\n  font-size: 1.1em;\n}\nbutton.revealed.cleaned[_ngcontent-%COMP%] {\n  background-color: green;\n}\nbutton.flagged[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDEA9\";\n  padding: 0 -3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  transform: translateX(-50%) translateY(-50%);\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taW5lc3dlZXBlci9jb21wb25lbnRzL2NlbGwvY2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNBO0VBQ0ksMkJBQUE7QUFFSjtBQUNBO0VBQ0ksMkJBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNBO0VBQ0ksdUJBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvbWluZXN3ZWVwZXIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uLnJldmVhbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbmJ1dHRvbi5yZXZlYWxlZC5taW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG59XG5cbmJ1dHRvbi5yZXZlYWxlZC5taW5lOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfwn5KpJztcbiAgICBwYWRkaW5nOiAwIC0zcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBmb250LXNpemU6MS4xZW07XG59XG5cbmJ1dHRvbi5yZXZlYWxlZC5jbGVhbmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuYnV0dG9uLmZsYWdnZWQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogJ/CfmqknO1xuICAgIHBhZGRpbmc6IDAgLTNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGZvbnQtc2l6ZToxLjFlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cell',
                templateUrl: './cell.component.html',
                styleUrls: ['./cell.component.scss']
            }]
    }], function () { return []; }, { cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reveal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], flag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "rlQ4":
/*!*****************************!*\
  !*** ./src/models/board.ts ***!
  \*****************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "KzLD");

class Board {
    constructor(rows, cols, mines) {
        this.rows = rows;
        this.cols = cols;
        this.unrevealedCells = rows * cols;
        this.mines = mines;
        this.availableFlags = mines;
        this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](rows, cols);
    }
}


/***/ }),

/***/ "sYCi":
/*!****************************!*\
  !*** ./src/models/cell.ts ***!
  \****************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map