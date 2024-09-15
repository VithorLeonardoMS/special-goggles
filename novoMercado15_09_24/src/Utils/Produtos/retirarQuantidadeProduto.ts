import { listaProdutos } from "../variaveis"




export function retirarQuantidadeProduto(ID: number, quantidade: number) {
    listaProdutos.forEach((valorAtual, indice) => {
        if (valorAtual.ID === ID) {
            valorAtual.diminuirQuantidade(quantidade)
        }
    })
}