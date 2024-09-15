import { Produto } from './Produto'

let rl = require('Readline-sync')

export class Venda {
    public valorProduto: number
    public valorTotal: number
    public quantidadeVenda: number
    public ID: number
    public produto: Produto//Errado
    public CPFCliente: number
    public tipo: string = "Venda"

    constructor(valorProduto: number, quantidadeVenda: number, ID: number, CPFCliente: number, produto: Produto) {
        this.valorProduto = valorProduto
        this.valorTotal = produto.quantidadeProduto * produto.precoVenda
        this.quantidadeVenda = quantidadeVenda
        this.ID = ID
        this.CPFCliente = CPFCliente
        this.produto = produto
    }

    public getVenda(): string {
        return (
`        ID:                     ${this.ID}
        CPF do comprador:       ${this.CPFCliente}
        Produto da Venda:       \n${this.produto.getProdutoSimples()}`);
    }

}