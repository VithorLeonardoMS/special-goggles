"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuFornecedor = menuFornecedor;
var variaveis_1 = require("../Utils/variaveis");
//.
var rl = require('readline-sync');
function menuFornecedor() {
    console.clear();
    var usuarioFornecedor = (0, variaveis_1.retornarFornecedor)();
    var menu = true;
    while (menu) {
        console.log("       -----------\n       MENU DE FORNECEDOR\n           ----------\n        1 - Ver Conta.\n        2 - Editar Conta.\n        3 - Adicionar produtos a venda.\n        4 - Ver produtos a venda.\n        0 - LogOut.\n        ");
        var escolha = rl.questionInt("Resposta: \n");
        switch (escolha) {
            case 1:
                console.clear();
                console.log(usuarioFornecedor.getFornecedor(), '        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
                break;
            case 2:
                console.clear();
                usuarioFornecedor.setFornecedor();
                break;
            case 3:
                console.clear();
                var todosProdutosFornecedores = variaveis_1.listaFornecedores.reduce(function (acumuladorFinal, fornecedorAtual) {
                    return acumuladorFinal.concat(fornecedorAtual.produtos.reduce(function (acumuladorProdutos, produtoAtual) {
                        acumuladorProdutos.push(produtoAtual.copiarProduto());
                        return acumuladorProdutos;
                    }, []));
                }, []); //Retorna uma array que junta todos os produos de todos os fornecedores
                usuarioFornecedor.adicionarProdutos(variaveis_1.IDsRemovidosProdutos, todosProdutosFornecedores);
                console.log("Produto adicionado com sucesso.");
                break;
            case 4:
                console.clear();
                for (var i = 0; i < usuarioFornecedor.produtos.length; i++) {
                    console.log(usuarioFornecedor.produtos[i].getProduto());
                }
                break;
            case 0:
                console.clear();
                menu = false;
                (0, variaveis_1.setUsuarioAtual)((0, variaveis_1.getUsuarioNeutro)());
                console.log("Saindo...");
                break;
            default:
                console.clear();
                console.log("Opcao nao reconhecida.");
                break;
        }
    }
}
