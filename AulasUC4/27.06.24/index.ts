import {Produto} from "./Produto"
import { Venda } from "./venda"
const rl = require('readline-sync')
/*const lista:Array<Produto> = []
let tempProdut = new Produto('Smart TV sangsung v2 master j6 plus prime s12+ LGBTV',1500,'Sangsung','Televisor',2200)
lista.push(tempProdut)
 tempProdut = new Produto('Ifome XRS',1000,'Apou','Celular',10000)
lista.push(tempProdut)
tempProdut = new Produto('Le antigo RTXP 4090',1500,'Le antigo','Notebook',2100)
lista.push(tempProdut)
*/

/*function anilizarLista(list:Array<Produto>,parametro:any,filtro:any):any{
    for(let i:number=list.length-1;list.length>=0;i--){
       switch(filtro){
       case 'nome':
        
        if(list[i].nome === parametro){
            return list[i]
        }

       break

       case 'preço maximo':
        if(list[i].precoVenda < parametro){
            return list[i]
        }
       break

       case 'preço mínimo':
        if(list[i].precoVenda >parametro){
            return list[i]
        }

        break

        case 'categoria':

        if(list[i].categoria === parametro){
            return list[i] 
        }
        break
       }
    }
}

anilizarLista(lista,'celular','categoria').getProduto()
Deu errado
*/

let pdt1 = new Produto('Smart TV sangsung v2 master j6 plus prime s12+ LGBTV',1500,'Sangsung','Televisor',2200)
let pdt2 = new Produto('Ifome XRS',1000,'Apou','Celular',10000)
let pdt3 = new Produto('Le antigo RTXP 4090',1000,'Le antigo','Notebook',2000)

console.log('O lucro do produto 1 é',pdt1.lucroProduto())
pdt2.getProduto()

let venda1 = new Venda(pdt3,2,'12/12/12')
console.log('O total das vendas n1 é: R$',venda1.valorTotal)

venda1.aplicarDesconto()

console.log('O valor total das vendas n1 depois do desconto aplicado é: R$',venda1.valorTotal)

function rlProduto():Produto{
    const nome = rl.question('Qual o nome do produto? ')
    const precoCompra = rl.questionInt('Qual o preco do produto? ')
    const marca = rl.question('Qual a marca? ')
    const categoria = rl.question('Qual a categoria? ')
    const precoVenda = rl.questionInt('Qual o preco de venda?')
    return new Produto(nome,precoCompra,marca,categoria,precoVenda)
}

function rlVenda(produto):Venda{
    const quantidade = rl.questionInt('Qual a quantidade de produtos?')
    const data = rl.question('Qual a data da venda? ')
    return new Venda(produto,quantidade,data)
}


