"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var rl = require('readline-sync');
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.carros = [];
    }
    //Método que retorna os carros da lsita de carros
    Garagem.prototype.getGaragem = function () {
        var lista = '';
        for (var i = 0; i < this.carros.length; i++) {
            lista += this.carros[i].getCarro;
        }
        return lista;
    };
    //Adiciona um carro no array carros se ouverem menos de 11 carros
    Garagem.prototype.adicionarCarro = function (carro) {
        if (this.carros.length < 10) {
            carro.id = this.carros.length;
            this.carros.push(carro);
        }
        else {
            console.log('Não cabem mais carros na garagem');
        }
    };
    //Remove carro pelo nome
    Garagem.prototype.removerCarro = function (nome) {
        var id = rl.questionInt('Qual o id do carro a ser removido? ').toLowerCase();
        this.carros = this.carros.filter(function (car) { return car.id !== id; });
    };
    return Garagem;
}());
exports.Garagem = Garagem;
