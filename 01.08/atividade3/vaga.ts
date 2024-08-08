
export class Vaga {
    numero:number
    livre:boolean

    constructor(numero:number){
        this.numero = numero
        this.livre = true
    }

    ocupa():void{
        this.livre = false
    }

    desocupa():void{
        this.livre = true
    }
}