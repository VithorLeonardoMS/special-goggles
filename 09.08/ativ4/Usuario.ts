
const rl = require('readline-sync')
export class Usuario {
    adm:boolean
    nome:string
    idade:number
    matricula:number
    notas:number[]
    constructor(nome:string, idade:number, matricula:number, adm: boolean){
        this.adm = adm;
        this.idade = idade;
        this.matricula = matricula;
        this.nome = nome;
        this.notas = [];
    }

    adicionarNota(nota:number):void{
        if(this.adm){
            console.log('Adiministradores não tem nota')
        } else {
        this.notas.push(nota)
        }
    }

    getAluno():string{
        return `    Nome:${this.nome}\n    Idade:${this.idade}\n    Matricula:${this.idade}`
    }
}