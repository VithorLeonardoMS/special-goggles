const leitor = require('readline-sync')
class Cozinheiro{
    nome:string
    idade:number
    ano_xp:number
    constructor(nome:string,idade:number,ano_xp:number){
        this.nome = nome
        this.ano_xp =  ano_xp
        this.idade = idade
    }

    getCozinheiro():void{
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou chef da ${this.ano_xp} anos`)
    }
    setCozinheiro():void{
        let nomeUp = leitor.question('Qual o nome do cozinheiro? ')
        let idadeUp = leitor.question('Qual a idade do cozinheiro? ')
        let ano_xpUp = leitor.question('Qual o tempo de xp do cozinheiro? ')
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp
    }
}

class Restaurante{
    cz:Cozinheiro
    nome:string
    endereco:string
    num_end:number

    constructor(cz:Cozinheiro,nome:string,endereco:string,num_end:number){
        this.cz = cz
        this.endereco = endereco
        this.nome = nome
        this.num_end = num_end
    }

    getRestaurante():void{
        console.log(`O cozinheiro do restaurante é ${this.cz.nome}, o nome é ${this.nome}, endereço é ${this.endereco} e o número do endereço é ${this.num_end}`)
    }

    setRestaurante():void{
        let nomeUp = leitor.question('Qual o nome do restaurante? ')
        let enderecoUp = leitor.question('Qual o endereço? ')
        let num_endUp = leitor.question('Qual o numero de endereco? ')
        this.nome = nomeUp 
        this.endereco = enderecoUp
        this.num_end = num_endUp
}
}
//Instancia da classe cozinheiro
let bolsonaro = new Cozinheiro('lula',2,2)
//instancia da classe restaurante agregada com o objeto da classa cozinheiro
let casaDoBolsonaro = new Restaurante(bolsonaro,'Casa do Lula','Brazil',999)
console.log(casaDoBolsonaro.cz)

let chefNovo = new Cozinheiro('teste',45,25)

chefNovo.getCozinheiro()

chefNovo.setCozinheiro()

chefNovo.getCozinheiro()

let novoRestaurante = new Restaurante(chefNovo,'teste','abc',123)

novoRestaurante.getRestaurante()

novoRestaurante.setRestaurante()

novoRestaurante.getRestaurante()