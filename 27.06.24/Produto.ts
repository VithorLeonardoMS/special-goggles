

export class Produto{

    nome:string
    precoCompra:number
    marca:string
    categoria:string
    precoVenda:number

    constructor(nome:string,precoCompra:number,marca:string,categoria:string,precoVenda:number){
        this.nome = nome
        this.precoCompra = precoCompra
        this.marca = marca
        this.categoria = categoria
        this.precoVenda = precoVenda
    }

    getProduto():void{
        console.log(`
        _____________________________
        Nome: ${this.nome}
        Preco comprado: ${this.precoCompra} 
        Marca: ${this.marca}
        Categoria: ${this.categoria}
        Preco de venda: ${this.precoVenda}
        _____________________________
        `)
    }

    lucroProduto():number{
        return this.precoVenda - this.precoCompra
    }
}