import { testeEmail    } from "../../../Tests/testeEmail"
import { Fornecedor    } from "../../Model/Fornecedor"
import { definirNovoID } from "../IDs/definirNovoID"

import { IDsRemovidosFornecedor, listaFornecedores } from "../variaveis"

let rl = require('readline-sync')


export function cadastrarFornecedorRl(): boolean { //Função fornecedor.

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
