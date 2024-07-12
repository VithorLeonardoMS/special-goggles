import { Carro } from "./Carro";

const rl = require('readline-sync')

export class Garagem{
    private carros:Carro[]


        constructor(){
            this.carros = []
        }
    //Método que retorna os carros da lsita de carros
    getGaragem():string{
        let lista = ''
            for(let i = 0; i < this.carros.length;i++){
                lista += this.carros[i].getCarro
            }
        return lista
    }

    //Adiciona um carro no array carros se ouverem menos de 11 carros
    adicionarCarro(carro:Carro){
        if(this.carros.length < 10){
            carro.id = this.carros.length
            this.carros.push(carro)
        } else {
            console.log('Não cabem mais carros na garagem')
        }
    }

    //Remove carro pelo nome
    removerCarro(nome){
        let id = rl.questionInt('Qual o id do carro a ser removido? ').toLowerCase()
        this.carros = this.carros.filter(car => car.id !== id)
    }
}