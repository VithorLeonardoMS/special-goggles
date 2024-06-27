"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto_1 = require("./Produto");
var venda_1 = require("./venda");
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
var pdt1 = new Produto_1.Produto('Smart TV sangsung v2 master j6 plus prime s12+ LGBTV', 1500, 'Sangsung', 'Televisor', 2200);
var pdt2 = new Produto_1.Produto('Ifome XRS', 1000, 'Apou', 'Celular', 10000);
var pdt3 = new Produto_1.Produto('Le antigo RTXP 4090', 1500, 'Le antigo', 'Notebook', 2100);
console.log('O lucro do produto 1 é', pdt1.lucroProduto());
pdt2.getProduto();
var venda1 = new venda_1.Venda(pdt3, 7, '12/12/12');
console.log('O total das vendas n1 é: R$', venda1.calculaTotal());
venda1.aplicarDesconto();
console.log('O valor total das vendas n1 depois do desconto aplicado é: R$', venda1.calculaTotal());
