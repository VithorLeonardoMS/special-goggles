"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacar = function (guerreiro) {
        guerreiro.receberDano(this.forca);
        console.log("".concat(guerreiro.nome, " recebeu ").concat(this.forca, "de dano"));
    };
    Monstro.prototype.receberDano = function (dano) {
        this.saude = this.saude - dano;
    };
    Monstro.prototype.status = function () {
        console.log("".concat(this.nome, " t\u00EAm ").concat(this.saude, " de sa\u00FAde e ").concat(this.forca, " de for\u00E7a"));
    };
    return Monstro;
}());
exports.Monstro = Monstro;
