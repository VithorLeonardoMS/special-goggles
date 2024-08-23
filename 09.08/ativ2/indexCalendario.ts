
import { Data } from "../../atividade2/data"

const rl = require('readline-sync')
function novaDataRl():Data{
    let dia = rl.question('Dia: ')
    let mes = rl.question('Mes: ')
    let ano = rl.question('Ano: ')
    return new Data(dia,mes,ano)
}
function getLista(lista:Data[]):string{
    let string:string = ''
    for(let i = 0;i === lista.length - 1; i++){
        string += `___________________________\nA data n${i+1} é ${lista[i].getTudo()}`
    }
    return string
}
let selecao = 0
let menu:boolean = true
let listaDatas:Data[] = []
while(menu){
    console.log(`
    ---------------------------
    1- Criar a data;
    2- Comparar datas;
    3- Print do Dia / Mês / Ano;
    4- Verificar se é bissexto;
    5- Clonar Data.
    6- Ver lista de datas

    ----------------------------`)
let option = rl.questionInt('Escolha: ')
 
switch(option){
    case 0:
        menu = false
        break
    case 1:
        listaDatas.push(novaDataRl())
        break
    case 2:
        let data1 = listaDatas[rl.question('Qual a primera data?(Numero da lista) ')]
        let data2 = listaDatas[rl.question('Qual a segunda data? ')]
        console.log(data1.compara(data2))
        break
    case 3:
        selecao = rl.questionInt('Qual data voce deseja ver? ')
        console.log(listaDatas[selecao - 1].getMesExtenso())
        break
    case 4:
        selecao = rl.questionInt('Qual data voce deseja descobrir se é bixesto? ')
        console.log(listaDatas[selecao - 1].isBissexto())
        break
    case 5:
        selecao = rl.question('Qual data voce deseja clonar? ')
        listaDatas.push(listaDatas[selecao - 1].clone())
    case 6:
        console.log(getLista(listaDatas))
        break 
}
}

