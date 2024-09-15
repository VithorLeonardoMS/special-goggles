"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var rl = require('readline-sync');
var Fornecedor_1 = require("./Fornecedor");
var Funcionario = /** @class */ (function () {
    function Funcionario(CPF, salario, senhaFuncionario, nomeFuncionario, eMail) {
        this.tipo = "Funcionario";
        this.CPF = CPF;
        this.salario = salario;
        this.senhaFuncionario = senhaFuncionario;
        this.nomeFuncionario = nomeFuncionario;
        this.tipo = "Funcionario";
        this.eMail = eMail;
    }
    Funcionario.prototype.getFuncionario = function () {
        return ("\n        Nome:             ".concat(this.nomeFuncionario, "\n        CPF:              ").concat(this.CPF, "\n        Salario:          ").concat(this.salario, "\n        SenhaFuncionario: ").concat(this.senhaFuncionario, "\n        "));
    };
    Funcionario.prototype.setFuncionario = function () {
        var nomeFuncionario = rl.question('Qual o novo nomeFuncionario? ');
        var salario = rl.questionInt('Qual é o novo Salario? ');
        var senhaFuncionario = rl.questionInt('Qual a nova senhaFuncionario? ');
    };
    Funcionario.prototype.criarFornecedor = function () {
        var NovoNomeFornecedor = rl.question("Insira o Nome do novo fornecedor. ");
        var NovaSenhaFornecedor = rl.question("Insira a senha do novo Fornecedor. ");
        var NovoEnderecoFornecedor = rl.question("Insira o endereço do novo Fornecedor. ");
        var novoEmail = rl.question("Insira o E-Mail do novo Fornecedor");
        var IDfornecedor = rl.question("Insira o ID do novo Fornecedor. ");
        return new Fornecedor_1.Fornecedor(IDfornecedor, NovoEnderecoFornecedor, NovoNomeFornecedor, NovaSenhaFornecedor, novoEmail);
    };
    Funcionario.prototype.getSenha = function (codigo) {
        if (codigo === 1234) {
            return this.senhaFuncionario;
        }
        else {
            return 'Codigo errado';
        }
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
