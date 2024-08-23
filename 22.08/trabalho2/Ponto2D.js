"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopiaPonto2D = exports.Ponto2DComCordenada = exports.Ponto2D = void 0;
var Ponto2D = /** @class */ (function () {
    function Ponto2D() {
        this.x = 0;
        this.y = 0;
    }
    Ponto2D.prototype.setPonto2D = function (X, Y) {
        this.x = X;
        this.y = Y;
    };
    Ponto2D.prototype.getX = function () {
        return this.x;
    };
    Ponto2D.prototype.getY = function () {
        return this.y;
    };
    Ponto2D.prototype.pontoToString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Ponto2D.prototype.equals = function (outroPonto) {
        if (this.x === outroPonto.x && this.y === outroPonto.y) {
            return true;
        }
        else {
            return false;
        }
    };
    Ponto2D.prototype.distancia = function (outroPonto) {
        return Math.sqrt(((Math.pow((outroPonto.x - this.x), 2)) + (Math.pow((outroPonto.y - this.y), 2))));
    };
    Ponto2D.prototype.clone = function () {
        var retorno = new Ponto2D();
        retorno.setPonto2D(this.x, this.y);
        return retorno;
    };
    return Ponto2D;
}());
exports.Ponto2D = Ponto2D;
var Ponto2DComCordenada = /** @class */ (function (_super) {
    __extends(Ponto2DComCordenada, _super);
    function Ponto2DComCordenada(X, Y) {
        var _this = _super.call(this) || this;
        _this.x = X;
        _this.y = Y;
        return _this;
    }
    Ponto2DComCordenada.prototype.alterarPonto = function (X, Y) {
        this.x = X;
        this.y = Y;
    };
    return Ponto2DComCordenada;
}(Ponto2D));
exports.Ponto2DComCordenada = Ponto2DComCordenada;
var CopiaPonto2D = /** @class */ (function (_super) {
    __extends(CopiaPonto2D, _super);
    function CopiaPonto2D(outroPonto2D) {
        var _this = _super.call(this) || this;
        _this.x = outroPonto2D.x;
        _this.y = outroPonto2D.y;
        return _this;
    }
    CopiaPonto2D.prototype.alterarPonto = function (outroPonto2D) {
        this.x = outroPonto2D.x;
        this.y = outroPonto2D.y;
    };
    return CopiaPonto2D;
}(Ponto2D));
exports.CopiaPonto2D = CopiaPonto2D;
var ponto1 = new Ponto2D();
console.log('0 0_', ponto1.pontoToString());
ponto1.setPonto2D(1, 2);
console.log('1 2_', ponto1.pontoToString());
var ponto2 = new Ponto2DComCordenada(2, 3);
console.log('2 3_', ponto2.pontoToString());
ponto2.alterarPonto(10, 10);
console.log('10 10_', ponto2.pontoToString());
var ponto3 = new CopiaPonto2D(ponto2);
console.log('10 10_', ponto3.pontoToString());
ponto3.alterarPonto(ponto1.clone()); // testa clone 
console.log('1 2_', ponto3.pontoToString());
console.log('true', ponto1.equals(ponto1));
console.log('0_', ponto1.distancia(ponto1));
