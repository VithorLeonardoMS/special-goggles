import { Funcionario } from "../Model/Funcionario";
import { Fornecedor } from "../Model/Fornecedor";
import { Cliente } from "../Model/Cliente";
import { listaFornecedores, listaClientes, listaFuncionarios, listaProdutos, usuarioAtual, setUsuarioAtual, usuarioNeutro, getUsuarioNeutro, diminuirCaixa, retornarFuncionario} from "../Utils/variaveis"
import { encontrarPorID } from "../Utils/IDs/encontrarPorID"
import { adicionarProdutoEmLista } from "../Utils/Produtos/adicionarProdutoEmLista"
import { caixaMercado } from "../Utils/variaveis"
import { apagarPorID } from "../Utils/IDs/apagarPorID"
import { menuInicial } from "./menuInicial"
import { cadastrarClienteRl } from "../Utils/Cadastro/cadastrarClienteRl"
import { cadastrarFornecedorRl } from "../Utils/Cadastro/cadastrarFornecedorRl"
import { cadastrarFuncionarioRl } from "../Utils/Cadastro/cadastrarFuncionario"

let rl = require('readline-sync')


export function menuFuncionario() {
    console.clear()
    let usuarioFuncionario = retornarFuncionario()
    let menu: boolean = true
    while (menu) {
        console.log(`        ---------------
      MENU DE FUNCIONÁRIO  
        ---------------
         1 - Cadastrar Cliente.
         2 - Cadastrar Funcionario.
         3 - Cadastrar Fornecedor.
         4 - Comprar Produto pelo ID do fornecedor.
         5 - Ver Estoque.
         6 - Ver Caixa.
         7 - Ver Funcionarios.
         8 - Ver Fornecedores.
         9 - Ver Clientes.
         10 - Apagar Cliente
         11 - Apagar Funcionario
         12 - Apagar Fornecedor
         13 - Apagar Produto
         14 - Ver todos os produtos disponiveis
         0 - LogOut.
        `)

        let pergunta = rl.questionInt('Qual a opcao desejada? ')
        let escolhaRemover: number

        switch (pergunta) {
            case 1:
                console.clear()
                if (cadastrarClienteRl()) {
                    console.log("Cliente cadastrado com sucesso!")
                }
                break;
            case 2:
                console.clear()
                if (cadastrarFuncionarioRl()) {
                    console.log("Funcionario cadastrado com sucesso!")
                }
                break;
            case 3:
                console.clear()
                if (cadastrarFornecedorRl()) {
                    console.log("Fornecedor cadastrado com sucesso!")
                }
                break;
            case 4:
                console.clear()
                listaFornecedores.forEach((fornecedor) => {
                    console.log(fornecedor.getFornecedor())
                })//Mostrando a lista de fornecedores
                let escolhaIDFornecedor = rl.questionInt('Qual id do fornecedor desejado? ')
                if (encontrarPorID(listaFornecedores, escolhaIDFornecedor) >= 0) {//Se o id existir
                    let indiceFornecedor = encontrarPorID(listaFornecedores, escolhaIDFornecedor)
                    listaFornecedores[indiceFornecedor].produtos.forEach((produto) => {
                        console.log(produto.getProduto())
                    })//Mostra todos os produtos do fornecedor
                    let escolhaIDProduto = rl.questionInt('Qual o id do produto desejado? ')
                    //console.log(listaFornecedores[indiceFornecedor].produtos,'\n', escolhaIDProduto )
                    if (encontrarPorID(listaFornecedores[indiceFornecedor].produtos, escolhaIDProduto) >= 0) {//Se o id existir
                        let indiceProduto = encontrarPorID(listaFornecedores[indiceFornecedor].produtos, escolhaIDProduto)
                        let quantidadeMaximaPossivel = 0
                        while ((quantidadeMaximaPossivel + 1) * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra <= caixaMercado && quantidadeMaximaPossivel + 1<= listaFornecedores[indiceFornecedor].produtos[indiceProduto].quantidadeProduto) {//resultara na maior quantidade possivel de compra
                            quantidadeMaximaPossivel++
                        }
                        let quantidadeEscolhida = rl.questionInt(`Quantos produtos deseja?[maximo de ${quantidadeMaximaPossivel}] `)

                        if (listaFornecedores[indiceFornecedor].produtos[indiceProduto].analisarSeTem(quantidadeEscolhida)) {//Se a quantidade existir
                            console.log(`Valor total: ${quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra}\nValor em caixa: ${caixaMercado}`)

                            if (quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra <= caixaMercado && quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra > 0) {//Se dinheiro for suficiente
                                console.log(`Caixa depois da compra: ${caixaMercado - quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra}`);
                                let confirmacao = rl.question('Tem certeza que deseja realizar compra?[sim ou nao] ')
                                if (confirmacao.toLowerCase() === 'sim'){
                                    listaFornecedores[indiceFornecedor].produtos[indiceProduto].quantidadeProduto -= quantidadeEscolhida
                                    adicionarProdutoEmLista(listaFornecedores[indiceFornecedor].produtos[indiceProduto], quantidadeEscolhida, listaProdutos)
                                    diminuirCaixa(quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra)
                                    console.log('Compra realizada com sucesso! ');

                                } else if (confirmacao.toLowerCase() == 'nao'){
                                    console.log('Compra cancelada.');

                                } else {
                                    console.log('Opcao não reconhecida, compra cancelada.');

                                }

                            } else {
                                console.log('Custo maior que caixa, compra cancelada.');

                            }

                        } else {
                            console.log('Quantidade inválida.');

                        }

                    } else {
                        console.log('ID do produto inexistente.');

                    }

                } else {
                    console.log('ID do fornecedor inexistente.');

                }
                break;
            case 5:
                console.clear()
                listaProdutos.forEach((produto) => {
                    console.log(produto.getProduto())
                })
                break;
            case 6:
                console.clear()
                console.log('Caixa do mercado:' + caixaMercado)
                break;
            case 7:
                console.clear()
                listaFuncionarios.forEach((funcionario) => {
                    console.log(funcionario.getFuncionario())
                })
                break;
            case 8:
                console.clear()
                listaFornecedores.forEach((fornecedor) => {
                    console.log(fornecedor.getFornecedor())
                })
                break;
            case 9:
                console.clear()
                listaClientes.forEach((cliente) => {
                    console.log(cliente.getCliente())
                })
                break;
            case 10:
                console.clear()
                listaClientes.forEach((valorAtual) => {
                    console.log(valorAtual.getCliente())
                })
                escolhaRemover = rl.questionInt('Qual o CPF do cliente a ser removido? ')
                apagarPorID(escolhaRemover, listaClientes)
                break;
            case 11:
                console.clear()
                listaFuncionarios.forEach((valorAtual) => {
                    console.log(valorAtual.getFuncionario())
                })
                let escolhidoCPF = rl.questionInt('Qual o CPF do funcionario a ser removido? ')
                if (usuarioFuncionario.CPF === escolhidoCPF) {
                    let simOuNao = rl.question('Tem certeza que deseja apagar a sua propia conta?[sim ou nao] ')
                    if (simOuNao.toLowerCase() === 'sim'){
                        apagarPorID(escolhidoCPF, listaFuncionarios)
                        menuInicial()
                        console.clear()
                        setUsuarioAtual(usuarioNeutro)
                    } else if (simOuNao.toLowerCase() === 'nao') {
                        console.log('Fornecedor não removido');
                    }
                } else {
                    apagarPorID(escolhidoCPF, listaFuncionarios)
                }
                break;
            case 12:
                console.clear()
                listaFornecedores.forEach((valorAtual) => {
                    console.log(valorAtual.getFornecedor())
                })
                let escolhidoID = rl.questionInt('Qual o ID do fornecedor a ser removido? ')
                apagarPorID(escolhidoID, listaFornecedores)
                break;
            case 13:
            console.clear()
                listaProdutos.forEach((valorAtual) => {
                    console.log(valorAtual.getProduto())
                })
                escolhaRemover = rl.questionInt('Qual o ID do produto a ser removido? ')
                apagarPorID(escolhaRemover, listaProdutos)
                break;
            case 14:
                console.clear()
                listaFornecedores.forEach((valorAtual) => {
                    valorAtual.produtos.forEach((valorAtualProduto) => {
                        console.log('ID do fornecedor: ' + valorAtual.ID + '\n' + valorAtualProduto.getProduto());
                    })
                })
                break;
            case 0:
                console.clear()
                console.log("Fechando...")
                menu = false
                setUsuarioAtual(getUsuarioNeutro())
                break;

            default:
                console.clear()
                console.log('Opção não reconhecida')
                break;
        }
    }
}