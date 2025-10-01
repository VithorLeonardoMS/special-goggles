"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var vaga_1 = require("./vaga");
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.cadeiras = [new vaga_1.Vaga(1)];
        for (var i = 2; i < 101; i++) {
            this.cadeiras.push(new vaga_1.Vaga(i));
        }
    }
    Voo.prototype.proximoLivre = function () {
        var i = 0;
        while (i < 100) {
            if (this.cadeiras[i].livre) {
                return this.cadeiras[i].numero;
                i = 0;
            }
            else {
                i++;
            }
        }
    };
    Voo.prototype.verifica = function (cadeira) {
        return this.cadeiras[cadeira].livre;
    };
    Voo.prototype.ocupa = function (cadeira) {
        if (this.cadeiras[cadeira - 1].livre) {
            this.cadeiras[cadeira - 1].ocupa();
            return true;
        }
        else {
            return false;
        }
    };
    Voo.prototype.vagas = function () {
        var result = '';
        for (var i = 0; i < 100; i++) {
            if (this.cadeiras[i].livre) {
                result += "".concat(this.cadeiras[i].numero, " esta livre \n");
            }
        }
        return result;
    };
    Voo.prototype.getVoo = function () {
        var result = '';
        for (var i = 0; i < 100; i++) {
            if (this.cadeiras[i].livre) {
                result += "".concat(this.cadeiras[i].numero, " esta livre \n");
            }
            else {
                result += "".concat(this.cadeiras[i].numero, " n\u00E3o esta livre \n");
            }
        }
        return "Numero do voo: ".concat(this.numeroVoo, "\nData: ").concat(this.data.getTudo, "\n").concat(result);
    };
    Voo.prototype.getData = function () {
        return this.data.getTudo();
    };
    Voo.prototype.clone = function () {
        var novoVoo = new Voo(this.numeroVoo, this.data);
        novoVoo.vagas = this.vagas;
        return novoVoo;
    };
    return Voo;
}());
exports.Voo = Voo;
