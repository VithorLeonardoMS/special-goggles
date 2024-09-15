import { Produto       } from "../../Model/Produto"
import { Venda         } from "../../Model/Venda"
import { definirNovoID } from "../IDs/definirNovoID"
import { IDsRemovidosVenda, listaVendas} from "../variaveis"

export function cadastrarVenda(valorProduto: number, quantidadeVenda: number,CPFCliente: number, IDProduto: number, produto: Produto): void {
    let IDVenda = definirNovoID(IDsRemovidosVenda, listaVendas)
    listaVendas.push(new Venda(valorProduto, quantidadeVenda, IDVenda, CPFCliente, produto))
}