"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
var NotaFiscal = /** @class */ (function () {
    function NotaFiscal(vendas, ID) {
        this.tipo = 'NotaFiscal';
        this.vendas = vendas;
        this.ID = ID;
        this.valorTotal = vendas.reduce(function (acumulador, valorAtual) {
            return acumulador + valorAtual.valorTotal;
        }, 0);
        for (var i = 0; i < vendas.length; i++) {
        }
        var date = new Date();
        this.data = "".concat(String(date.getDate()).padStart(2, '0'), "/").concat(String(date.getMonth() + 1).padStart(2, '0'), "/").concat(date.getFullYear());
        this.hora = "".concat(date.getHours(), ":").concat(date.getMinutes(), ".").concat(date.getSeconds());
    }
    NotaFiscal.prototype.getNotaFiscal = function () {
        return ("\n    ID:                 ".concat(this.ID, "\n    Data da compra:     ").concat(this.data, "\n    Hora da compra:     ").concat(this.hora, "\n    Valor Total:        ").concat(this.valorTotal, "R$\n    Vendas:             ").concat(this.vendas.reduce(function (acumulador, valorAtual, indice) { return acumulador + "\n      Venda n\u00B0".concat(indice + 1, ":") + '\n' + valorAtual.getVenda(); }, '')));
    };
    NotaFiscal.prototype.getNotaFiscalSimples = function () {
        return ("\n        ID:                  ".concat(this.ID, "\n        Valor Total:          ").concat(this.valorTotal, "R$\n        Vendas:               ").concat(this.vendas.reduce(function (acumulador, valorAtual) {
            return acumulador + "{ID da venda: ".concat(valorAtual.ID, ", Nome do produto: ").concat(valorAtual.produto.nome, "}\n");
        }, '')));
    };
    NotaFiscal.prototype.adicionarNovaVenda = function (vendaFeita) {
        this.vendas.push(vendaFeita);
        this.valorTotal += vendaFeita.valorTotal;
    };
    return NotaFiscal;
}());
exports.NotaFiscal = NotaFiscal;
