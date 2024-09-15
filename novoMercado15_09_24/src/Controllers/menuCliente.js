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
exports.menuCliente = menuCliente;
var adicionarProdutoEmLista_1 = require("../Utils/Produtos/adicionarProdutoEmLista");
var cadastrarVenda_1 = require("../Utils/Cadastro/cadastrarVenda");
var encontrarPorID_1 = require("../Utils/IDs/encontrarPorID");
var variaveis_1 = require("../Utils/variaveis");
var retirarQuantidadeProduto_1 = require("../Utils/Produtos/retirarQuantidadeProduto");
var cadastrarNotaFiscal_1 = require("../Utils/Cadastro/cadastrarNotaFiscal");
//.
var rl = require('readline-sync');
function menuCliente() {
    console.clear();
    var usuarioCliente = (0, variaveis_1.retornarCliente)();
    var menu = true;
    var _loop_1 = function () {
        console.log("            ---------------\n            MENU DE CLIENTE\n            ---------------\n            1 - Ver Conta.\n            2 - Alterar Conta.\n            3 - Ver Carrinho.\n            4 - Adicionar Produtos ao Carrinho.\n            5 - Finalizar Compras.\n            6 - Remover item do carrinho.\n            7 - Ver todas notas fiscais.\n            8 - Analizar nota fiscal detalhadamente.\n            0 - LogOut.\n        ");
        var escolha = rl.questionInt("Resposta: ");
        switch (escolha) {
            case 1:
                console.clear();
                console.log(usuarioCliente.getCliente());
                break;
            case 2:
                console.clear();
                usuarioCliente.setCliente();
                break;
            case 3:
                console.clear();
                var verTotalCarrinho_1 = 0;
                variaveis_1.carrinho.forEach(function (valorAtual) {
                    console.log(valorAtual.getProdutoSimples(), '\n');
                    verTotalCarrinho_1 += valorAtual.precoVenda * valorAtual.quantidadeProduto;
                });
                console.log("TOTAL: R$".concat(verTotalCarrinho_1));
                break;
            case 4:
                console.clear();
                console.log('\n');
                variaveis_1.listaProdutos.forEach(function (valorAtual) {
                    console.log(valorAtual.getSimplesSemTotal());
                });
                var IDSelecionado_1 = rl.questionInt("       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n \nEscolha o ID do produto desejado: ");
                console.clear();
                if ((0, encontrarPorID_1.encontrarPorID)(variaveis_1.listaProdutos, IDSelecionado_1) >= 0) {
                    var produtoEscolhido = variaveis_1.listaProdutos[(0, encontrarPorID_1.encontrarPorID)(variaveis_1.listaProdutos, IDSelecionado_1)].copiarProduto();
                    var jaNoCarrinho = variaveis_1.carrinho.reduce(function (acumulador, produtoTeste) {
                        if (produtoTeste.ID === IDSelecionado_1) {
                            return acumulador + produtoTeste.quantidadeProduto;
                        }
                        else {
                            return acumulador;
                        }
                    }, 0);
                    var totalNoCarrinho = variaveis_1.carrinho.reduce(function (acumulador, produtoAtual) {
                        return acumulador + produtoAtual.quantidadeProduto * produtoAtual.precoVenda;
                    }, 0);
                    var quantidadeMaximaPossivel = 0;
                    while ((quantidadeMaximaPossivel + 1) * produtoEscolhido.precoVenda <= usuarioCliente.dinheiro - totalNoCarrinho && quantidadeMaximaPossivel + 1 <= produtoEscolhido.quantidadeProduto - jaNoCarrinho) {
                        quantidadeMaximaPossivel++;
                    }
                    var menuQuant = true;
                    while (menuQuant) {
                        var quantidadeEscolhida = rl.questionInt("Quantos deseja? [maximo de ".concat(quantidadeMaximaPossivel, "]: "));
                        if (quantidadeEscolhida > 0 && quantidadeEscolhida <= quantidadeMaximaPossivel) {
                            (0, adicionarProdutoEmLista_1.adicionarProdutoEmLista)(produtoEscolhido, quantidadeEscolhida, variaveis_1.carrinho);
                            console.log("".concat(quantidadeEscolhida, " produtos adicinados ao carrinho."));
                            menuQuant = false;
                        }
                        else if (quantidadeEscolhida > 0) {
                            console.log("Não há produtos o suficiente, tente novamente [-1 para cancelar]");
                        }
                        else if (quantidadeEscolhida < -1) {
                            console.log('Valor inválido, tente novamete [-1 para cancelar]');
                        }
                        else if (quantidadeEscolhida === -1) {
                            menuQuant = false;
                        }
                        else {
                            console.log('Erro [-1 para cancelar]');
                        }
                    }
                }
                else {
                    console.log("Nenhum produto foi selecionado.");
                }
                break;
            case 5:
                console.clear();
                var custo = 0;
                var totalCarrinho_1 = 0;
                variaveis_1.carrinho.forEach(function (produtoAtual) {
                    console.log(produtoAtual.getProdutoSimples());
                    totalCarrinho_1 += produtoAtual.precoVenda * produtoAtual.quantidadeProduto;
                });
                console.log('       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
                console.log("Total: R$".concat(totalCarrinho_1));
                var Comprar = rl.question("Tem certeza que deseja comprar os itens no carrinho? [sim / nao] ").toLowerCase();
                for (var i = 0; i < variaveis_1.carrinho.length; i++) {
                    custo = custo + variaveis_1.carrinho[i].precoVenda * variaveis_1.carrinho[i].quantidadeProduto;
                }
                var vendasAgora_1 = [];
                if (Comprar == 'sim' && usuarioCliente.dinheiro >= custo) {
                    console.log("----------------------------------COMPRA CONCLUÍDA!----------------------------------");
                    variaveis_1.carrinho.forEach(function (produtoAtual) {
                        (0, cadastrarVenda_1.cadastrarVenda)(produtoAtual.precoVenda, produtoAtual.quantidadeProduto, usuarioCliente.CPF, produtoAtual.ID, produtoAtual);
                        vendasAgora_1.push(variaveis_1.listaVendas[variaveis_1.listaVendas.length - 1]);
                        (0, retirarQuantidadeProduto_1.retirarQuantidadeProduto)(produtoAtual.ID, produtoAtual.quantidadeProduto);
                    });
                    usuarioCliente.dinheiro -= totalCarrinho_1;
                    (0, cadastrarNotaFiscal_1.cadastrarNotaFiscal)(vendasAgora_1, usuarioCliente);
                    console.log('Nota Fiscal: \n' + variaveis_1.listaNotasFiscais[variaveis_1.listaNotasFiscais.length - 1].getNotaFiscal());
                    vendasAgora_1 = [];
                    (0, variaveis_1.clearCarrinho)();
                }
                else if (Comprar == 'nao') {
                    console.log("Compra Não concluída.");
                }
                else {
                    console.log("Ocorreu um erro. Verifique sua conta e tente novamente.");
                }
                break;
            case 6:
                console.clear();
                variaveis_1.carrinho.forEach(function (valorAtual, indice) {
                    console.log(valorAtual.getProdutoSimples());
                });
                var tamanhoAntes = variaveis_1.carrinho.length;
                var removeID_1 = rl.questionInt("Insira o ID do item que deseja remover: ");
                variaveis_1.carrinho.splice.apply(variaveis_1.carrinho, __spreadArray([0, variaveis_1.carrinho.length], variaveis_1.carrinho.filter(function (produtoFilter) {
                    produtoFilter.ID !== removeID_1;
                }), false));
                var tamanhoDepois = variaveis_1.carrinho.length;
                if (tamanhoAntes > tamanhoDepois) {
                    console.log('Item removido.');
                }
                else {
                    console.log('Item não encontrado.');
                }
                break;
            case 7:
                console.clear();
                console.log(usuarioCliente.mostrarNotasFiscais(), '\n');
                break;
            case 8:
                console.clear();
                console.log(usuarioCliente.mostrarNotasFiscais());
                var IDNotaFiscal = rl.questionInt('Qual o ID da nota fiscal que deseja analizar detalhadamente? ');
                if ((0, encontrarPorID_1.encontrarPorID)(usuarioCliente.notasFiscais, IDNotaFiscal) > -1) {
                    console.log(usuarioCliente.getNotaFiscalPorID(IDNotaFiscal));
                }
                else {
                    console.log('ID não encontrado');
                }
                break;
            case 0:
                console.clear();
                menu = false;
                console.log("Saindo...");
                (0, variaveis_1.setUsuarioAtual)((0, variaveis_1.getUsuarioNeutro)());
                break;
            default:
                console.clear();
                console.log("OPCAO NAO RECONHECIDA.");
                break;
        }
    };
    while (menu) {
        _loop_1();
    }
}
