const rl = require('readline-sync')
import { Cliente } from "./Cliente";
import { Fornecedor } from "./Fornecedor";

export class Funcionario {
    public CPF: number
    public salario: number
    private senhaFuncionario: string
    public nomeFuncionario: string
    public tipo: string = "Funcionario";
    public eMail: string

    constructor(CPF: number, salario: number, senhaFuncionario: string, nomeFuncionario: string, eMail: string) {
        this.CPF = CPF
        this.salario = salario
        this.senhaFuncionario = senhaFuncionario
        this.nomeFuncionario = nomeFuncionario
        this.tipo = "Funcionario"
        this.eMail = eMail;
    }

    public getFuncionario(): string {
        return (`
        Nome:             ${this.nomeFuncionario}
        CPF:              ${this.CPF}
        Salario:          ${this.salario}
        SenhaFuncionario: ${this.senhaFuncionario}
        `)
    }
    public setFuncionario(): void {
        let nomeFuncionario = rl.question('Qual o novo nomeFuncionario? ')
        let salario = rl.questionInt('Qual é o novo Salario? ')
        let senhaFuncionario = rl.questionInt('Qual a nova senhaFuncionario? ')
    }

    criarFornecedor(): Fornecedor {

        let NovoNomeFornecedor = rl.question("Insira o Nome do novo fornecedor. ")
        let NovaSenhaFornecedor = rl.question("Insira a senha do novo Fornecedor. ")
        let NovoEnderecoFornecedor = rl.question("Insira o endereço do novo Fornecedor. ")
        let novoEmail = rl.question("Insira o E-Mail do novo Fornecedor")

        let IDfornecedor = rl.question("Insira o ID do novo Fornecedor. ")

        return new Fornecedor(IDfornecedor, NovoEnderecoFornecedor, NovoNomeFornecedor, NovaSenhaFornecedor, novoEmail)
    }
    public getSenha(codigo: number): string {
        if (codigo === 1234) {
            return this.senhaFuncionario;
        } else {
            return 'Codigo errado'
        }
    }
}