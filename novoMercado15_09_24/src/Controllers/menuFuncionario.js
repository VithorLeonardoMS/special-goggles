"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuFuncionario = menuFuncionario;
var variaveis_1 = require("../Utils/variaveis");
var encontrarPorID_1 = require("../Utils/IDs/encontrarPorID");
var adicionarProdutoEmLista_1 = require("../Utils/Produtos/adicionarProdutoEmLista");
var variaveis_2 = require("../Utils/variaveis");
var apagarPorID_1 = require("../Utils/IDs/apagarPorID");
var menuInicial_1 = require("./menuInicial");
var cadastrarClienteRl_1 = require("../Utils/Cadastro/cadastrarClienteRl");
var cadastrarFornecedorRl_1 = require("../Utils/Cadastro/cadastrarFornecedorRl");
var cadastrarFuncionario_1 = require("../Utils/Cadastro/cadastrarFuncionario");
var rl = require('readline-sync');
function menuFuncionario() {
    console.clear();
    var usuarioFuncionario = (0, variaveis_1.retornarFuncionario)();
    var menu = true;
    while (menu) {
        console.log("        ---------------\n      MENU DE FUNCION\u00C1RIO  \n        ---------------\n         1 - Cadastrar Cliente.\n         2 - Cadastrar Funcionario.\n         3 - Cadastrar Fornecedor.\n         4 - Comprar Produto pelo ID do fornecedor.\n         5 - Ver Estoque.\n         6 - Ver Caixa.\n         7 - Ver Funcionarios.\n         8 - Ver Fornecedores.\n         9 - Ver Clientes.\n         10 - Apagar Cliente\n         11 - Apagar Funcionario\n         12 - Apagar Fornecedor\n         13 - Apagar Produto\n         14 - Ver todos os produtos disponiveis\n         0 - LogOut.\n        ");
        var pergunta = rl.questionInt('Qual a opcao desejada? ');
        var escolhaRemover = void 0;
        switch (pergunta) {
            case 1:
                console.clear();
                if ((0, cadastrarClienteRl_1.cadastrarClienteRl)()) {
                    console.log("Cliente cadastrado com sucesso!");
                }
                break;
            case 2:
                console.clear();
                if ((0, cadastrarFuncionario_1.cadastrarFuncionarioRl)()) {
                    console.log("Funcionario cadastrado com sucesso!");
                }
                break;
            case 3:
                console.clear();
                if ((0, cadastrarFornecedorRl_1.cadastrarFornecedorRl)()) {
                    console.log("Fornecedor cadastrado com sucesso!");
                }
                break;
            case 4:
                console.clear();
                variaveis_1.listaFornecedores.forEach(function (fornecedor) {
                    console.log(fornecedor.getFornecedor());
                }); //Mostrando a lista de fornecedores
                var escolhaIDFornecedor = rl.questionInt('Qual id do fornecedor desejado? ');
                if ((0, encontrarPorID_1.encontrarPorID)(variaveis_1.listaFornecedores, escolhaIDFornecedor) >= 0) { //Se o id existir
                    var indiceFornecedor = (0, encontrarPorID_1.encontrarPorID)(variaveis_1.listaFornecedores, escolhaIDFornecedor);
                    variaveis_1.listaFornecedores[indiceFornecedor].produtos.forEach(function (produto) {
                        console.log(produto.getProduto());
                    }); //Mostra todos os produtos do fornecedor
                    var escolhaIDProduto = rl.questionInt('Qual o id do produto desejado? ');
                    //console.log(listaFornecedores[indiceFornecedor].produtos,'\n', escolhaIDProduto )
                    if ((0, encontrarPorID_1.encontrarPorID)(variaveis_1.listaFornecedores[indiceFornecedor].produtos, escolhaIDProduto) >= 0) { //Se o id existir
                        var indiceProduto = (0, encontrarPorID_1.encontrarPorID)(variaveis_1.listaFornecedores[indiceFornecedor].produtos, escolhaIDProduto);
                        var quantidadeMaximaPossivel = 0;
                        while ((quantidadeMaximaPossivel + 1) * variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra <= variaveis_2.caixaMercado && quantidadeMaximaPossivel + 1 <= variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].quantidadeProduto) { //resultara na maior quantidade possivel de compra
                            quantidadeMaximaPossivel++;
                        }
                        var quantidadeEscolhida = rl.questionInt("Quantos produtos deseja?[maximo de ".concat(quantidadeMaximaPossivel, "] "));
                        if (variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].analisarSeTem(quantidadeEscolhida)) { //Se a quantidade existir
                            console.log("Valor total: ".concat(quantidadeEscolhida * variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra, "\nValor em caixa: ").concat(variaveis_2.caixaMercado));
                            if (quantidadeEscolhida * variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra <= variaveis_2.caixaMercado && quantidadeEscolhida * variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra > 0) { //Se dinheiro for suficiente
                                console.log("Caixa depois da compra: ".concat(variaveis_2.caixaMercado - quantidadeEscolhida * variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra));
                                var confirmacao = rl.question('Tem certeza que deseja realizar compra?[sim ou nao] ');
                                if (confirmacao.toLowerCase() === 'sim') {
                                    variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].quantidadeProduto -= quantidadeEscolhida;
                                    (0, adicionarProdutoEmLista_1.adicionarProdutoEmLista)(variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto], quantidadeEscolhida, variaveis_1.listaProdutos);
                                    (0, variaveis_1.diminuirCaixa)(quantidadeEscolhida * variaveis_1.listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra);
                                    console.log('Compra realizada com sucesso! ');
                                }
                                else if (confirmacao.toLowerCase() == 'nao') {
                                    console.log('Compra cancelada.');
                                }
                                else {
                                    console.log('Opcao não reconhecida, compra cancelada.');
                                }
                            }
                            else {
                                console.log('Custo maior que caixa, compra cancelada.');
                            }
                        }
                        else {
                            console.log('Quantidade inválida.');
                        }
                    }
                    else {
                        console.log('ID do produto inexistente.');
                    }
                }
                else {
                    console.log('ID do fornecedor inexistente.');
                }
                break;
            case 5:
                console.clear();
                variaveis_1.listaProdutos.forEach(function (produto) {
                    console.log(produto.getProduto());
                });
                break;
            case 6:
                console.clear();
                console.log('Caixa do mercado:' + variaveis_2.caixaMercado);
                break;
            case 7:
                console.clear();
                variaveis_1.listaFuncionarios.forEach(function (funcionario) {
                    console.log(funcionario.getFuncionario());
                });
                break;
            case 8:
                console.clear();
                variaveis_1.listaFornecedores.forEach(function (fornecedor) {
                    console.log(fornecedor.getFornecedor());
                });
                break;
            case 9:
                console.clear();
                variaveis_1.listaClientes.forEach(function (cliente) {
                    console.log(cliente.getCliente());
                });
                break;
            case 10:
                console.clear();
                variaveis_1.listaClientes.forEach(function (valorAtual) {
                    console.log(valorAtual.getCliente());
                });
                escolhaRemover = rl.questionInt('Qual o CPF do cliente a ser removido? ');
                (0, apagarPorID_1.apagarPorID)(escolhaRemover, variaveis_1.listaClientes);
                break;
            case 11:
                console.clear();
                variaveis_1.listaFuncionarios.forEach(function (valorAtual) {
                    console.log(valorAtual.getFuncionario());
                });
                var escolhidoCPF = rl.questionInt('Qual o CPF do funcionario a ser removido? ');
                if (usuarioFuncionario.CPF === escolhidoCPF) {
                    var simOuNao = rl.question('Tem certeza que deseja apagar a sua propia conta?[sim ou nao] ');
                    if (simOuNao.toLowerCase() === 'sim') {
                        (0, apagarPorID_1.apagarPorID)(escolhidoCPF, variaveis_1.listaFuncionarios);
                        (0, menuInicial_1.menuInicial)();
                        console.clear();
                        (0, variaveis_1.setUsuarioAtual)(variaveis_1.usuarioNeutro);
                    }
                    else if (simOuNao.toLowerCase() === 'nao') {
                        console.log('Fornecedor não removido');
                    }
                }
                else {
                    (0, apagarPorID_1.apagarPorID)(escolhidoCPF, variaveis_1.listaFuncionarios);
                }
                break;
            case 12:
                console.clear();
                variaveis_1.listaFornecedores.forEach(function (valorAtual) {
                    console.log(valorAtual.getFornecedor());
                });
                var escolhidoID = rl.questionInt('Qual o ID do fornecedor a ser removido? ');
                (0, apagarPorID_1.apagarPorID)(escolhidoID, variaveis_1.listaFornecedores);
                break;
            case 13:
                console.clear();
                variaveis_1.listaProdutos.forEach(function (valorAtual) {
                    console.log(valorAtual.getProduto());
                });
                escolhaRemover = rl.questionInt('Qual o ID do produto a ser removido? ');
                (0, apagarPorID_1.apagarPorID)(escolhaRemover, variaveis_1.listaProdutos);
                break;
            case 14:
                console.clear();
                variaveis_1.listaFornecedores.forEach(function (valorAtual) {
                    valorAtual.produtos.forEach(function (valorAtualProduto) {
                        console.log('ID do fornecedor: ' + valorAtual.ID + '\n' + valorAtualProduto.getProduto());
                    });
                });
                break;
            case 0:
                console.clear();
                console.log("Fechando...");
                menu = false;
                (0, variaveis_1.setUsuarioAtual)((0, variaveis_1.getUsuarioNeutro)());
                break;
            default:
                console.clear();
                console.log('Opção não reconhecida');
                break;
        }
    }
}
