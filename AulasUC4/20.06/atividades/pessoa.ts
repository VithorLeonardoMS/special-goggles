class Pessoa{
    nome: string
    idade: number
    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade
    }

    cumprimentar():void{
    }

}
class Idoso extends Pessoa{
cumprimentar(): void {
    console.log(`Saudação ${this.nome}, você têm ${this.idade} anos`)}
}
class Criança extends Pessoa{
    cumprimentar(): void {
        console.log(`Saudação ${this.nome}, você têm ${this.idade} anos`)
    }
}
class Adulto extends Pessoa{
    cumprimentar(): void {
        console.log(`Saudação ${this.nome}, você têm ${this.idade} anos`)
    }
}
var eu = new Idoso('vithor',17)
eu.cumprimentar()
