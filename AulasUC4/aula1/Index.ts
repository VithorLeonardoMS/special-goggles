const rl = require('readline-sync')
class Carro{
    rodas: number
    motor: number
    cor: string
    modelo: string
    marca: string
    km: number

    constructor(rodas: number, motor: number, cor: string, modelo: string, marca: string, km:number){
        this.rodas = rodas
        this.motor = motor
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
        this.km = km
    }
    acelerar(){
        console.log('vrummmm')
    }
    levarNoMecanico(){
        console.log('bah, deu ruim')
    }
    força(){
        if(this.motor >= 2.0){
            console.log('Bébe mais que meu pai')
        }else if(this.motor > 1.6){
            console.log('Fortão')
        } else if(this.motor >= 1.4){
            console.log('Mediano')
        }else{
            console.log('50km por litro slk')
        }
    }
}

const meuCarro = new Carro(15,2.0,'Azul','Lancer', 'Mitsubishi',0)
meuCarro.acelerar()
meuCarro.levarNoMecanico()
meuCarro.força()


let nome:string = rl.question('Qual o nome do carro? ')
let rodas:number = rl.questionInt('Qual o tamanho das rodas? ')
let motor:number = rl.questionFloat('qual as cilindradas do motor? ')
let cor:string = rl.question('Qual a cor do carro? ')
let modelo:string = rl.question('Qual o modelo do carro? ')
let marca:string = rl.question('Qual a marca do carro? ')
let km:number = rl.question('Qual a kilometragem do carro? ')
const carro2 = new Carro(rodas,motor,cor,modelo,marca,km)
carro2.força()