import { cadastrarClienteRl } from "../Utils/Cadastro/cadastrarClienteRl";
import { menuCliente      } from "./menuCliente";
import { menuFornecedor   } from "./menuFornecedor";
import { menuFuncionario  } from "./menuFuncionario";
import { menuSecreto      } from "./menuSecreto";
import { Funcionario } from "../Model/Funcionario";
import { Fornecedor } from "../Model/Fornecedor";
import { Cliente } from "../Model/Cliente";
import { listaClientes, listaFornecedores, listaFuncionarios, setUsuarioAtual, usuarioAtual} from "../Utils/variaveis";
const rl = require('readline-sync')

/*
    * menuInicial()
    * É uma função que executa o primeiro menu do programa 
        * 1 - Cadastrar como cliente: Cadastra um novo cliente para listaclientes
        * 2 - Loggin: Traz três opções para o usuário
 */

export function menuInicial() { 
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
                console.clear()
                if (cadastrarClienteRl()) {
                    setUsuarioAtual(listaClientes[listaClientes.length - 1])
                    console.log("Usuario cadastrado com sucesso!")
                    menuCliente()
                    console.clear()
                }

                break;
            case 2:
                console.clear()
                let escolhaNova = rl.questionInt("\n 1- Logar como Funcionario.\n 2- Logar como Cliente.\n 3- Logar como Fornecedor.\n----------------------------\nRESPOSTA: ")
                let tipoCadastro:number
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
                        console.log("Opção não reconhecida.")
                        tipoCadastro = 0
                        break;
                }
                let codigoResposta = 'x'
                let codigoRecuperacao = 'y'
                if (tipoCadastro != 0) {
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
                    if (tipoCadastro == 2) {
                        listaClientes.forEach((valorAtual) => {
                            if (valorAtual.eMail === eMail.toLowerCase() && (valorAtual.getSenha(1234) === Senha || codigoRecuperacao === codigoResposta)) {
                                setUsuarioAtual(valorAtual) 
                                menuCliente()
                                console.clear()
                            }
                        })
                    }
                    else if (tipoCadastro == 1) {
                        listaFuncionarios.forEach((element) => {
                            if (element.eMail === eMail.toLowerCase() && (element.getSenha(1234) === Senha || codigoRecuperacao === codigoResposta)) {
                                setUsuarioAtual(element)                              
                                menuFuncionario()
                                console.clear()
                            }
                        })
                    }
                    else if (tipoCadastro == 3) {
                        listaFornecedores.forEach((valorAtual) => {
                            if (valorAtual.eMail === eMail.toLowerCase() && (valorAtual.getSenha(1234) == Senha || codigoRecuperacao === codigoResposta)) {
                                setUsuarioAtual(valorAtual) 
                                menuFornecedor()
                                console.clear()
                            }
                        })
                    }
                }
                break;
            case 666:
                console.clear()
                menuSecreto()
                break
            case 0:
                console.clear()
                console.log("Fechando...")
                menu = false;
                break;

        }
    }
}