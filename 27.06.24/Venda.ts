
import { Produto } from "./Produto"
export class Venda{
produto:Produto
quantidade:number
valorTotal:number
data:string


calculaTotal():number{
let y =this.produto.precoVenda
let x =this.quantidade
return y*x
}

constructor(produto:Produto,quantidade:number,data:string){
this.produto = produto
this.quantidade = quantidade
this.data = data
this.valorTotal = this.calculaTotal()
this.valorTotal = 1

}

aplicarDesconto():void{
   let x = this.produto.lucroProduto() / 2
   let y = this.produto.precoVenda
   this.valorTotal = y - x
}

getVenda(){
    console.log(`
    ______________________________
    Produto: ${this.produto}
    Quantidade: ${this.quantidade}
    Valor total: ${this.valorTotal}
    Data: ${this.data}
    ______________________________
    `)
}
}
