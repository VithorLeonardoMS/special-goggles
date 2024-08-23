import { Ponto2D, Ponto2DComCordenada } from "./Ponto2D"

const rl = require('readline-sync')
let menu:boolean = true

let listaDePontos:Ponto2D[] = []
function mostrarLista():string{
    let retorno = ''
    for(let i = 0; i < listaDePontos.length; i++){
        retorno += `ponto ${i+1}= ${listaDePontos[i].pontoToString}`
    }
    return retorno
}

function escolherDaLista(escolha:number):Ponto2D{
return listaDePontos[escolha -1]
}

function escolhaExiste(escolha:number):boolean{
    if(escolha > listaDePontos.length && escolha < 1){
        return false
    } else {
        return true
    }
}

let pergunta2
let pergunta1
while(menu){
    console.log(`
    ---------------------------
    0- Sair
    1- Criar Ponto2D
    2- Ver lista de Pontos
    3- Ver se dois pontos são iguais
    4- Ver distância entre dois pontos
    5- Clonar ponto
    6- 

    ----------------------------`)
let option = rl.questionInt('Escolha: ')
let pontoVar = new Ponto2DComCordenada(0,0)

switch(option){
    case 0:
        menu = false
        break
    case 1:
        pontoVar.setPonto2D()
        listaDePontos.push(pontoVar)
        break
    case 2:
    console.log(mostrarLista())
        break
    case 3:
        pergunta1 = rl.questionInt('Qual o primeiro ponto? ')
        pergunta2 = rl.questionInt('Qual o segundo ponto? ')
    if(escolhaExiste(pergunta1) && escolhaExiste(pergunta2)){
        if(escolherDaLista(pergunta1).equals(escolherDaLista(pergunta2))){
            console.log('Os dois pontos são iguais! ')
        } else{
            console.log('Os dois pontos são diferentes! ');
        }
    }else{
        console.log('Algo deu errado, verifique se as escolhas existem na lista e tente novamente! ')
    }
        break
    case 4:
        pergunta1 = rl.questionInt('Qual o primeiro numero?')
        pergunta2 = rl.questionInt('Qual o segundo numero')
        if(escolhaExiste(pergunta1) && escolhaExiste(pergunta2)){
            console.log(`A distancia entre ${escolherDaLista(pergunta1).pontoToString()} e ${escolherDaLista(pergunta2).pontoToString()} é: ${escolherDaLista(pergunta1).distancia(escolherDaLista(pergunta2))}`)
        } else{
            console.log('Algo deu errado, verifique se as escolhas existem na lista e tente novamente!')
        }
        break
    case 5:
        pergunta1 = rl.questionInt('Qual o numero a ser clonado?')
        if(escolhaExiste(pergunta1)){
            listaDePontos.push(escolherDaLista(pergunta1))
            console.log('Ponto clonado!')
        }else{
            console.log('Algo deu errado, verifique se a escolha existe na lista e tente novamente!')
        }
        break
}
}

/*

lista = [(1,2),(3,2),(2,4)]
pergunta = 5
lista[pergunta-1]
ponto 1 = (1,2) 0 
ponto 2 = (3,2) 1 
ponto 3 = (2,4) 2

se 5 existir dentro da lista ai executa

lista.length = 3
5 > lista.length -1




*/