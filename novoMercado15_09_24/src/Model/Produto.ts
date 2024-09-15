export class Produto {
    public nome: string;
    public ID: number;
    public precoVenda: number;
    public precoCompra: number;
    public quantidadeProduto: number;
    public tipo: string = "Produto";

    constructor(nome: string, ID: number, precoVenda: number, quantidadeProduto: number, precoCompra: number) {
        this.nome = nome;
        this.ID = ID;
        this.precoVenda = precoVenda;
        this.precoCompra = precoCompra;
        this.quantidadeProduto = quantidadeProduto;
        this.tipo = "Produto";
    }
    public getProduto(): string {
        return (`
            Nome:                         ${this.nome};
            ID:                           ${this.ID};
            Preço de Venda:               ${this.precoVenda};
            Preço de Compra:              ${this.precoCompra};
            Quantidade de produto:        ${this.quantidadeProduto}`)
    }
    public getProdutoSimples(): string {//get produto basicamente para clientes
        return (
        `       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Nome:                         ${this.nome};
            ID:                           ${this.ID};
            Preço:                        ${this.precoVenda};
            Quantidade:                   ${this.quantidadeProduto}
            Preco total:                  ${this.precoVenda * this.quantidadeProduto}`)
    }

    public getSimplesSemTotal(): string {
        return (
        `       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Nome:                         ${this.nome};
            ID:                           ${this.ID};
            Preço:                        ${this.precoVenda};
            Quantidade:                   ${this.quantidadeProduto}`)
    }

    public analisarSeTem(quantidade: number): boolean {
        if (quantidade > this.quantidadeProduto || quantidade < 0) {
            return false;
        } else{
            return true;
        }
    }
    public diminuirQuantidade(quantidade: number): void {
        this.quantidadeProduto -= quantidade
    }

    public copiarProduto(): Produto {
        return new Produto(this.nome, this.ID, this.precoVenda, this.quantidadeProduto, this.precoCompra);
    }

    poublic 
}