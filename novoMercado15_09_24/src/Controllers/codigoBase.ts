import { Cliente } from '../Model/Cliente'
import { Fornecedor } from '../Model/Fornecedor'
import { Produto } from "../Model/Produto";
import { Funcionario } from "../Model/Funcionario";
import { Venda } from "../Model/Venda";
import { NotaFiscal } from '../Model/NotaFiscal';
import { exec } from 'child_process';



const path = require( 'path'    );
let rl = require('readline-sync');

let produtoA = new Produto('Agua do banho do sor leo', 0, 50, 10, 80                     )
let produtoB = new Produto('Tufo de cabelo do sor Iuri (Edição limitada)', 1, 40, 20, 100)
let produtoC = new Produto('Cuticula do sor Lucas',2,80,50,30                            )
//produtos para testes

let listaProdutos: Produto[] = [new Produto('Agua do banho do sor leo', 0, 50, 10, 80), produtoB, produtoC]
let listaClientes: Cliente[] = [new Cliente(123, 'rua', 'Eduardo', '123', 'cliente', 999), new Cliente(2, '', 'teste', '123', 'teste', 999)]
let listaFornecedores: Fornecedor[] = [new Fornecedor(0, 'Inferior da Ponte', 'Guilherme', '123', 'forn'), new Fornecedor(1, 'rua', 'ze', '123', 'teste')]
let listaVendas: Venda[] = []
let listaFuncionarios: Funcionario[] = [new Funcionario(1234, 999, "123", 'vithor', 'func'), new Funcionario(2, 99, '123', 'teste', 'teste')]
let carrinho: Produto[] = []
let listaNotasFiscais: NotaFiscal[] = []

let CaixaMercado = 1000;
//BANCO DE DADOS

listaFornecedores[0].produtos.push(produtoA)
listaFornecedores[1].produtos.push(produtoB)


let usuarioNeutro = new Cliente(0, '', '', '123', '', 0)
usuarioNeutro.alterarTipo('Neutro', 1234)

let usuarioAtual: Cliente | Fornecedor | Funcionario
//Usuario atual logado

let IDsRemovidosProdutos: number[] = []
let IDsRemovidosVenda: number[] = []
let IDsRemovidosFornecedor: number[] = []
let IDsRemovidosNotasFiscais: number[] = []
//Quando um id é removido(um objeto que possui id) ele deve entrar na lista respectiva, assim esses ids são novamente aproveitados na função "definirNovoID" como argumento

function adicionarProdutoEmLista(produto: Produto, quantidadeProduto: number, listaClasse: Produto[]): boolean {
    let produtoCarrinho = produto.copiarProduto()
    let produtoVerificacao: boolean = listaClasse.filter((produtoFilter: Produto) => {
        return produtoFilter.ID === produtoCarrinho.ID
    }).length === 1 // verifica se o existe produto com este id na listaClasse

    if (produtoVerificacao) {

        listaClasse.forEach((valorAtual, indice) => {
            if (valorAtual.ID === produtoCarrinho.ID) {
                listaClasse[indice].quantidadeProduto += quantidadeProduto;
            }
        })
        return true
    } else {
        produtoCarrinho.quantidadeProduto = quantidadeProduto
        listaClasse.push(produtoCarrinho)
        return false//False se o produto ainda não existir na lista 
    }

}

function definirNovoID(IDsRemovidos: number[], listaClasse: Produto[] | Venda[] | NotaFiscal[] | Fornecedor[]): number {
    
    if (IDsRemovidos.length > 0) {
        return IDsRemovidos.reduce(function (resultante, valoresAnalisados) {
            return Math.min(resultante, valoresAnalisados)
        })//Resumidamente o reduce consegue executar uma função determinada item por item na array, no caso resultará no menor valor
    } else {
        return listaClasse.length
        
    }
}
function testeCPF(CPFteste: number, listaClasse: Funcionario[] | Cliente[]): boolean {
    let executavel = true;
    for (let i = 0; i < listaClasse.length; i++) {
        if (listaClasse[i].CPF === CPFteste) {
            executavel = false;
        }
    }
    return executavel;
}

function testeEmail(Emailteste: string, listaClasse: Funcionario[] | Cliente[] | Fornecedor[]) {
    let executavel = true;
    for (let i = 0; i < listaClasse.length; i++) {
        if (listaClasse[i].eMail === Emailteste) {
            executavel = false;
        }
    }
    return executavel;
}

//Cadastra o Produto
function cadastrarProduto(): void {
    let nomeProduto = rl.question('Produto: ')
    let quantidadeProduto = rl.questionInt('Quantidade: ')
    let precoCompra = rl.questionInt('Preco de fabrica: ')
    let precoVenda = rl.questionInt('Preco de venda: ')
    let ID = definirNovoID(IDsRemovidosProdutos, listaProdutos)
    listaProdutos.push(new Produto(nomeProduto, ID, precoVenda, quantidadeProduto, precoCompra))
}

//CADASTRAR CLIENTE
function cadastrarCliente(): boolean {
    let CPFCliente = rl.questionInt('CPF: ')
    while (!testeCPF(CPFCliente, listaClientes) && CPFCliente !== -1) {
        CPFCliente = rl.questionInt('Este CPF ja esta cadastrado... \nTente outro CPF(Digite [-1] para cancelar): ')
    }
    if (CPFCliente === -1) {
        console.log('Cadastramento cancelado.')
        return false
    } else {
        let eMail = rl.question('E-Mail: ')
        while (!testeEmail(eMail, listaClientes) && eMail !== '-1') {
            eMail = rl.question('Este e-mail ja esta cadastrado... \nTente outro e-mail(Digite [-1] para cancelar): ')
        }
        if (eMail === '-1') {
            console.log('Cadastramento cancelado.')
            return false
        } else {
            let enderecoCliente = rl.question('Endereco do cliente: ')
            let nomeCliente = rl.question('Nome: ')
            let senhaCliente = rl.question('Senha: ')
            let dinheiro = rl.questionInt('Saldo disponivel na conta bancaria: ')

            listaClientes.push(new Cliente(CPFCliente, enderecoCliente, nomeCliente, senhaCliente, eMail, dinheiro))
            return true
        }
    }


}


function cadastrarFornecedor(): boolean { //Função fornecedor.

    let novoNomeFornecedor
    let novaSenhaFornecedor
    let novoEnderecoFornecedor
    let ID
    let novoEmail = rl.question('Insira o e-mail: ')
    while (!testeEmail(novoEmail, listaFornecedores) && novoEmail !== '-1') {
        novoEmail = rl.question('Este e-mail ja esta em uso. \n Insira outro e-mail(Digite [-1] para cancelar):')
    }
    if (novoEmail !== '-1') {
        novoNomeFornecedor = rl.question("Insira o Nome do novo fornecedor: ")
        novaSenhaFornecedor = rl.question("Insira a senha do novo Fornecedor: ")
        novoEnderecoFornecedor = rl.question("Insira o endereco do novo Fornecedor: ")
        ID = definirNovoID(IDsRemovidosFornecedor, listaFornecedores)
        listaFornecedores.push(new Fornecedor(ID, novoEnderecoFornecedor, novoNomeFornecedor, novaSenhaFornecedor, novoEmail))
        return true
    } else if (novoEmail === '-1') {
        console.log('Cadastramento cancelado.')
        return false
    }
    return true
}

function encontrarPorID(listaClasse: Cliente[] | Fornecedor[] | Funcionario[] | NotaFiscal[] | Produto[] | Venda[], ID: number): number {//Retorna o indice pelo ID, retorna -1 se não existir
    let retorno: number = -1
    listaClasse.forEach((valorAtual, indice: number) => {
        if (valorAtual.ID === ID) {
            retorno = indice
        }
    })
    return retorno
}
function CadastrarFuncionario(): boolean { //Funcao Funcionario.

    let CPFNovoFuncionario = rl.questionInt("Insira o CPF do novo funcionario: ")
    while (!testeCPF(CPFNovoFuncionario, listaFuncionarios) && CPFNovoFuncionario !== -1) {
        CPFNovoFuncionario = rl.questionInt('Este CPF ja esta cadastrado... \nTente outro CPF(-1 para cancelar): ')
    }
    if (CPFNovoFuncionario === -1) {
        console.log('Cadastramento cancelado.')
        return false
    }
    let novoEmailFuncionario = rl.question("Insira o E-Mail do novo funcionario: ")
    while (!testeEmail(novoEmailFuncionario, listaFornecedores) && novoEmailFuncionario !== '-1') {
        novoEmailFuncionario = rl.question('Este e-mail ja esta em uso. \n Insira outro e-mail(Digite [-1] para cancelar):')
    }
    if (novoEmailFuncionario !== '-1') {
        let NovoNomeFuncionario = rl.question("Insira o Nome do novo funcionario: ")
        let NovaSenhaFuncionario = rl.question("Insira a senha do novo funcionario: ")
        let NovoSalario = rl.questionInt("Insira o salario do novo funcionario: ")
        listaFuncionarios.push(new Funcionario(CPFNovoFuncionario, NovoSalario, NovaSenhaFuncionario, NovoNomeFuncionario, novoEmailFuncionario))
        return true;

    } else if (novoEmailFuncionario === '-1') {
        console.log('Cadastramento cancelado.')
        return false
    }
    return true;
}

function cadastrarVenda(valorProduto: number, quantidadeVenda: number,CPFCliente: number, IDProduto: number, produto: Produto): void {
    let IDVenda = definirNovoID(IDsRemovidosVenda, listaVendas)
    listaVendas.push(new Venda(valorProduto, quantidadeVenda, IDVenda, CPFCliente, produto))
}

function apagarPorID(ID: number, listaClasse: Cliente[] | Fornecedor[] | Funcionario[] | Venda[] | Produto[] | NotaFiscal[]) {
    if (listaClasse.length < 1) {
        console.log('Erro')
    } else {
        switch (listaClasse[0].tipo) {
            case "Cliente":
                listaClientes = listaClientes.filter(item => item.CPF != ID)
                break;
            case "Funcionario":
                listaFuncionarios = listaFuncionarios.filter(item => item.CPF != ID)
                break;
            case "Fornecedor":
                listaFornecedores = listaFornecedores.filter(item => item.ID != ID)
                break
            case "Venda":
                listaVendas = listaVendas.filter(item => item.ID != ID)
                break
            case "Produto":
                listaProdutos = listaProdutos.filter(item => item.ID != ID)
                break
            case 'NotaFiscal':
                listaNotasFiscais = listaNotasFiscais.filter(item => item.ID != ID)
                break
            default:
                console.log('Erro em "apagarPorID"');

                break;
        }
    }
}

function cadastrarNotaFiscal(vendas: Venda[], cliente:Cliente,) {
    let IDNF:number = definirNovoID(IDsRemovidosNotasFiscais, listaNotasFiscais)
    listaNotasFiscais.push(new NotaFiscal(vendas, IDNF))
    cliente.notasFiscais.push(new NotaFiscal(vendas, IDNF))
}

function retirarQuantidadeProduto(ID: number, quantidade: number) {
    listaProdutos.forEach((valorAtual, indice) => {
        if (valorAtual.ID === ID) {
            valorAtual.diminuirQuantidade(quantidade)
        }
    })
}

let Cadastro = 0


function entrarMenu1() { //MENU INICIAL

    let menu = true;
    while (menu) {
        console.log
            (`       ------------
       MENU INICIAL
       ------------
       1 - Cadastrar-se como cliente.
       2 - Login.
       0 - Sair.
    `)

        let pergunta2 = rl.questionInt('Qual a opcao desejada? ')
        switch (pergunta2) {
            case 1:
                if (cadastrarCliente()) {
                    usuarioAtual = listaClientes[listaClientes.length - 1]
                    console.log("Usuario cadastrado com sucesso!")
                    menuCliente()
                }

                break;
            case 2:
                let escolhaNova = rl.questionInt("\n 1- Logar como Funcionario.\n 2- Logar como Cliente.\n 3- Logar como Fornecedor.\n----------------------------\nRESPOSTA: ")
                switch (escolhaNova) {
                    case 1:
                        Cadastro = 1;
                        break;
                    case 2:
                        Cadastro = 2;
                        break;
                    case 3:
                        Cadastro = 3;
                        break;

                    default: console.log("Opção não reconhecida.")
                        Cadastro = 0
                        break;
                }
                let codigoResposta = 'x'
                let codigoRecuperacao = 'y'
                if (Cadastro != 0) {
                    let eMail = rl.question("Insira seu Email: ")
                    let Senha = rl.question("(INSIRA '0' CASO TENHA ESQUECIDO SUA SENHA) \n Insira sua senha: ")
                    if (Senha == '0') {
                        codigoRecuperacao = `${Math.floor(Math.random() * 9)}`
                        codigoRecuperacao += `${Math.floor(Math.random() * 9)}`
                        codigoRecuperacao += `${Math.floor(Math.random() * 9)}`
                        codigoRecuperacao += `${Math.floor(Math.random() * 9)}`
                        codigoRecuperacao += `${Math.floor(Math.random() * 9)}`

                        console.log(codigoRecuperacao)
                        codigoResposta = rl.question('Nos enviamos um codigo de verificacao para seu "email".\n Codigo: ')
                    }
                    if (Cadastro == 2) {
                        listaClientes.forEach((valorAtual) => {
                            if (valorAtual.eMail === eMail.toLowerCase() && (valorAtual.getSenha(1234) === Senha || codigoRecuperacao === codigoResposta)) {
                                usuarioAtual = valorAtual
                                menuCliente()
                            }
                        })
                    }
                    else if (Cadastro == 1) {
                        listaFuncionarios.forEach((element) => {
                            if (element.eMail === eMail.toLowerCase() && (element.getSenha(1234) === Senha || codigoRecuperacao === codigoResposta)) {
                                usuarioAtual = element
                                menuAdm()
                            }
                        })
                    }
                    else if (Cadastro == 3) {
                        listaFornecedores.forEach((valorAtual) => {
                            if (valorAtual.eMail === eMail.toLowerCase() && (valorAtual.getSenha(1234) == Senha || codigoRecuperacao === codigoResposta)) {
                                usuarioAtual = valorAtual
                                menuCadastroFornecedor()
                            }
                        })
                    }
                }
                break;
            case 666:
                menuSecreto()
                break
            case 0:
                console.log("Fechando...")
                menu = false;

                break;

        }
    }
}

let fornecedorEscolhido1: Fornecedor
function menuAdm() { //MENU PARA ADMINISTRADOR
    let menu2: boolean = true
    while (menu2) {
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

        let pergunta1 = rl.questionInt('Qual a opcao desejada? ')
        let escolhaRemover: number

        switch (pergunta1) {
            case 1:
                if (cadastrarCliente()) {
                    console.log("Cliente cadastrado com sucesso!")
                }
                break;
            case 2:
                if (CadastrarFuncionario()) {
                    console.log("Funcionario cadastrado com sucesso!")
                }
                break;
            case 3:
                if (cadastrarFornecedor()) {
                    console.log("Fornecedor cadastrado com sucesso!")
                }
                break;
            case 4:
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
                        while ((quantidadeMaximaPossivel + 1) * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra <= CaixaMercado && quantidadeMaximaPossivel + 1<= listaFornecedores[indiceFornecedor].produtos[indiceProduto].quantidadeProduto) {//resultara na maior quantidade possivel de compra
                            quantidadeMaximaPossivel++
                        }
                        let quantidadeEscolhida = rl.questionInt(`Quantos produtos deseja?[maximo de ${quantidadeMaximaPossivel}] `)

                        if (listaFornecedores[indiceFornecedor].produtos[indiceProduto].analisarSeTem(quantidadeEscolhida)) {//Se a quantidade existir
                            console.log(`Valor total: ${quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra}\nValor em caixa: ${CaixaMercado}`)

                            if (quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra <= CaixaMercado && quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra > 0) {//Se dinheiro for suficiente
                                console.log(`Caixa depois da compra: ${CaixaMercado - quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra}`);
                                let confirmacao = rl.question('Tem certeza que deseja realizar compra?[sim ou nao] ')

                                if (confirmacao.toLowerCase() === 'sim') {
                                    listaFornecedores[indiceFornecedor].produtos[indiceProduto].quantidadeProduto -= quantidadeEscolhida
                                    adicionarProdutoEmLista(listaFornecedores[indiceFornecedor].produtos[indiceProduto], quantidadeEscolhida, listaProdutos)
                                    CaixaMercado -= quantidadeEscolhida * listaFornecedores[indiceFornecedor].produtos[indiceProduto].precoCompra
                                    console.log('Compra realizada com sucesso! ');
                                } else if (confirmacao.toLowerCase() == 'nao') {
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
                listaProdutos.forEach((produto) => {
                    console.log(produto.getProduto())
                })
                break;
            case 6:
                console.log('Caixa do mercado:' + CaixaMercado)
                break;
            case 7:
                listaFuncionarios.forEach((funcionario) => {
                    console.log(funcionario.getFuncionario())
                })
                break;
            case 8:
                listaFornecedores.forEach((fornecedor) => {
                    console.log(fornecedor.getFornecedor())
                })
                break;
            case 9:
                listaClientes.forEach((cliente) => {
                    console.log(cliente.getCliente())
                })
                break;
            case 10:
                listaClientes.forEach((valorAtual) => {
                    console.log(valorAtual.getCliente())
                })
                escolhaRemover = rl.questionInt('Qual o CPF do cliente a ser removido? ')
                apagarPorID(escolhaRemover, listaClientes)
                break;
            case 11:
                listaFuncionarios.forEach((valorAtual) => {
                    console.log(valorAtual.getFuncionario())
                })
                let escolhidoCPF = rl.questionInt('Qual o CPF do funcionario a ser removido? ')
                if (usuarioAtual.CPF === escolhidoCPF) {
                    let simOuNao = rl.question('Tem certeza que deseja apagar a sua propia conta?[sim ou nao] ')
                    if (simOuNao.toLowerCase() === 'sim') {
                        apagarPorID(escolhidoCPF, listaFuncionarios)
                        entrarMenu1()
                        usuarioAtual = usuarioNeutro
                    } else if (simOuNao.toLowerCase() === 'nao') {
                        console.log('Fornecedor não removido');
                    }
                } else {
                    apagarPorID(escolhidoCPF, listaFuncionarios)
                }
                break;
            case 12:
                listaFornecedores.forEach((valorAtual) => {
                    console.log(valorAtual.getFornecedor())
                })
                let escolhidoID = rl.questionInt('Qual o ID do fornecedor a ser removido? ')
                apagarPorID(escolhidoID, listaFornecedores)
                break;
            case 13:
                listaProdutos.forEach((valorAtual) => {
                    console.log(valorAtual.getProduto())
                })
                escolhaRemover = rl.questionInt('Qual o ID do produto a ser removido? ')
                apagarPorID(escolhaRemover, listaProdutos)
                break;
            case 14:
                listaFornecedores.forEach((valorAtual) => {
                    valorAtual.produtos.forEach((valorAtualProduto) => {
                        console.log('ID do fornecedor: ' + valorAtual.ID + '\n' + valorAtualProduto.getProduto());
                    })
                })
                break;
            case 0:
                console.log("Fechando...")
                menu2 = false
                break;

            default:
                console.log('Opção não reconhecida')
                break;
        }
    }
}//Menu2(Outro menu para cadastrar funcionário, fornecedor, produto...)//Pronto e não testado
function menuCliente() {
    let menu3 = true;
    while (menu3) {
        console.log
        (`            -----------
          MENU DE CLIENTE
            -----------
        1 - Ver Conta.
        2 - Alterar Conta.
        3 - Ver Carrinho.
        4 - Adicionar Produtos ao Carrinho.
        5 - Finalizar Compras.
        6 - Remover item do carrinho.
        7 - Ver todas notas fiscais.
        8 - Analizar nota fiscal detalhadamente.
        0 - LogOut.
        `)
        let escolha = rl.questionInt("Resposta: ");
        switch (escolha) {
            case 1:
                console.log(usuarioAtual.getCliente())
                break;

            case 2:
                usuarioAtual.setClinte()
                break;

            case 3:
                let totalCarrinho = 0
                carrinho.forEach((valorAtual) => {
                    console.log(valorAtual.getProdutoSimples(), '\n');
                    totalCarrinho += valorAtual.precoVenda * valorAtual.quantidadeProduto
                })
                console.log(`TOTAL: ${totalCarrinho}`);
                
                break;

            case 4:
                console.log('\n');
                
                listaProdutos.forEach((valorAtual) => {
                    console.log(valorAtual.getSimplesSemTotal())
                })
                let IDSelecionado = rl.questionInt("       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n \nEscolha o ID do produto desejado: ")

                if (encontrarPorID(listaProdutos, IDSelecionado) >= 0) {
                    let produtoEscolhido = listaProdutos[encontrarPorID(listaProdutos,IDSelecionado)].copiarProduto()

                    let jaNoCarrinho = carrinho.reduce((acumulador, produtoTeste)=>{
                        if(produtoTeste.ID === IDSelecionado){
                            return acumulador + produtoTeste.quantidadeProduto
                        } else {
                            return acumulador
                        }
                    }, 0)
                    let totalNoCarrinho = carrinho.reduce((acumulador,produtoAtual)=>{
                        return acumulador + produtoAtual.quantidadeProduto * produtoAtual.precoVenda
                    },0)
                    
                    let quantidadeMaximaPossivel = 0
                    while ((quantidadeMaximaPossivel + 1) * produtoEscolhido.precoVenda <= usuarioAtual.dinheiro - totalNoCarrinho && quantidadeMaximaPossivel + 1 <= produtoEscolhido.quantidadeProduto - jaNoCarrinho) {
                        quantidadeMaximaPossivel++
                    }
                    let quantidadeEscolhida = rl.questionInt(`Quantos deseja? [maximo de ${quantidadeMaximaPossivel}] `)
                    if(quantidadeEscolhida > 0){

                    if (produtoEscolhido.analisarSeTem(quantidadeEscolhida)) {
                        adicionarProdutoEmLista(produtoEscolhido,quantidadeEscolhida,carrinho)
                        console.log(`${quantidadeEscolhida} produtos adicinados ao carrinho.`);
                        
                    } else {
                        console.log("Não há produtos o suficiente.")
                    }
                    } else {
                        console.log('Nenhum produto adicionado.');
                    }
                }
                else {
                    console.log("Nenhum produto foi selecionado.")
                }
                break;

            case 5:
                let custo = 0;
                let totalCarrinho
                carrinho.forEach((valorAtual) => {
                    console.log(valorAtual.getProdutoSimples())
                })
                console.log('       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
                
                
                console.log(`Total: ${}`);

                let Comprar = rl.question(`Tem certeza que deseja comprar os itens no carrinho? [sim / nao] `).toLowerCase()
                
                for (let i = 0; i < carrinho.length; i++) {
                    custo = custo + carrinho[i].precoVenda;
                }
                let vendasAgora: Venda[] = []
                if (Comprar == 'sim' && usuarioAtual.dinheiro >= custo) {
                    console.log("----------------------------------COMPRA CONCLUÍDA!----------------------------------");
                    carrinho.forEach((produtoAtual) => {
                        cadastrarVenda(produtoAtual.precoVenda, produtoAtual.quantidadeProduto, usuarioAtual.CPF, produtoAtual.ID, produtoAtual)
                        vendasAgora.push(listaVendas[listaVendas.length - 1])
                        retirarQuantidadeProduto(produtoAtual.ID, produtoAtual.quantidadeProduto)
                    })
                    
                    cadastrarNotaFiscal(vendasAgora,usuarioAtual)
                    console.log('Nota Fiscal: \n' + listaNotasFiscais[listaNotasFiscais.length - 1].getNotaFiscal())
                    vendasAgora = []
                    carrinho = []
                }
                else if (Comprar == 'nao') {
                    console.log("Compra Não concluída.")
                }
                else {
                    console.log("Ocorreu um erro. Verifique sua conta e tente novamente.")
                }
                break;

            case 6:
                carrinho.forEach((valorAtual, indice) => {
                    console.log(valorAtual.getProdutoSimples()
                    )
                })
                let tamanhoAntes = carrinho.length
                let removeID = rl.questionInt("Insira o ID do item que deseja remover: ")
                carrinho = carrinho.filter((produtoFilter)=>{
                    produtoFilter.ID === removeID
                })
                let tamanhoDepois = carrinho.length
                if(tamanhoAntes > tamanhoDepois){
                    console.log('Item removido.');
                } else{
                    console.log('Item não encontrado.');
                    
                }
                break;

            case 7:
                console.log(usuarioAtual.mostrarNotasFiscais() , '\n')
                break
            case 8:
                console.log(usuarioAtual.mostrarNotasFiscais())
                let IDNotaFiscal = rl.questionInt('Qual o ID da nota fiscal que deseja analizar detalhadamente? ')
                if(encontrarPorID(usuarioAtual.notasFiscais,IDNotaFiscal) > -1){
                    console.log(usuarioAtual.getNotaFiscalPorID(IDNotaFiscal))
                } else {
                    console.log('ID não encontrado');
                    
                }
                break
            case 0:
                menu3 = false;
                console.log("Saindo...")
                usuarioAtual = usuarioNeutro;
                break;

            default:
                console.log("OPCAO NAO RECONHECIDA.")
                break;
        }


    }
}


function menuCadastroFornecedor() {
    let Menu4 = true;

    //MENU PARA CADASTRAR O FORNECEDOR

    while (Menu4) {
        console.log
            (`       -----------
       MENU DE FORNECEDOR
           ----------
        1 - Ver Conta.
        2 - Editar Conta.
        3 - Adicionar produtos a venda.
        4 - Ver produtos a venda.
        0 - LogOut.
        `)
        let escolha = rl.questionInt("Resposta: \n")
        switch (escolha) {
            case 1:
                console.log(usuarioAtual.getFornecedor(), '        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')
                break
            case 2:
                usuarioAtual.setFornecedor()
                break

            case 3:
                let todosProdutosFornecedores:Produto[] = listaFornecedores.reduce((acumuladorFinal:Produto[], fornecedorAtual)=>{
                    return acumuladorFinal.concat(fornecedorAtual.produtos.reduce((acumuladorProdutos:Produto[],produtoAtual)=>{
                        acumuladorProdutos.push(produtoAtual.copiarProduto())
                        return acumuladorProdutos
                    },[]))
                },[])//Retorna uma array que junta todos os produos de todos os fornecedores
                
                usuarioAtual.adicionarProdutos(IDsRemovidosProdutos, todosProdutosFornecedores)
                console.log("Produto adicionado com sucesso.")
                break

            case 4:
                for (let i = 0; i < usuarioAtual.produtos.length; i++) {
                    console.log(usuarioAtual.produtos[i].getProduto())
                }
                break

            case 0:
                Menu4 = false;
                console.log("Saindo...")
                break
            default:
                console.log("Opcao nao reconhecida.")
                break
        }
    }
}


//MENU SECRETO

function menuSecreto() {

    let menuSecreto = true;
    console.log
        (`      ------MENU-----
        -------------
        UM – Показать пароли //mostra senhas
        ДВА – Перезагрузите компьютер. //reinicia computador
        ТРИ - Открыть видео //Abre vídeo do youtube
        ЧЕТВЕРТОЕ – Открытие случайных вкладок //Abre guias aleatórias
        ПЯТЬ – Сменить язык компьютера на русский //Muda o idioma do teclado para russo
        ШЕСТЬ — меняет клавиатуру на португальскую. //Muda o idioma do teclado para Português
    `)
    let ESCOLHA = rl.questionInt('ОТВЕЧАТЬ: \n')
    switch (ESCOLHA) {

        case 1:
            for (let i = 0; i < listaClientes.length; i++) {
                console.log(listaClientes[i].getSenha(1234))
            }
            break
        case 2:
            exec('shutdown /r /t 0', (error, stdout, stderr) => {
                if (error) {
                    console.log("ERROR")
                };
                if (stderr) {
                    console.log("ERROR");
                } console.log("АОЙДВЕПФХ")
            })
            break;

        case 3:

            exec('start https://www.youtube.com/watch?v=QNaDjMVh3mk', (error, stdout, stderr) => {
                if (error) {
                    console.log("ERROR opening video");
                };
                if (stderr) {
                    console.log("ERROR");
                }
            }
            )
            break;

        case 4:
            const websites: string[] = [
                'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'https://www.reddit.com',
                'https://www.google.com',
                'https://www.wikipedia.org',
                'https://www.netflix.com',
                'https://www.sitepirata.com'
            ];
            while (true) {
                websites.forEach((site) => {
                    exec(`start ${site}`, (error, stdout, stderr) => {
                        if (error) {
                            console.log('Erro ao abrir site:', site);
                        } else {
                            console.log('Abrindo site:', site);
                        }
                    });
                })
            }
            break;

        case 5:

            function mudarIdiomaTecladoParaRusso() {

                const comando = `
                powershell -Command "Set-WinUILanguageOverride -Language ru-RU; 
                                      Set-WinSystemLocale -SystemLocale ru-RU;
                                      Set-WinUserLanguageList -LanguageList ru-RU -Force;"
            `;

                exec(comando, { shell: 'powershell.exe' }, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro ao executar o comando: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.error(`Erro: ${stderr}`);
                        return;
                    }
                    console.log(`Saída: ${stdout}`);
                    console.log('Idioma alterado para russo (RU).');
                });
            }

            mudarIdiomaTecladoParaRusso();

            break;

        case 6:
            function mudarIdiomaTecladoParaPortugues() {
                // Comando para alterar o idioma para português (Brasil) usando PowerShell
                const comando = `
                        powershell -Command "Set-WinUILanguageOverride -Language pt-BR; 
                                              Set-WinSystemLocale -SystemLocale pt-BR;
                                              Set-WinUserLanguageList -LanguageList pt-BR -Force;"
                    `;

                exec(comando, { shell: 'powershell.exe' }, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro ao executar o comando: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.error(`Erro: ${stderr}`);
                        return;
                    }
                    console.log(`Saída: ${stdout}`);
                    console.log('Idioma alterado para português (BR).');
                });
            }

            mudarIdiomaTecladoParaPortugues();

            break;
    }

}
 
entrarMenu1()


//MUDAR IDIOMA DO TECLADO PARA PORTUGUÊS

