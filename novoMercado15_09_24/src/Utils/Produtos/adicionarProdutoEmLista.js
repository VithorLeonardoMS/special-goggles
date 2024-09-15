"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProdutoEmLista = adicionarProdutoEmLista;
function adicionarProdutoEmLista(produto, quantidadeProduto, listaClasse) {
    var produtoCarrinho = produto.copiarProduto();
    var produtoVerificacao = listaClasse.filter(function (produtoFilter) {
        return produtoFilter.ID === produtoCarrinho.ID;
    }).length === 1; // verifica se o existe produto com este id na listaClasse
    if (produtoVerificacao) {
        listaClasse.forEach(function (valorAtual, indice) {
            if (valorAtual.ID === produtoCarrinho.ID) {
                listaClasse[indice].quantidadeProduto += quantidadeProduto;
            }
        });
        return true;
    }
    else {
        produtoCarrinho.quantidadeProduto = quantidadeProduto;
        listaClasse.push(produtoCarrinho);
        return false; //False se o produto ainda não existir na lista 
    }
}
