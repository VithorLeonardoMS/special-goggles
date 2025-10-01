"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarFornecedorRl = cadastrarFornecedorRl;
var testeEmail_1 = require("../../../Tests/testeEmail");
var Fornecedor_1 = require("../../Model/Fornecedor");
var definirNovoID_1 = require("../IDs/definirNovoID");
var variaveis_1 = require("../variaveis");
var rl = require('readline-sync');
function cadastrarFornecedorRl() {
    var novoNomeFornecedor;
    var novaSenhaFornecedor;
    var novoEnderecoFornecedor;
    var ID;
    var novoEmail = rl.question('Insira o e-mail: ');
    while (!(0, testeEmail_1.testeEmail)(novoEmail, variaveis_1.listaFornecedores) && novoEmail !== '-1') {
        novoEmail = rl.question('Este e-mail ja esta em uso. \n Insira outro e-mail(Digite [-1] para cancelar):');
    }
    if (novoEmail !== '-1') {
        novoNomeFornecedor = rl.question("Insira o Nome do novo fornecedor: ");
        novaSenhaFornecedor = rl.question("Insira a senha do novo Fornecedor: ");
        novoEnderecoFornecedor = rl.question("Insira o endereco do novo Fornecedor: ");
        ID = (0, definirNovoID_1.definirNovoID)(variaveis_1.IDsRemovidosFornecedor, variaveis_1.listaFornecedores);
        variaveis_1.listaFornecedores.push(new Fornecedor_1.Fornecedor(ID, novoEnderecoFornecedor, novoNomeFornecedor, novaSenhaFornecedor, novoEmail));
        return true;
    }
    else if (novoEmail === '-1') {
        console.log('Cadastramento cancelado.');
        return false;
    }
    return true;
}
