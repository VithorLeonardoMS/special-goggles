import { Data } from "../atividade2/data";
import { Vaga } from "./vaga";

export interface Voo {
    constructor(numeroVoo: string, data: Data);
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): string;
    getVoo(): string;
    getData(): string;
    clone(): Voo;
}

export class Voo implements Voo{
    private numeroVoo:string
    private data:Data
    private cadeiras:[Vaga]

    constructor(numeroVoo: string, data: Data){
        this.numeroVoo = numeroVoo
        this.data = data
        this.cadeiras = [new Vaga(1)]
        for(let i = 2 ; i < 10 ; i++){
            this.cadeiras.push(new Vaga(i))
        }
    }

    proximoLivre():any {
        let i = 0 
        while(i < 100){
            if(this.cadeiras[i].livre){
                return this.cadeiras[i].numero
                i = 0
            } else{
                i++
            }
        }
    }
    verifica(cadeira: number): boolean{
        return this.cadeiras[cadeira].livre
     }
    ocupa(cadeira: number): boolean{
        if(this.cadeiras[cadeira-1].livre){
            this.cadeiras[cadeira-1].ocupa()
            return true
        } else {
            return false
        }
     
    }
    vagas():string {
        let result = ''
        for(let i = 0;i < 100;i++){
            if(this.cadeiras[i].livre){
                result += `${this.cadeiras[i].numero} esta livre \n`
            } 
        }
        return result
    }
    getVoo(): string{
        let result = ''
        for(let i = 0;i < 100;i++){
            if(this.cadeiras[i].livre){
                result += `${this.cadeiras[i].numero} esta livre \n`
            } else {
                result += `${this.cadeiras[i].numero} não esta livre \n`
            }
        }
        return `Numero do voo: ${this.numeroVoo}\nData: ${this.data.getTudo}\n${result}`
    }
    getData(): string{
        return this.data.getTudo()
    }
    clone(): Voo{
        let novoVoo = new Voo(this.numeroVoo, this.data)
        novoVoo.vagas = this.vagas
        return novoVoo
    }
}