"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarVenda = cadastrarVenda;
var Venda_1 = require("../../Model/Venda");
var definirNovoID_1 = require("../IDs/definirNovoID");
var variaveis_1 = require("../variaveis");
function cadastrarVenda(valorProduto, quantidadeVenda, CPFCliente, IDProduto, produto) {
    var IDVenda = (0, definirNovoID_1.definirNovoID)(variaveis_1.IDsRemovidosVenda, variaveis_1.listaVendas);
    variaveis_1.listaVendas.push(new Venda_1.Venda(valorProduto, quantidadeVenda, IDVenda, CPFCliente, produto));
}
