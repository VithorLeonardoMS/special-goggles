import { Monstro } from "./monstro"

export class Guerreiro {
nome:string
tipo:string
forca:number
saude:number

constructor(nome:string,tipo:string,forca:number){
    this.nome = nome
    this.tipo = tipo
    this.forca = forca
    this.saude = 100
}

atacar(myMonster:Monstro):void{
    myMonster.receberDano(this.forca)
console.log(`${myMonster.nome} recebeu ${this.forca}de dano`)
}
receberDano(dano):void{
    this.saude = this.saude - dano
}
status():void{
console.log(`${this.nome} têm ${this.saude} de saúde e ${this.forca} de força`)
}
}