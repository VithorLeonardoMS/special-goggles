
import { Cliente     } from "../Model/Cliente"
import { Fornecedor  } from "../Model/Fornecedor"
import { Funcionario } from "../Model/Funcionario"
import { NotaFiscal  } from "../Model/NotaFiscal"
import { Produto     } from "../Model/Produto"
import { Venda       } from "../Model/Venda"

export let produtoA = new Produto('Agua do banho do sor leo', 0, 50, 10, 80                     )
export let produtoB = new Produto('Tufo de cabelo do sor Iuri (Edição limitada)', 1, 40, 20, 100)
export let produtoC = new Produto('Cuticula do sor Lucas',2,80,50,30                            )
//Produtos pré definidos

export let listaProdutos: Produto[] = [new Produto('Agua do banho do sor leo', 0, 50, 10, 80), produtoB, produtoC]
export let listaClientes: Cliente[] = [new Cliente(123, 'rua', 'Eduardo', '123', 'cliente', 999), new Cliente(2, '', 'teste', '123', 'teste', 999)]
export let listaFornecedores: Fornecedor[] = [new Fornecedor(0, 'Inferior da Ponte', 'Guilherme', '123', 'forn'), new Fornecedor(1, 'rua', 'ze', '123', 'teste')]
export let listaVendas: Venda[] = []
export let listaFuncionarios: Funcionario[] = [new Funcionario(1234, 999, "123", 'vithor', 'func'), new Funcionario(2, 99, '123', 'teste', 'teste')]
export let carrinho: Produto[] = []
export let listaNotasFiscais: NotaFiscal[] = []
/*
Estas váriáveis irão armazenar obetos para serem utilizados posteriormente de forma organizada. 
Cada uma destas listas armazena objetos de classes especificas usadas em momentos especificos.
    *Especificamente o carrinho é uma lista de produtos quase que imagináros, mas que servirão para interagir com as outras.
    O usuário deverá escolher os produtos e eles primeiramente serão armazenados no carrinho,
    possibilitando interações antes da compra ser efetuada.
*/

export function clearCarrinho():void{
    carrinho = []
}
export let caixaMercado = 1000;
//BANCO DE DADOS

export function diminuirCaixa(valor:number):void{
    caixaMercado -= valor
}
//Diminui valor no caixa

listaFornecedores[0].produtos.push(produtoA)
listaFornecedores[1].produtos.push(produtoB)
//Adiciona produtos pré definidos

export let usuarioNeutro = new Cliente(0, '', '', '123', '', 0)
//Esse usuario é o primeiro usuário considerado no menuInicial e é sempre trocado quando for realizado um logOut, dessa forma nenhum usuario real fica guardado na variável usuarioAtual
usuarioNeutro.alterarTipo('Neutro', 1234) //Troca o tipo do usuario neutro para que não interaja com nada em outros códigos

export function getUsuarioNeutro():Cliente | Fornecedor | Funcionario{
    return usuarioNeutro
}//Permite retornar o usuarioNeutro em um arquivo onde é importado

export let usuarioAtual: Cliente | Fornecedor | Funcionario = usuarioNeutro
//Usuario atual logado, começa como neutro, para evitar interações incorretas

export function getUsuarioAtual():Cliente | Fornecedor | Funcionario{
    return usuarioAtual
} //Permite retornar o usuarioAtual em um arquio onde é importado

export function setUsuarioAtual(novoUsuario: Cliente | Fornecedor | Funcionario):void{
    usuarioAtual = novoUsuario
}//Permite a alteração do usuarioAtual em um arquivo onde é importado

export function retornarCliente():Cliente{
    let clienteEncontrado = listaClientes.find(cliente => cliente === usuarioAtual)
    if(clienteEncontrado){
        return clienteEncontrado
    } else {
        return new Cliente(1,'','','','', 1)
    }
}

export function retornarFuncionario():Funcionario{
    let funcionarioEncontrado = listaFuncionarios.find(funcionario => funcionario === usuarioAtual)
    if(funcionarioEncontrado){
        return funcionarioEncontrado
    } else {
        return new Funcionario(1,1,'','','')
    }
}

export function retornarFornecedor():Fornecedor{
    let fornecedorEncontrado = listaFornecedores.find(fornecedor => fornecedor === usuarioAtual)
    if(fornecedorEncontrado){
        return fornecedorEncontrado
    } else {
        return new Fornecedor(1,'','','','')
    }
}

export let IDsRemovidosProdutos: number[] = []
export let IDsRemovidosVenda: number[] = []
export let IDsRemovidosFornecedor: number[] = []
export let IDsRemovidosNotasFiscais: number[] = []
//Quando um identificador for removido é armazenado na lista respectiva para ser usado novamente