let rl = require('readline-sync')
import { Produto } from "./Produto";

export class Fornecedor{
    public ID: number;
    private enderecoFornecedor: string;
    public nomeFornecedor: string;
    private senhaFornecedor: string;
    public tipo: string = "Fornecedor";
    public produtos: Produto[] = []
    public IDsRemovidos:number[] = []
    public eMail: string
    
    constructor(ID: number, enderecoFornecedor: string, nomeFornecedor: string, senhaFornecedor: string, eMail: string){
        this.ID = ID;
        this.enderecoFornecedor = enderecoFornecedor;
        this.nomeFornecedor = nomeFornecedor;
        this.senhaFornecedor = senhaFornecedor;
        this.tipo = "Fornecedor";
        this.produtos = [];
        this.eMail = eMail
    }
    getFornecedor(): string{
        return `
        ID:             ${this.ID}
        NomeFornecedor: ${this.nomeFornecedor} 
        endereco:       ${this.enderecoFornecedor}
        E-Mail:         ${this.eMail}`
    }
    setFornecedor(): void{
        let novoNomeFornecedor = rl.question("Insira o novo nome do fornecedor: ")
        let novoenderecoFornecedor = rl.question("Insira o novo endereco: ")
        let novaSenhaFornecedor = rl.question("Insira a nova senha do fornecedor: ")
        let novoeMail = rl.question("Insira o novo E-Mail do fornecedor: ")

        this.nomeFornecedor = novoNomeFornecedor || this.nomeFornecedor;
        this.senhaFornecedor = novaSenhaFornecedor || this.senhaFornecedor;
        this.enderecoFornecedor = novoenderecoFornecedor || this.enderecoFornecedor;
        this.eMail = novoeMail || this.eMail
    }

    adicionarProdutos(produtosRemovidos:number[], todosProdutosExistentes:Produto[]): void{
        let novoNome = rl.question("Insira o Nome do novo produto: ")

        let novoPrecoCompra = rl.questionInt('Insira o valor de fabrica: ')
        let precoVerificacao = true

        while(precoVerificacao){
            if(novoPrecoCompra < 0){
                novoPrecoCompra = rl.questionInt('Valor invalido, insira o valor de fabrica novamente: ')
            } else{
                precoVerificacao = false
            }
        }
        let novoPrecoVenda = rl.questionInt("Insira o valor de venda do novo produto: ")
        let novaQuantidade = rl.questionInt("Insiria a quantidade do produto: ")
        let novoID:number
        if (produtosRemovidos.length > 0) {
            novoID = produtosRemovidos.reduce(function (resultante, valoresAnalisados) {
                return Math.min(resultante, valoresAnalisados)
            })//Resumidamente o reduce consegue executar uma função determinada item por item na array e retornar um valor acumulador, no caso resultará no menor valor
        } else {
            novoID = todosProdutosExistentes.length
        }
        //"ID novo"

         this.produtos.push(new Produto(novoNome,novoID,novoPrecoVenda, novaQuantidade, novoPrecoCompra))

    }
    public getSenha(codigo:number): string{
        if(codigo === 1234){
            return this.senhaFornecedor;
        } else {
            return 'Codigo errado'
        }
    }
    public getID(): number{
        return this.ID;
    }
}