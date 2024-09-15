import { testeCPF } from "../../../Tests/testeCPF"
import { testeEmail } from "../../../Tests/testeEmail"
import { Funcionario } from "../../Model/Funcionario"
import { listaFornecedores, listaFuncionarios } from "../variaveis"

let rl = require('readline-sync')

export function cadastrarFuncionarioRl(): boolean {

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