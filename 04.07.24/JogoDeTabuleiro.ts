import { Jogo, JogoInterface } from "./Jogo";
const rl = require('readline-sync')
export class JogoDeTabuleiro extends Jogo implements JogoInterface {
    private numeroDeJogadores:number

    public constructor(titulo:string,genero:string,classificacaoEtaria:number,numeroDeJogadores:number){
        super(titulo,genero,classificacaoEtaria)
        this.numeroDeJogadores = numeroDeJogadores
    }

    public getDetalhes():string {
        return `        ________________
        Titulo: ${this.getPropriedades()[0]}
        Genero: ${this.getPropriedades()[1]}
        Classificação etária: ${this.getPropriedades()[2]}
        Numero de jogadores: ${this.numeroDeJogadores}`
    }
}