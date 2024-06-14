"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, peso, raca) {
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
    }
    Cachorro.prototype.latir = function () {
        console.log('Au au!');
    };
    Cachorro.prototype.comer = function (quantidade) {
        console.log("O cachorro comeu ".concat(quantidade, " coxinhas."));
    };
    return Cachorro;
}());
exports.Cachorro = Cachorro;
