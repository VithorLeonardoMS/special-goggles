"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDsRemovidosNotasFiscais = exports.IDsRemovidosFornecedor = exports.IDsRemovidosVenda = exports.IDsRemovidosProdutos = exports.usuarioAtual = exports.usuarioNeutro = exports.caixaMercado = exports.listaNotasFiscais = exports.carrinho = exports.listaFuncionarios = exports.listaVendas = exports.listaFornecedores = exports.listaClientes = exports.listaProdutos = exports.produtoC = exports.produtoB = exports.produtoA = void 0;
exports.clearCarrinho = clearCarrinho;
exports.diminuirCaixa = diminuirCaixa;
exports.getUsuarioNeutro = getUsuarioNeutro;
exports.getUsuarioAtual = getUsuarioAtual;
exports.setUsuarioAtual = setUsuarioAtual;
exports.retornarCliente = retornarCliente;
exports.retornarFuncionario = retornarFuncionario;
exports.retornarFornecedor = retornarFornecedor;
var Cliente_1 = require("../Model/Cliente");
var Fornecedor_1 = require("../Model/Fornecedor");
var Funcionario_1 = require("../Model/Funcionario");
var Produto_1 = require("../Model/Produto");
exports.produtoA = new Produto_1.Produto('Agua do banho do sor leo', 0, 50, 10, 80);
exports.produtoB = new Produto_1.Produto('Tufo de cabelo do sor Iuri (Edição limitada)', 1, 40, 20, 100);
exports.produtoC = new Produto_1.Produto('Cuticula do sor Lucas', 2, 80, 50, 30);
//Produtos pré definidos
exports.listaProdutos = [new Produto_1.Produto('Agua do banho do sor leo', 0, 50, 10, 80), exports.produtoB, exports.produtoC];
exports.listaClientes = [new Cliente_1.Cliente(123, 'rua', 'Eduardo', '123', 'cliente', 999), new Cliente_1.Cliente(2, '', 'teste', '123', 'teste', 999)];
exports.listaFornecedores = [new Fornecedor_1.Fornecedor(0, 'Inferior da Ponte', 'Guilherme', '123', 'forn'), new Fornecedor_1.Fornecedor(1, 'rua', 'ze', '123', 'teste')];
exports.listaVendas = [];
exports.listaFuncionarios = [new Funcionario_1.Funcionario(1234, 999, "123", 'vithor', 'func'), new Funcionario_1.Funcionario(2, 99, '123', 'teste', 'teste')];
exports.carrinho = [];
exports.listaNotasFiscais = [];
/*
Estas váriáveis irão armazenar obetos para serem utilizados posteriormente de forma organizada.
Cada uma destas listas armazena objetos de classes especificas usadas em momentos especificos.
    *Especificamente o carrinho é uma lista de produtos quase que imagináros, mas que servirão para interagir com as outras.
    O usuário deverá escolher os produtos e eles primeiramente serão armazenados no carrinho,
    possibilitando interações antes da compra ser efetuada.
*/
function clearCarrinho() {
    exports.carrinho = [];
}
exports.caixaMercado = 1000;
//BANCO DE DADOS
function diminuirCaixa(valor) {
    exports.caixaMercado -= valor;
}
//Diminui valor no caixa
exports.listaFornecedores[0].produtos.push(exports.produtoA);
exports.listaFornecedores[1].produtos.push(exports.produtoB);
//Adiciona produtos pré definidos
exports.usuarioNeutro = new Cliente_1.Cliente(0, '', '', '123', '', 0);
//Esse usuario é o primeiro usuário considerado no menuInicial e é sempre trocado quando for realizado um logOut, dessa forma nenhum usuario real fica guardado na variável usuarioAtual
exports.usuarioNeutro.alterarTipo('Neutro', 1234); //Troca o tipo do usuario neutro para que não interaja com nada em outros códigos
function getUsuarioNeutro() {
    return exports.usuarioNeutro;
} //Permite retornar o usuarioNeutro em um arquivo onde é importado
exports.usuarioAtual = exports.usuarioNeutro;
//Usuario atual logado, começa como neutro, para evitar interações incorretas
function getUsuarioAtual() {
    return exports.usuarioAtual;
} //Permite retornar o usuarioAtual em um arquio onde é importado
function setUsuarioAtual(novoUsuario) {
    exports.usuarioAtual = novoUsuario;
} //Permite a alteração do usuarioAtual em um arquivo onde é importado
function retornarCliente() {
    var clienteEncontrado = exports.listaClientes.find(function (cliente) { return cliente === exports.usuarioAtual; });
    if (clienteEncontrado) {
        return clienteEncontrado;
    }
    else {
        return new Cliente_1.Cliente(1, '', '', '', '', 1);
    }
}
function retornarFuncionario() {
    var funcionarioEncontrado = exports.listaFuncionarios.find(function (funcionario) { return funcionario === exports.usuarioAtual; });
    if (funcionarioEncontrado) {
        return funcionarioEncontrado;
    }
    else {
        return new Funcionario_1.Funcionario(1, 1, '', '', '');
    }
}
function retornarFornecedor() {
    var fornecedorEncontrado = exports.listaFornecedores.find(function (fornecedor) { return fornecedor === exports.usuarioAtual; });
    if (fornecedorEncontrado) {
        return fornecedorEncontrado;
    }
    else {
        return new Fornecedor_1.Fornecedor(1, '', '', '', '');
    }
}
exports.IDsRemovidosProdutos = [];
exports.IDsRemovidosVenda = [];
exports.IDsRemovidosFornecedor = [];
exports.IDsRemovidosNotasFiscais = [];
//Quando um identificador for removido é armazenado na lista respectiva para ser usado novamente
