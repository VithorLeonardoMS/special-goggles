const rl = require('readline-sync')

export interface JogoInterface{
    titulo: string
    genero: string
    classificacaoEtaria:number
//Exemplo de interface
    setJogo():void
    getDetalhes():string
    getPropriedades():Array<any>
}

export class Jogo implements JogoInterface{

    /*protected*/ titulo:string
    /*protected*/ genero:string
    /*protected*/ classificacaoEtaria:number

    public constructor(titulo:string,genero:string,classificacaoEtaria:number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }

    public getDetalhes():string{
        return `        ________________________ 
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        Classificação etária: ${this.classificacaoEtaria}
       `
    }
    public setJogo():void{
        this.titulo = rl.question('Qual o titulo do jogo? ')
        this.genero = rl.question('Qual o genero do jogo?') 
        this.classificacaoEtaria = rl.question('Qual a classificacao etaria do jogo?') 
    }
    getPropriedades():Array<any>{
        return [this.titulo,this.genero,this.classificacaoEtaria]
    }
}
