"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, ID, precoVenda, quantidadeProduto, precoCompra) {
        this.tipo = "Produto";
        this.nome = nome;
        this.ID = ID;
        this.precoVenda = precoVenda;
        this.precoCompra = precoCompra;
        this.quantidadeProduto = quantidadeProduto;
        this.tipo = "Produto";
    }
    Produto.prototype.getProduto = function () {
        return ("\n            Nome:                         ".concat(this.nome, ";\n            ID:                           ").concat(this.ID, ";\n            Pre\u00E7o de Venda:               ").concat(this.precoVenda, ";\n            Pre\u00E7o de Compra:              ").concat(this.precoCompra, ";\n            Quantidade de produto:        ").concat(this.quantidadeProduto));
    };
    Produto.prototype.getProdutoSimples = function () {
        return ("       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n            Nome:                         ".concat(this.nome, ";\n            ID:                           ").concat(this.ID, ";\n            Pre\u00E7o:                        ").concat(this.precoVenda, ";\n            Quantidade:                   ").concat(this.quantidadeProduto, "\n            Preco total:                  ").concat(this.precoVenda * this.quantidadeProduto));
    };
    Produto.prototype.getSimplesSemTotal = function () {
        return ("       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n            Nome:                         ".concat(this.nome, ";\n            ID:                           ").concat(this.ID, ";\n            Pre\u00E7o:                        ").concat(this.precoVenda, ";\n            Quantidade:                   ").concat(this.quantidadeProduto));
    };
    Produto.prototype.analisarSeTem = function (quantidade) {
        if (quantidade > this.quantidadeProduto || quantidade < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Produto.prototype.diminuirQuantidade = function (quantidade) {
        this.quantidadeProduto -= quantidade;
    };
    Produto.prototype.copiarProduto = function () {
        return new Produto(this.nome, this.ID, this.precoVenda, this.quantidadeProduto, this.precoCompra);
    };
    return Produto;
}());
exports.Produto = Produto;
