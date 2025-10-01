"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo, forca) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = 100;
    }
    Guerreiro.prototype.atacar = function (myMonster) {
        myMonster.receberDano(this.forca);
        console.log("".concat(myMonster.nome, " recebeu ").concat(this.forca, "de dano"));
    };
    Guerreiro.prototype.receberDano = function (dano) {
        this.saude = this.saude - dano;
    };
    Guerreiro.prototype.status = function () {
        console.log("".concat(this.nome, " t\u00EAm ").concat(this.saude, " de sa\u00FAde e ").concat(this.forca, " de for\u00E7a"));
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
