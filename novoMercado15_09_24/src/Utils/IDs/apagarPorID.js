"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apagarPorID = apagarPorID;
var variaveis_1 = require("../variaveis");
/*
    * apagarPorID(ID:number, listaClasse:any)
    * Função que removera um item da lista parâmetro que tiver o mesmo Identificador Parâmetro
*/
function apagarPorID(ID, listaClasse) {
    if (listaClasse.length < 1) { // Verifica se a array está vazia, evitando possiveis bugs no código.
        console.log('Erro: lista vazia');
    }
    else {
        var primeiroItem = listaClasse[0]; //É o primeiro item no parâmetro listaClasse, usado para testar o tipo do objeto
        if (primeiroItem.tipo === 'Cliente') {
            variaveis_1.listaClientes.splice.apply(variaveis_1.listaClientes, __spreadArray([0, variaveis_1.listaClientes.length], variaveis_1.listaClientes.filter(function (item) { return item.CPF != ID; }), false));
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
        }
        else if (primeiroItem.tipo === 'Funcionario') {
            variaveis_1.listaFuncionarios.splice.apply(variaveis_1.listaFuncionarios, __spreadArray([0, variaveis_1.listaFuncionarios.length], variaveis_1.listaFuncionarios.filter(function (item) { return item.CPF != ID; }), false));
        }
        else if (primeiroItem.tipo === 'Fornecedor') {
            variaveis_1.listaFornecedores.splice.apply(variaveis_1.listaFornecedores, __spreadArray([0, variaveis_1.listaFornecedores.length], variaveis_1.listaFornecedores.filter(function (item) { return item.ID != ID; }), false));
        }
        else if (primeiroItem.tipo === 'Venda') {
            variaveis_1.listaVendas.splice.apply(variaveis_1.listaVendas, __spreadArray([0, variaveis_1.listaVendas.length], variaveis_1.listaVendas.filter(function (item) { return item.ID != ID; }), false));
        }
        else if (primeiroItem.tipo === 'Produto') {
            variaveis_1.listaProdutos.splice.apply(variaveis_1.listaProdutos, __spreadArray([0, variaveis_1.listaProdutos.length], variaveis_1.listaProdutos.filter(function (item) { return item.ID != ID; }), false));
        }
        else if (primeiroItem.tipo === 'NotaFiscal') {
            variaveis_1.listaNotasFiscais.splice.apply(variaveis_1.listaNotasFiscais, __spreadArray([0, variaveis_1.listaNotasFiscais.length], variaveis_1.listaNotasFiscais.filter(function (item) { return item.ID != ID; }), false));
        }
        else {
            console.log('Erro em "apagarPorID": Tipo desconhecido');
        }
        /*
        Lista de "else if" que executam uma ação dependendo do tipo do item;
        Essa ação depende do tipo do objeto, e fará basicamene a mesma coisa, mudando apenas a lista em que será executada.
        */
    }
}
