class Livro{
    título:string
    autor:string
    anoPublicacao:number
    constructor(título:string,autor:string,anoPublicacao:number){
        this.título = título
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
obterDetalhes():string{
    return `${this.título} têm como autor ${this.autor} e foi pulicado em ${this.anoPublicacao}`
}
}
class Pagina extends Livro{

}

var um = new Pagina('A origem','Sérigio Lobato',1999)
console.log(um.obterDetalhes())