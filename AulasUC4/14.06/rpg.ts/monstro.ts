import { Guerreiro } from "./guerreiro"

export class Monstro {
    nome:string
    forca:number
    saude:number
    
    constructor(nome:string){
        this.nome = nome
        this.forca = 50
        this.saude = 10
    }
    
    atacar(guerreiro:Guerreiro):void{
        guerreiro.receberDano(this.forca)
        console.log(`${guerreiro.nome} recebeu ${this.forca}de dano`)    
    }
    receberDano(dano:number):void{
        this.saude = this.saude - dano
    }
    status():void{
        console.log(`${this.nome} têm ${this.saude} de saúde e ${this.forca} de força`)
    }
    }