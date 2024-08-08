export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

export class Aluno implements Aluno{
private matricula:number
public nome:string
private nota1:number
private nota2:number
private notaTrabalho:number

constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
    this.matricula = matricula
    this.nome = nome
    this.nota1=notaProva1
    this.nota2 = notaProva2
    this.notaTrabalho = notaTrabalho
}
media():number{
    return ((this.nota1 + this.nota2) /2)
}

final():number{
    return ((this.nota1 + this.nota2 + this.notaTrabalho) /3)
}
}
