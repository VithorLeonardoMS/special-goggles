import { Cliente       } from "../../Model/Cliente"
import { NotaFiscal    } from "../../Model/NotaFiscal"
import { Venda         } from "../../Model/Venda"
import { definirNovoID } from "../IDs/definirNovoID"

import { IDsRemovidosNotasFiscais, listaNotasFiscais } from "../variaveis"


export function cadastrarNotaFiscal(vendas: Venda[], cliente:Cliente,) {
    let IDNotaFiscal:number = definirNovoID(IDsRemovidosNotasFiscais, listaNotasFiscais)
    listaNotasFiscais.push(new NotaFiscal(vendas, IDNotaFiscal))
    cliente.notasFiscais.push(new NotaFiscal(vendas, IDNotaFiscal))
}