"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, precoCompra, marca, categoria, precoVenda) {
        this.nome = nome;
        this.precoCompra = precoCompra;
        this.marca = marca;
        this.categoria = categoria;
        this.precoVenda = precoVenda;
    }
    Produto.prototype.getProduto = function () {
        console.log("\n        _____________________________\n        Nome: ".concat(this.nome, "\n        Preco comprado: ").concat(this.precoCompra, " \n        Marca: ").concat(this.marca, "\n        Categoria: ").concat(this.categoria, "\n        Preco de venda: ").concat(this.precoVenda, "\n        _____________________________\n        "));
    };
    Produto.prototype.lucroProduto = function () {
        return this.precoVenda - this.precoCompra;
    };
    return Produto;
}());
exports.Produto = Produto;
