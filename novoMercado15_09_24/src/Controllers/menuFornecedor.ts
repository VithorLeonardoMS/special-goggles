import { Produto } from "../Model/Produto";
import { menuInicial } from "./menuInicial";
import { Funcionario } from "../Model/Funcionario";
import { Fornecedor } from "../Model/Fornecedor";
import { Cliente } from "../Model/Cliente";
import { getUsuarioNeutro, IDsRemovidosProdutos, listaFornecedores, retornarFornecedor, setUsuarioAtual, usuarioAtual, usuarioNeutro } from "../Utils/variaveis";
//.
let rl = require('readline-sync')


export function menuFornecedor() {
    console.clear()
    let usuarioFornecedor = retornarFornecedor()
    let menu = true;

    while (menu) {
        console.log(`       -----------
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
                console.clear()
                console.log(usuarioFornecedor.getFornecedor(), '        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')
                break
            case 2:
                console.clear()
                usuarioFornecedor.setFornecedor()
                break

            case 3:
                console.clear()
                let todosProdutosFornecedores:Produto[] = listaFornecedores.reduce((acumuladorFinal:Produto[], fornecedorAtual)=>{
                    return acumuladorFinal.concat(fornecedorAtual.produtos.reduce((acumuladorProdutos:Produto[],produtoAtual)=>{
                        acumuladorProdutos.push(produtoAtual.copiarProduto())
                        return acumuladorProdutos
                    },[]))
                },[])//Retorna uma array que junta todos os produos de todos os fornecedores
                
                usuarioFornecedor.adicionarProdutos(IDsRemovidosProdutos, todosProdutosFornecedores)
                console.log("Produto adicionado com sucesso.")
                break

            case 4:
                console.clear()
                for (let i = 0; i < usuarioFornecedor.produtos.length; i++) {
                    console.log(usuarioFornecedor.produtos[i].getProduto())
                }
                break

            case 0:
                console.clear()
                menu = false;
                setUsuarioAtual(getUsuarioNeutro())
                console.log("Saindo...")
                break
            default:
                console.clear()
                console.log("Opcao nao reconhecida.")
                break
        }
    }
}
