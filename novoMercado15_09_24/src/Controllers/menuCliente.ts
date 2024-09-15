import { Cliente } from "../Model/Cliente";
import { Venda } from "../Model/Venda";
import { Fornecedor } from "../Model/Fornecedor";
import { Funcionario } from "../Model/Funcionario";
import { adicionarProdutoEmLista } from "../Utils/Produtos/adicionarProdutoEmLista";
import { cadastrarVenda } from "../Utils/Cadastro/cadastrarVenda";
import { encontrarPorID } from "../Utils/IDs/encontrarPorID";
import { carrinho, clearCarrinho, getUsuarioAtual, getUsuarioNeutro, listaNotasFiscais, listaProdutos, listaVendas, retornarCliente, setUsuarioAtual, usuarioAtual } from "../Utils/variaveis";
import { retirarQuantidadeProduto } from "../Utils/Produtos/retirarQuantidadeProduto";
import { cadastrarNotaFiscal } from "../Utils/Cadastro/cadastrarNotaFiscal";
import { caixaMercado } from "../Utils/variaveis";
import { menuInicial} from "./menuInicial";
//.


let rl = require('readline-sync')

export function menuCliente() {
    console.clear()
    let usuarioCliente = retornarCliente()
    let menu = true;
    while (menu) {
        console.log (`            ---------------
            MENU DE CLIENTE
            ---------------
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
                console.clear()
                console.log(usuarioCliente.getCliente())
                break;
                
            case 2:
                console.clear()
                usuarioCliente.setCliente()
                break;
                    
            case 3:
                console.clear()
                let verTotalCarrinho = 0
                carrinho.forEach((valorAtual) => {
                    console.log(valorAtual.getProdutoSimples(), '\n');
                    verTotalCarrinho += valorAtual.precoVenda * valorAtual.quantidadeProduto
                })
                console.log(`TOTAL: R$${verTotalCarrinho}`);
                break;

                case 4:
                    console.clear()
                    console.log('\n');
                    
                    listaProdutos.forEach((valorAtual) => {
                        console.log(valorAtual.getSimplesSemTotal())
                    })
                    let IDSelecionado = rl.questionInt("       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n \nEscolha o ID do produto desejado: ")
                    console.clear()
                    
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
                    while ((quantidadeMaximaPossivel + 1) * produtoEscolhido.precoVenda <= usuarioCliente.dinheiro - totalNoCarrinho && quantidadeMaximaPossivel + 1 <= produtoEscolhido.quantidadeProduto - jaNoCarrinho) {
                        quantidadeMaximaPossivel++
                    }
                    let menuQuant:boolean = true
                    while(menuQuant){
                        let quantidadeEscolhida = rl.questionInt(`Quantos deseja? [maximo de ${quantidadeMaximaPossivel}]: `)
                        if(quantidadeEscolhida > 0 && quantidadeEscolhida <= quantidadeMaximaPossivel){
                            adicionarProdutoEmLista(produtoEscolhido,quantidadeEscolhida,carrinho)
                            console.log(`${quantidadeEscolhida} produtos adicinados ao carrinho.`);
                            menuQuant = false
                            
                        }else if(quantidadeEscolhida > 0){
                            console.log("Não há produtos o suficiente, tente novamente [-1 para cancelar]")
                            
                        } else if(quantidadeEscolhida < -1){
                            console.log('Valor inválido, tente novamete [-1 para cancelar]');
                            
                        } else if(quantidadeEscolhida === -1){
                            menuQuant = false
                        } else {
                            console.log('Erro [-1 para cancelar]');

                        }

                    }   

                } else {
                    console.log("Nenhum produto foi selecionado.")

                }
                break;
            case 5:
                console.clear()
                let custo = 0;
                let totalCarrinho = 0
                carrinho.forEach((produtoAtual) => {
                    console.log(produtoAtual.getProdutoSimples())
                    totalCarrinho += produtoAtual.precoVenda * produtoAtual.quantidadeProduto
                })
                console.log('       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
                
                
                console.log(`Total: R$${totalCarrinho}`);

                let Comprar = rl.question(`Tem certeza que deseja comprar os itens no carrinho? [sim / nao] `).toLowerCase()
                
                for (let i = 0; i < carrinho.length; i++) {
                    custo = custo + carrinho[i].precoVenda * carrinho[i].quantidadeProduto;
                }
                let vendasAgora: Venda[] = []
                if (Comprar == 'sim' && usuarioCliente.dinheiro >= custo) {
                    console.log("----------------------------------COMPRA CONCLUÍDA!----------------------------------");
                    carrinho.forEach((produtoAtual) => {
                        cadastrarVenda(produtoAtual.precoVenda, produtoAtual.quantidadeProduto, usuarioCliente.CPF, produtoAtual.ID, produtoAtual)
                        vendasAgora.push(listaVendas[listaVendas.length - 1])
                        retirarQuantidadeProduto(produtoAtual.ID, produtoAtual.quantidadeProduto)
                    })
                    usuarioCliente.dinheiro -= totalCarrinho
                    cadastrarNotaFiscal(vendasAgora,usuarioCliente)
                    console.log('Nota Fiscal: \n' + listaNotasFiscais[listaNotasFiscais.length - 1].getNotaFiscal())
                    vendasAgora = []
                    clearCarrinho()

                } else if (Comprar == 'nao') {
                    console.log("Compra Não concluída.")

                } else {
                    console.log("Ocorreu um erro. Verifique sua conta e tente novamente.")

                }

                break;
            case 6:
                console.clear()
                carrinho.forEach((valorAtual, indice) => {
                    console.log(valorAtual.getProdutoSimples()
                    )
                })
                let tamanhoAntes = carrinho.length
                let removeID = rl.questionInt("Insira o ID do item que deseja remover: ")
                carrinho.splice(0 ,carrinho.length ,...carrinho.filter((produtoFilter)=>{
                    produtoFilter.ID !== removeID
                }))
                let tamanhoDepois = carrinho.length
                if(tamanhoAntes > tamanhoDepois){
                    console.log('Item removido.');

                } else{
                    console.log('Item não encontrado.');
                    
                }
                break;
            case 7:
                console.clear()
                console.log(usuarioCliente.mostrarNotasFiscais() , '\n')
                break
            case 8:
                console.clear()
                console.log(usuarioCliente.mostrarNotasFiscais())
                let IDNotaFiscal = rl.questionInt('Qual o ID da nota fiscal que deseja analizar detalhadamente? ')
                if(encontrarPorID(usuarioCliente.notasFiscais,IDNotaFiscal) > -1){
                    console.log(usuarioCliente.getNotaFiscalPorID(IDNotaFiscal))

                } else {
                    console.log('ID não encontrado');
                    
                }
                break
            case 0:
                console.clear()
                menu = false;
                console.log("Saindo...")
                setUsuarioAtual(getUsuarioNeutro())
                break;
            default:
                console.clear()
                console.log("OPCAO NAO RECONHECIDA.")
                break;
        }


    }
}
