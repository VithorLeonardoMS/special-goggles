import { isNullOrUndefined } from "util"


const rl = require('readline-sync')


//Esta função retorna se A qunatidade de gasolina representam listros ou Mls
function litroOuMl(gasolina:number):string{
let litros:string =''
if(gasolina >= 1 || gasolina === 0){
     litros = 'litro(s)'
} else {
     litros = "ml"
}
return litros
}

function kmOuMetros(distancia:number):string{
    let distanciaTipo:string =''
    if(distancia >= 1 || distancia === 0){
         distanciaTipo = 'km'
    } else {
         distanciaTipo = "metros"
    }
    return distanciaTipo
}

export class Carro{
    public id:number
    private marca:string
    private tanque:number
    private kmLitro:number
    public kmRodados:number

    constructor(marca:string,tanque:number,kmLitro:number){
        this.kmLitro = kmLitro
        this.marca = marca
        this.tanque = tanque
        this.kmRodados = 0
    }

    //Esse método retorna uma string que retorna as propriedades da classe "Carro"
    getCarro():string{
        if(this.id > -999){
            return `            ______________
            Id: ${this.id}
            Marca: ${this.marca}
            Tanque: ${this.tanque} ${litroOuMl(this.tanque)} 
            KM p. litro: ${this.kmLitro}
        `
        } else {
        return `            ______________
            Marca: ${this.marca}
            Tanque: ${this.tanque} ${litroOuMl(this.tanque)} 
            KM p. litro: ${this.kmLitro}
        `
        }

    }
    
    //Modifica as propriedades do Carro por meio de readline
    setCarro():void{
        this.marca = rl.question('Qual a marca do carro? ')
        this.tanque = rl.questionInt('Quanto de gasolina ele tem no tanque? ')
        this.kmLitro = rl.questionInt('Quantos quilometros por litros ele faz? ')
    }


    //Para demonstrar no console os km, caso sejam metros multiplica por 10, para ficar corretamente na escrita
    demonstraçãoKm(litros):any{
        if(kmOuMetros(this.projecaoKm(litros))=== 'km'){
            return this.projecaoKm(litros)
        } else if(kmOuMetros(this.projecaoKm(litros)) === 'metros'){
            return this.projecaoKm(litros) * 10
        }
 

    }
    //Esse método é utilizado para andar o carro, reduzindo a quantidade de combustivel do tanque de acordo com os km andados e do gasto de gasolida por km do carro
    andar(){
        const kmAndar:number = rl.questionInt('Quantos kilometros deseja andar? ')
        let litroGasto = kmAndar * this.kmLitro
        if(litroGasto > this.tanque){
            console.log(`Você andou ${this.demonstraçãoKm(this.tanque)} ${kmOuMetros(this.projecaoKm(this.tanque))} e ficou sem gasolina`)
            this.kmRodados += this.projecaoKm(this.tanque)
            this.tanque = 0
        } else {
            this.tanque -= litroGasto
            console.log(`Você andou ${this.demonstraçãoKm(litroGasto)} ${kmOuMetros(this.projecaoKm(litroGasto))}`)
            this.kmRodados += this.projecaoKm(litroGasto)
        }
    }

    //Esse método retorna o total de combustível no tanque
    obterGasolina():string{
        return `Você têm ${this.tanque} ${litroOuMl(this.tanque)} de gasolina`
    }

    //Esse método retorna apenas uma projeção da quantidade de KM andado por uma quantidade de gasolina variavel
    projecaoKm(Litros:number):number{
        return Litros * this.kmLitro
    }

    //Aumenta a quantidade de gasolina no tanque por um readline
    abastecerGasolina():void{
        this.tanque += rl.questionInt('Quantos litros de gasolina deseja abastecer? ')
    }
}