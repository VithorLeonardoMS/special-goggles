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
exports.JogoEletronico = void 0;
var Jogo_1 = require("./Jogo");
var rl = require('readline-sync');
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(titulo, genero, classificacaoEtaria, plataforma) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.plataforma = plataforma;
        return _this;
    }
    JogoEletronico.prototype.getDetalhes = function () {
        return "        ________________\n        Titulo: ".concat(this.getPropriedades()[0], "\n        Genero: ").concat(this.getPropriedades()[1], "\n        Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.getPropriedades()[2], "\n        Plataforma: ").concat(this.plataforma);
    };
    JogoEletronico.prototype.setDetalhes = function () {
        this.setJogo(); //analizar
        this.plataforma = rl.question('Qual a plataforma do jogo? ');
    };
    return JogoEletronico;
}(Jogo_1.Jogo));
exports.JogoEletronico = JogoEletronico;
