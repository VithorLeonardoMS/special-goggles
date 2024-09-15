"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarClienteRl = cadastrarClienteRl;
var Cliente_1 = require("../../Model/Cliente");
var testeCPF_1 = require("../../../Tests/testeCPF");
var testeEmail_1 = require("../../../Tests/testeEmail");
var variaveis_1 = require("../variaveis");
var rl = require('readline-sync');
function cadastrarClienteRl() {
    var CPFCliente = rl.questionInt('CPF: ');
    while (!(0, testeCPF_1.testeCPF)(CPFCliente, variaveis_1.listaClientes) && CPFCliente !== -1) {
        CPFCliente = rl.questionInt('Este CPF ja esta cadastrado... \nTente outro CPF(Digite [-1] para cancelar): ');
    }
    if (CPFCliente === -1) {
        console.log('Cadastramento cancelado.');
        return false;
    }
    else {
        var eMail = rl.question('E-Mail: ');
        while (!(0, testeEmail_1.testeEmail)(eMail, variaveis_1.listaClientes) && eMail !== '-1') {
            eMail = rl.question('Este e-mail ja esta cadastrado... \nTente outro e-mail(Digite [-1] para cancelar): ');
        }
        if (eMail === '-1') {
            console.log('Cadastramento cancelado.');
            return false;
        }
        else {
            var enderecoCliente = rl.question('Endereco do cliente: ');
            var nomeCliente = rl.question('Nome: ');
            var senhaCliente = rl.question('Senha: ');
            var dinheiro = rl.questionInt('Saldo disponivel na conta bancaria: ');
            variaveis_1.listaClientes.push(new Cliente_1.Cliente(CPFCliente, enderecoCliente, nomeCliente, senhaCliente, eMail, dinheiro));
            return true;
        }
    }
}
