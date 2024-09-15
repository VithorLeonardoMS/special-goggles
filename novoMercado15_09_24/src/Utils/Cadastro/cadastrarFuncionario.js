"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarFuncionarioRl = cadastrarFuncionarioRl;
var testeCPF_1 = require("../../../Tests/testeCPF");
var testeEmail_1 = require("../../../Tests/testeEmail");
var Funcionario_1 = require("../../Model/Funcionario");
var variaveis_1 = require("../variaveis");
var rl = require('readline-sync');
function cadastrarFuncionarioRl() {
    var CPFNovoFuncionario = rl.questionInt("Insira o CPF do novo funcionario: ");
    while (!(0, testeCPF_1.testeCPF)(CPFNovoFuncionario, variaveis_1.listaFuncionarios) && CPFNovoFuncionario !== -1) {
        CPFNovoFuncionario = rl.questionInt('Este CPF ja esta cadastrado... \nTente outro CPF(-1 para cancelar): ');
    }
    if (CPFNovoFuncionario === -1) {
        console.log('Cadastramento cancelado.');
        return false;
    }
    var novoEmailFuncionario = rl.question("Insira o E-Mail do novo funcionario: ");
    while (!(0, testeEmail_1.testeEmail)(novoEmailFuncionario, variaveis_1.listaFornecedores) && novoEmailFuncionario !== '-1') {
        novoEmailFuncionario = rl.question('Este e-mail ja esta em uso. \n Insira outro e-mail(Digite [-1] para cancelar):');
    }
    if (novoEmailFuncionario !== '-1') {
        var NovoNomeFuncionario = rl.question("Insira o Nome do novo funcionario: ");
        var NovaSenhaFuncionario = rl.question("Insira a senha do novo funcionario: ");
        var NovoSalario = rl.questionInt("Insira o salario do novo funcionario: ");
        variaveis_1.listaFuncionarios.push(new Funcionario_1.Funcionario(CPFNovoFuncionario, NovoSalario, NovaSenhaFuncionario, NovoNomeFuncionario, novoEmailFuncionario));
        return true;
    }
    else if (novoEmailFuncionario === '-1') {
        console.log('Cadastramento cancelado.');
        return false;
    }
    return true;
}
