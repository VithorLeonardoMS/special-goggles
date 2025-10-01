"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retirarQuantidadeProduto = retirarQuantidadeProduto;
var variaveis_1 = require("../variaveis");
function retirarQuantidadeProduto(ID, quantidade) {
    variaveis_1.listaProdutos.forEach(function (valorAtual, indice) {
        if (valorAtual.ID === ID) {
            valorAtual.diminuirQuantidade(quantidade);
        }
    });
}
