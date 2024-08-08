import { Gabarito } from "./gabarito";


export interface Prova {
    constructor(gabarito: Gabarito);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

 export class Prova implements Prova {
    nome:string
    gabarito:Gabarito
    respostas:string[]
    constructor(gabarito:Gabarito,nome:string){
        this.gabarito = gabarito
        this.nome = nome
    }

    respostaAluno(resposta: string): void{
        this.respostas = resposta.split('')
    }

    acertos():number{
        let result = 0
        for(let i = 0; i < this.respostas.length; i++){
            if(this.respostas[i] === this.gabarito.questoes[i]){
                result++
            }
        }
        return result
    }

    nota(): number{
        let result = 0
        for(let i = 0; i < 11; i++){
            if(this.respostas[i] === this.gabarito.questoes[i]){
                result += 0.5
            }
        }
        for(let i = 11; i < 16; i++){
            if(this.respostas[i] === this.gabarito.questoes[i]){
                result++
            }
        }
        return result
    }

    maior(outraProva: Prova): number{
        if(outraProva.nota() > this.nota()){
            return outraProva.nota()
        }
        if(outraProva.nota() < this.nota()){
            return this.nota()
        }
        if(outraProva.nota() === this.nota()){
            return this.nota()
        } else{
            return 0
        }
    }
}