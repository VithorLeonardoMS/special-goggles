export class Coruja {
    nome:string
    peso:number

    constructor(nome:string,peso:number){
        this.nome = nome
        this.peso = peso
    }

    chirriar ():void{
        console.log('uhh ruhh!')
    }
    comer (quantidade:number):void {
        console.log(`A coruja comeu ${quantidade}ratinhos.`)
    }
    voar (tempo:number):void {
        console.log(`A coruja voou por ${tempo}segundos.`)
    }

}

let corujaDoSenac = new Coruja('Gelson',1)