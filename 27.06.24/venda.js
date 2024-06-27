"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.data = data;
        this.valorTotal = this.calculaTotal();
        this.valorTotal = 1;
    }
    Venda.prototype.calculaTotal = function () {
        var y = this.produto.precoVenda;
        var x = this.quantidade;
        return y * x;
    };
    Venda.prototype.aplicarDesconto = function () {
        var x = this.produto.lucroProduto() / 2;
        var y = this.produto.precoVenda;
        this.valorTotal = y - x;
    };
    Venda.prototype.getVenda = function () {
        console.log("\n    ______________________________\n    Produto: ".concat(this.produto, "\n    Quantidade: ").concat(this.quantidade, "\n    Valor total: ").concat(this.valorTotal, "\n    Data: ").concat(this.data, "\n    ______________________________\n    "));
    };
    return Venda;
}());
exports.Venda = Venda;
