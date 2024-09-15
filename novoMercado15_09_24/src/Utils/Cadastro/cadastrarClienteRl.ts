import { Cliente       } from "../../Model/Cliente"
import { testeCPF      } from "../../../Tests/testeCPF"
import { testeEmail    } from "../../../Tests/testeEmail"

import { listaClientes } from "../variaveis"

let rl = require('readline-sync')

export function cadastrarClienteRl(): boolean {
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
