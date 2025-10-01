import { Cliente       } from "../../Model/Cliente"
import { testeCPF      } from "../../../Tests/testeCPF"
import { testeEmail    } from "../../../Tests/testeEmail"

import { listaClientes } from "../variaveis"

let rl = require('readline-sync')

export function cadastrarClienteRl(): boolean {
    let clienteCPF = rl.questionInt('CPF: ')
    while (clienteCPF !== -1 && !testeCPF(clienteCPF, listaClientes) || !clienteCPF) {
        if(!clienteCPF){
            clienteCPF = rl.questionInt('Preencha todos os campos \n(Digite [-1] para cancelar): ')
        } else {
            clienteCPF = rl.questionInt('Este CPF ja esta cadastrado... \nTente outro CPF(Digite [-1] para cancelar): ')

        }
    }
    if (clienteCPF === -1) {
        console.log('Cadastramento cancelado.')
        return false
    } else {
        let eMail = rl.question('E-Mail: ')
        while ( eMail !== '-1' && !testeEmail(eMail, listaClientes) || !eMail) {
            if(!eMail){
                eMail = rl.question('Preencha todos os campos \n(Digite [-1] para cancelar): ')

            } else{
                eMail = rl.question('Este e-mail ja esta cadastrado... \nTente outro e-mail(Digite [-1] para cancelar): ')

            }
        }
        if (eMail === '-1') {
            console.log('Cadastramento cancelado.')
            return false
        } else {
            let enderecoCliente = rl.question('Endereco do cliente: ')
            let nomeCliente = rl.question('Nome: ')
            let senhaCliente = rl.question('Senha: ')
            let dinheiro = rl.questionInt('Saldo disponivel na conta bancaria: ')
            
            if(enderecoCliente && nomeCliente && senhaCliente && dinheiro != null){
                listaClientes.push(new Cliente(clienteCPF, enderecoCliente, nomeCliente, senhaCliente, eMail, dinheiro))
                return true

            } else {
                console.error("Todos os campos precisam ser preenchidos")
                return false 
            }

        }
    }


}
