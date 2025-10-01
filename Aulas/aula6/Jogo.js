"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var rl = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetalhes = function () {
        return "        ________________________ \n        Titulo: ".concat(this.titulo, "\n        Genero: ").concat(this.genero, "\n        Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.classificacaoEtaria, "\n       ");
    };
    Jogo.prototype.setJogo = function () {
        this.titulo = rl.question('Qual o titulo do jogo? ');
        this.genero = rl.question('Qual o genero do jogo?');
        this.classificacaoEtaria = rl.question('Qual a classificacao etaria do jogo?');
    };
    Jogo.prototype.getPropriedades = function () {
        return [this.titulo, this.genero, this.classificacaoEtaria];
    };
    return Jogo;
}());
exports.Jogo = Jogo;
