"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = void 0;
var Prova = /** @class */ (function () {
    function Prova(gabarito, nome) {
        this.gabarito = gabarito;
        this.nome = nome;
    }
    Prova.prototype.respostaAluno = function (resposta) {
        this.respostas = resposta.split('');
    };
    Prova.prototype.acertos = function () {
        var result = 0;
        for (var i = 0; i < this.respostas.length; i++) {
            if (this.respostas[i] === this.gabarito.questoes[i]) {
                result++;
            }
        }
        return result;
    };
    Prova.prototype.nota = function () {
        var result = 0;
        for (var i = 0; i < 11; i++) {
            if (this.respostas[i] === this.gabarito.questoes[i]) {
                result += 0.5;
            }
        }
        for (var i = 11; i < 16; i++) {
            if (this.respostas[i] === this.gabarito.questoes[i]) {
                result++;
            }
        }
        return result;
    };
    Prova.prototype.maior = function (outraProva) {
        if (outraProva.nota() > this.nota()) {
            return outraProva.nota();
        }
        if (outraProva.nota() < this.nota()) {
            return this.nota();
        }
        if (outraProva.nota() === this.nota()) {
            return this.nota();
        }
        else {
            return 0;
        }
    };
    return Prova;
}());
exports.Prova = Prova;
