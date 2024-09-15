import { Fornecedor } from "../../Model/Fornecedor"
import { NotaFiscal } from "../../Model/NotaFiscal"
import { Produto    } from "../../Model/Produto"
import { Venda      } from "../../Model/Venda"

export function definirNovoID(IDsRemovidos: number[], listaClasse: Produto[] | Venda[] | NotaFiscal[] | Fornecedor[]): number {
    
    if (IDsRemovidos.length > 0) {
        return IDsRemovidos.reduce(function (resultante, valoresAnalisados) {
            return Math.min(resultante, valoresAnalisados)
        })//Resumidamente o reduce consegue executar uma função determinada item por item na array, no caso resultará no menor valor
    } else {
        return listaClasse.length
        
    }
}