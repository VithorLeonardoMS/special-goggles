

export class Contador{
    unidades:number

    constructor(){
        this.unidades = 0
    }
    zerar():void{
        this.unidades = 0
    }

    incrmentar(unidades:number):void{
        this.unidades += unidades
    }

    valor():number{
        return this.unidades
    }
}