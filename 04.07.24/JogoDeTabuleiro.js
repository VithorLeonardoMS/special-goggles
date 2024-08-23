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
exports.JogoDeTabuleiro = void 0;
var Jogo_1 = require("./Jogo");
var rl = require('readline-sync');
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro(titulo, genero, classificacaoEtaria, numeroDeJogadores) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.numeroDeJogadores = numeroDeJogadores;
        return _this;
    }
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        return "        ________________\n        Titulo: ".concat(this.getPropriedades()[0], "\n        Genero: ").concat(this.getPropriedades()[1], "\n        Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.getPropriedades()[2], "\n        Numero de jogadores: ").concat(this.numeroDeJogadores);
    };
    return JogoDeTabuleiro;
}(Jogo_1.Jogo));
exports.JogoDeTabuleiro = JogoDeTabuleiro;
