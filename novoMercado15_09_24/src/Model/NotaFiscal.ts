import { Venda } from "./Venda";



export class NotaFiscal {
    public vendas: Venda[]
    public valorTotal: number
    public ID: number
    public tipo: string = 'NotaFiscal'
    public data:string
    public hora:string
    constructor(vendas: Venda[], ID: number) {
        this.vendas = vendas
        this.ID = ID
        this.valorTotal = vendas.reduce(function (acumulador: number, valorAtual): number {
            return acumulador + valorAtual.valorTotal
        }, 0)
        for (let i = 0; i < vendas.length; i++) {
            
        }
        let date = new Date()
        this.data = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2,'0')}/${date.getFullYear()}`   
        this.hora = `${date.getHours()}:${date.getMinutes()}.${date.getSeconds()}`
    }

    getNotaFiscal(): string{
    return (`
    ID:                 ${this.ID}
    Data da compra:     ${this.data}
    Hora da compra:     ${this.hora}
    Valor Total:        ${this.valorTotal}R$
    Vendas:             ${this.vendas.reduce((acumulador,valorAtual,indice)=>{ return acumulador +`\n      Venda n°${indice + 1}:` + '\n' + valorAtual.getVenda()},'')}`)
    }
    
    getNotaFiscalSimples():string{
        return (`
        ID:                 ${this.ID}
        Valor Total:        R$${this.valorTotal}
        Vendas:
                            ${this.vendas.reduce((acumulador,valorAtual)=>{ 
        return acumulador + `{ID da venda: ${valorAtual.ID}, Nome do produto: ${valorAtual.produto.nome}}\n                            `
            },'')}`)
    }

    adicionarNovaVenda(vendaFeita: Venda): void {
        this.vendas.push(vendaFeita)
        this.valorTotal += vendaFeita.valorTotal
    }
}