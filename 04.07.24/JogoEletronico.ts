import { Jogo, JogoInterface } from "./Jogo";
const rl = require('readline-sync')
export class JogoEletronico extends Jogo implements JogoInterface{
    private plataforma:string
    
    public constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
        super(titulo,genero,classificacaoEtaria)
        this.plataforma = plataforma
    }

    public getDetalhes():string{

        return `        ________________
        Titulo: ${this.getPropriedades()[0]}
        Genero: ${this.getPropriedades()[1]}
        Classificação etária: ${this.getPropriedades()[2]}
        Plataforma: ${this.plataforma}`
    }
    public setDetalhes():void{
     this.setJogo()//analizar
     this.plataforma = rl.question('Qual a plataforma do jogo? ')
    }
}
