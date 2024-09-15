"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var rl = require('Readline-sync');
var Venda = /** @class */ (function () {
    function Venda(valorProduto, quantidadeVenda, ID, CPFCliente, produto) {
        this.tipo = "Venda";
        this.valorProduto = valorProduto;
        this.valorTotal = produto.quantidadeProduto * produto.precoVenda;
        this.quantidadeVenda = quantidadeVenda;
        this.ID = ID;
        this.CPFCliente = CPFCliente;
        this.produto = produto;
    }
    Venda.prototype.getVenda = function () {
        return ("        ID:                     ".concat(this.ID, "\n        CPF do comprador:       ").concat(this.CPFCliente, "\n        Produto da Venda:       \n").concat(this.produto.getProdutoSimples()));
    };
    return Venda;
}());
exports.Venda = Venda;
