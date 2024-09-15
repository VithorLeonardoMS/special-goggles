import { Produto       } from "../../Model/Produto"
import { IDsRemovidosProdutos, listaProdutos} from "../variaveis"
import { definirNovoID } from "../IDs/definirNovoID"
let rl = require('readline-sync')

export function cadastrarProdutoRl(): void {
    let nomeProduto = rl.question('Produto: ')
    let quantidadeProduto = rl.questionInt('Quantidade: ')
    let precoCompra = rl.questionInt('Preco de fabrica: ')
    let precoVenda = rl.questionInt('Preco de venda: ')
    let ID = definirNovoID(IDsRemovidosProdutos, listaProdutos)
    listaProdutos.push(new Produto(nomeProduto, ID, precoVenda, quantidadeProduto, precoCompra))
}