var leitor = require('readline-sync')
class Aluno{

    nome:string
    notas: Array<number>

    constructor(nome:string,notas:[]){
        this.nome = nome
        this.notas = notas
    }

    registroNotas(): void{
        let nota1:number = leitor.questionInt('Insira a primeira nota:')
        let nota2 = leitor.questionInt('Insira a segunda nota: ')

        this.notas.push(nota1,nota2)
        

    }
    calcularMedia():void{
        let media = 
    }
}