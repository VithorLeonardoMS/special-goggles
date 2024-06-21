class Animal{
    nome: string
    constructor(nome: string){
        this.nome = nome
    }

    fazerBarulho():void{

    }
}

class Chachorro extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} faz: Au Au 🐶`)
    }
}