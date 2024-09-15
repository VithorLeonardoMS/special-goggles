import { Produto } from "../../Model/Produto"


export function adicionarProdutoEmLista(produto: Produto, quantidadeProduto: number, listaClasse: Produto[]): boolean {
    let produtoCarrinho = produto.copiarProduto()
    let produtoVerificacao: boolean = listaClasse.filter((produtoFilter: Produto) => {
        return produtoFilter.ID === produtoCarrinho.ID
    }).length === 1 // verifica se o existe produto com este id na listaClasse

    if (produtoVerificacao) {

        listaClasse.forEach((valorAtual, indice) => {
            if (valorAtual.ID === produtoCarrinho.ID) {
                listaClasse[indice].quantidadeProduto += quantidadeProduto;
            }
        })
        return true
    } else {
        produtoCarrinho.quantidadeProduto = quantidadeProduto
        listaClasse.push(produtoCarrinho)
        return false//False se o produto ainda não existir na lista 
    }

}