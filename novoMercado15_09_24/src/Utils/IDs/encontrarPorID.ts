import { Cliente } from "../../Model/Cliente"
import { Fornecedor } from "../../Model/Fornecedor"
import { Funcionario } from "../../Model/Funcionario"
import { NotaFiscal } from "../../Model/NotaFiscal"
import { Produto } from "../../Model/Produto"
import { Venda } from "../../Model/Venda"



export function encontrarPorID(listaClasse: Cliente[] | Fornecedor[] | Funcionario[] | NotaFiscal[] | Produto[] | Venda[], ID: number): number {//Retorna o indice pelo ID, retorna -1 se não existir
    let retorno: number = -1
    listaClasse.forEach((valorAtual, indice: number) => {
        if (valorAtual.ID === ID) {
            retorno = indice
        }
    })
    return retorno
}