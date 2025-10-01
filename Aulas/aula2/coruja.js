"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coruja = void 0;
var Coruja = /** @class */ (function () {
    function Coruja(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    Coruja.prototype.chirriar = function () {
        console.log('uhh ruhh!');
    };
    Coruja.prototype.comer = function (quantidade) {
        console.log("A coruja comeu ".concat(quantidade, "ratinhos."));
    };
    Coruja.prototype.voar = function (tempo) {
        console.log("A coruja voou por ".concat(tempo, "segundos."));
    };
    return Coruja;
}());
exports.Coruja = Coruja;
var corujaDoSenac = new Coruja('Gelson', 1);
