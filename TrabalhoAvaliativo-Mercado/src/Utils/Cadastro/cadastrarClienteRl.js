"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarClienteRl = cadastrarClienteRl;
var Cliente_1 = require("../../Model/Cliente");
var testeCPF_1 = require("../../../Tests/testeCPF");
var testeEmail_1 = require("../../../Tests/testeEmail");
var variaveis_1 = require("../variaveis");
var rl = require('readline-sync');
function cadastrarClienteRl() {
    var clienteCPF = rl.questionInt('CPF: ');
    while (clienteCPF !== -1 && !(0, testeCPF_1.testeCPF)(clienteCPF, variaveis_1.listaClientes) || !clienteCPF) {
        if (!clienteCPF) {
            clienteCPF = rl.questionInt('Preencha todos os campos \n(Digite [-1] para cancelar): ');
        }
        else {
            clienteCPF = rl.questionInt('Este CPF ja esta cadastrado... \nTente outro CPF(Digite [-1] para cancelar): ');
        }
    }
    if (clienteCPF === -1) {
        console.log('Cadastramento cancelado.');
        return false;
    }
    else {
        var eMail = rl.question('E-Mail: ');
        while (eMail !== '-1' && !(0, testeEmail_1.testeEmail)(eMail, variaveis_1.listaClientes) || !eMail) {
            if (!eMail) {
                eMail = rl.question('Preencha todos os campos \n(Digite [-1] para cancelar): ');
            }
            else {
                eMail = rl.question('Este e-mail ja esta cadastrado... \nTente outro e-mail(Digite [-1] para cancelar): ');
            }
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
            if (enderecoCliente && nomeCliente && senhaCliente && dinheiro != null) {
                variaveis_1.listaClientes.push(new Cliente_1.Cliente(clienteCPF, enderecoCliente, nomeCliente, senhaCliente, eMail, dinheiro));
                return true;
            }
            else {
                console.error("Todos os campos precisam ser preenchidos");
                return false;
            }
        }
    }
}
