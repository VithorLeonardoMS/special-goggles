"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaga = void 0;
var Vaga = /** @class */ (function () {
    function Vaga(numero) {
        this.numero = numero;
        this.livre = true;
    }
    Vaga.prototype.ocupa = function () {
        this.livre = false;
    };
    Vaga.prototype.desocupa = function () {
        this.livre = true;
    };
    return Vaga;
}());
exports.Vaga = Vaga;
