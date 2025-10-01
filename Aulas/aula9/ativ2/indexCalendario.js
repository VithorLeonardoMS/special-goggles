"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../atividade2/data");
var rl = require('readline-sync');
function novaDataRl() {
    var dia = rl.question('Dia: ');
    var mes = rl.question('Mes: ');
    var ano = rl.question('Ano: ');
    return new data_1.Data(dia, mes, ano);
}
function getLista(lista) {
    var string = '';
    for (var i = 0; i === lista.length - 1; i++) {
        string += "___________________________\nA data n".concat(i + 1, " \u00E9 ").concat(lista[i].getTudo());
    }
    return string;
}
var selecao = 0;
var menu = true;
var listaDatas = [];
while (menu) {
    console.log("\n    ---------------------------\n    1- Criar a data;\n    2- Comparar datas;\n    3- Print do Dia / M\u00EAs / Ano;\n    4- Verificar se \u00E9 bissexto;\n    5- Clonar Data.\n    6- Ver lista de datas\n\n    ----------------------------");
    var option = rl.questionInt('Escolha: ');
    switch (option) {
        case 0:
            menu = false;
            break;
        case 1:
            listaDatas.push(novaDataRl());
            break;
        case 2:
            var data1 = listaDatas[rl.question('Qual a primera data?(Numero da lista) ')];
            var data2 = listaDatas[rl.question('Qual a segunda data? ')];
            console.log(data1.compara(data2));
            break;
        case 3:
            selecao = rl.questionInt('Qual data voce deseja ver? ');
            console.log(listaDatas[selecao - 1].getMesExtenso());
            break;
        case 4:
            selecao = rl.questionInt('Qual data voce deseja descobrir se é bixesto? ');
            console.log(listaDatas[selecao - 1].isBissexto());
            break;
        case 5:
            selecao = rl.question('Qual data voce deseja clonar? ');
            listaDatas.push(listaDatas[selecao - 1].clone());
        case 6:
            console.log(getLista(listaDatas));
            break;
    }
}
