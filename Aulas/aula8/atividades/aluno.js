"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = notaProva1;
        this.nota2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        return ((this.nota1 + this.nota2) / 2);
    };
    Aluno.prototype.final = function () {
        return ((this.nota1 + this.nota2 + this.notaTrabalho) / 3);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
