import { Cliente     } from "../../Model/Cliente";
import { Fornecedor  } from "../../Model/Fornecedor";
import { Funcionario } from "../../Model/Funcionario";
import { NotaFiscal  } from "../../Model/NotaFiscal";
import { Produto     } from "../../Model/Produto";
import { Venda       } from "../../Model/Venda";

import { listaClientes, listaFornecedores, listaFuncionarios, listaNotasFiscais, listaProdutos, listaVendas } from "../variaveis";

/*
    * apagarPorID(ID:number, listaClasse:any)
    * Função que removera um item da lista parâmetro que tiver o mesmo Identificador Parâmetro
*/
export function apagarPorID(ID: number, listaClasse: any[]) {
    if (listaClasse.length < 1) {// Verifica se a array está vazia, evitando possiveis bugs no código.
        console.log('Erro: lista vazia')
    } else {
        
        const primeiroItem = listaClasse[0]//É o primeiro item no parâmetro listaClasse, usado para testar o tipo do objeto

        if (primeiroItem.tipo === 'Cliente') {
            listaClientes.splice(0, listaClientes.length, ...listaClientes.filter(item => item.CPF != ID))
            /*
            Como em importações de variáveis não é permitido trocar o valor da variável diretamente, utilizamos o método splice, que por fim resuçltara na array antiga sem o elemento com CPF igual ao parâmetro "ID".
                * listaClientes.splice(0, lista.length ~
                * Até aqui, removemos todos os itens da lista, a partir do índice 0 retiramos o valor que representa a quantidade de indices.
                    * ~ ...listaClientes.filter(item => item.CPF != ID))
                    * Esse argumento no splice é um valor iterado dentro da array resultante.
                        * ~ ... ~ 
                        * Esse é o operador spread, que fará com que a array resultante do filter seja separada em elementos individuais.
                            * ~.filter(item => item.cpf != ID))
                            * Método filter que retorna uma array  de todos os elementos que comprirem com a condição na função de callback.
                                *  ~item = item.cpf != ID ~
                                *  Função de callback fará com que o filter retorne apenas os elementos que tiverem o cpf diferente do parâmetro "ID" na função principal que estamos lidando.
            */
        } else if (primeiroItem.tipo === 'Funcionario') {
            listaFuncionarios.splice(0, listaFuncionarios.length, ...listaFuncionarios.filter(item => item.CPF != ID))
        } else if (primeiroItem.tipo === 'Fornecedor') {
            listaFornecedores.splice(0, listaFornecedores.length, ...listaFornecedores.filter(item => item.ID != ID))
        } else if (primeiroItem.tipo === 'Venda') {
            listaVendas.splice(0, listaVendas.length, ...listaVendas.filter(item => item.ID != ID))
        } else if (primeiroItem.tipo === 'Produto') {
            listaProdutos.splice(0, listaProdutos.length, ...listaProdutos.filter(item => item.ID != ID))
        } else if (primeiroItem.tipo === 'NotaFiscal') {
            listaNotasFiscais.splice(0, listaNotasFiscais.length, ...listaNotasFiscais.filter(item => item.ID != ID))
        } else {
            console.log('Erro em "apagarPorID": Tipo desconhecido')
        }
        /*
        Lista de "else if" que executam uma ação dependendo do tipo do item;
        Essa ação depende do tipo do objeto, e fará basicamene a mesma coisa, mudando apenas a lista em que será executada.
        */
    }
}