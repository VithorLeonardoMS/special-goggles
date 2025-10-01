"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuInicial = menuInicial;
var cadastrarClienteRl_1 = require("../Utils/Cadastro/cadastrarClienteRl");
var menuCliente_1 = require("./menuCliente");
var menuFornecedor_1 = require("./menuFornecedor");
var menuFuncionario_1 = require("./menuFuncionario");
var menuSecreto_1 = require("./menuSecreto");
var variaveis_1 = require("../Utils/variaveis");
var rl = require('readline-sync');
/*
    * menuInicial()
    * É uma função que executa o primeiro menu do programa
        * 1 - Cadastrar como cliente: Cadastra um novo cliente para listaclientes
        * 2 - Loggin: Traz três opções para o usuário
 */
function menuInicial() {
    var menu = true;
    var _loop_1 = function () {
        console.log("       ------------\n       MENU INICIAL\n       ------------\n       1 - Cadastrar-se como cliente.\n       2 - Login.\n       0 - Sair.\n    ");
        var pergunta2 = rl.questionInt('Qual a opcao desejada? ');
        switch (pergunta2) {
            case 1:
                console.clear();
                if ((0, cadastrarClienteRl_1.cadastrarClienteRl)()) {
                    (0, variaveis_1.setUsuarioAtual)(variaveis_1.listaClientes[variaveis_1.listaClientes.length - 1]);
                    console.log("Usuario cadastrado com sucesso!");
                    (0, menuCliente_1.menuCliente)();
                    console.clear();
                }
                break;
            case 2:
                console.clear();
                var escolhaNova = rl.questionInt("\n 1- Logar como Funcionario.\n 2- Logar como Cliente.\n 3- Logar como Fornecedor.\n----------------------------\nRESPOSTA: ");
                var tipoCadastro = void 0;
                switch (escolhaNova) {
                    case 1:
                        tipoCadastro = 1;
                        break;
                    case 2:
                        tipoCadastro = 2;
                        break;
                    case 3:
                        tipoCadastro = 3;
                        break;
                    default:
                        console.log("Opção não reconhecida.");
                        tipoCadastro = 0;
                        break;
                }
                var codigoResposta_1 = 'x';
                var codigoRecuperacao_1 = 'y';
                if (tipoCadastro != 0) {
                    var eMail_1 = rl.question("Insira seu Email: ");
                    var Senha_1 = rl.question("(INSIRA '0' CASO TENHA ESQUECIDO SUA SENHA) \n Insira sua senha: ");
                    if (Senha_1 == '0') {
                        codigoRecuperacao_1 = "".concat(Math.floor(Math.random() * 9));
                        codigoRecuperacao_1 += "".concat(Math.floor(Math.random() * 9));
                        codigoRecuperacao_1 += "".concat(Math.floor(Math.random() * 9));
                        codigoRecuperacao_1 += "".concat(Math.floor(Math.random() * 9));
                        codigoRecuperacao_1 += "".concat(Math.floor(Math.random() * 9));
                        console.log(codigoRecuperacao_1);
                        codigoResposta_1 = rl.question('Nos enviamos um codigo de verificacao para seu "email".\n Codigo: ');
                    }
                    if (tipoCadastro == 2) {
                        variaveis_1.listaClientes.forEach(function (valorAtual) {
                            if (valorAtual.eMail === eMail_1.toLowerCase() && (valorAtual.getSenha(1234) === Senha_1 || codigoRecuperacao_1 === codigoResposta_1)) {
                                (0, variaveis_1.setUsuarioAtual)(valorAtual);
                                (0, menuCliente_1.menuCliente)();
                                console.clear();
                            }
                        });
                    }
                    else if (tipoCadastro == 1) {
                        variaveis_1.listaFuncionarios.forEach(function (element) {
                            if (element.eMail === eMail_1.toLowerCase() && (element.getSenha(1234) === Senha_1 || codigoRecuperacao_1 === codigoResposta_1)) {
                                (0, variaveis_1.setUsuarioAtual)(element);
                                (0, menuFuncionario_1.menuFuncionario)();
                                console.clear();
                            }
                        });
                    }
                    else if (tipoCadastro == 3) {
                        variaveis_1.listaFornecedores.forEach(function (valorAtual) {
                            if (valorAtual.eMail === eMail_1.toLowerCase() && (valorAtual.getSenha(1234) == Senha_1 || codigoRecuperacao_1 === codigoResposta_1)) {
                                (0, variaveis_1.setUsuarioAtual)(valorAtual);
                                (0, menuFornecedor_1.menuFornecedor)();
                                console.clear();
                            }
                        });
                    }
                }
                break;
            case 666:
                console.clear();
                (0, menuSecreto_1.menuSecreto)();
                break;
            case 0:
                console.clear();
                console.log("Fechando...");
                menu = false;
                break;
        }
    };
    while (menu) {
        _loop_1();
    }
}
