"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        var difAno = this.ano - outraData.ano;
        var ifMes = this.mes - outraData.mes;
        var ifDia = this.dia - outraData.dia;
        if (difAno > 0) {
            return "".concat(this.getTudo(), " \u00E9 maior");
        }
        else if (difAno < 0) {
            return "".concat(outraData.getTudo(), " \u00E9 maior");
        }
        else if (ifMes > 0) {
            return "".concat(this.getTudo(), " \u00E9 maior");
        }
        else if (ifMes < 0) {
            return "".concat(outraData.getTudo(), " \u00E9 maior");
        }
        else if (ifMes > 0) {
            return "".concat(this.getTudo(), " \u00E9 maior");
        }
        else if (ifDia < 0) {
            return "".concat(outraData.getTudo(), " \u00E9 maior");
        }
        else if (ifDia === 0) {
            return 'As duas datas são iguais';
        }
        else {
            return 'erro';
        }
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getTudo = function () {
        return "".concat(this.dia, "-").concat(this.mes, "-").concat(this.ano);
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.getMesExtenso = function () {
        var mes = this.mes;
        var extenso = '';
        switch (mes) {
            case 1:
                extenso = 'janeiro';
                break;
            case 2:
                extenso = 'fevereiro';
                break;
            case 3:
                extenso = 'março';
                break;
            case 4:
                extenso = 'abril';
                break;
            case 5:
                extenso = 'maio';
                break;
            case 6:
                extenso = 'junho';
                break;
            case 7:
                extenso = 'julho';
                break;
            case 8:
                extenso = 'agosto';
                break;
            case 9:
                extenso = 'setembro';
                break;
            case 10:
                extenso = 'outubro';
                break;
            case 11:
                extenso = 'novembro';
                break;
            case 12:
                extenso = 'dezembro';
                break;
        }
        return extenso;
    };
    Data.prototype.isBissexto = function () {
        if (this.ano % 100 == 0 && this.ano % 400 !== 0) {
            return true;
        }
        else if (this.ano % 4 === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Data.prototype.clone = function () {
        return new Data(16, 1, 2007);
    };
    return Data;
}());
exports.Data = Data;
