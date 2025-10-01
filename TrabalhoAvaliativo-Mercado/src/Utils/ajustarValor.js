"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajustarValor = ajustarValor;
//código pego na internet
var rl = require('readline-sync');
function ajustarValor(max, min, valorInicial, espacoInstrucao, espacoBarra) {
    var tecla;
    // Instruções com espaçamento controlado pelo usuário
    console.log(espacoInstrucao + '[Z] <- -> [X]  Selecionar: [ESPACO]\n');
    while (true) {
        // Espaçamento controlado pelo usuário antes da barra de ajuste
        console.log('\x1B[1A\x1B[K' + espacoBarra + '|' +
            '-'.repeat(valorInicial) + 'O' +
            '-'.repeat(max - valorInicial) + '| ' + valorInicial);
        tecla = rl.keyIn('', {
            hideEchoBack: true,
            mask: '',
            limit: 'zx '
        });
        if (tecla === 'z') {
            if (valorInicial > min) {
                valorInicial--;
            }
        }
        else if (tecla === 'x') {
            if (valorInicial < max) {
                valorInicial++;
            }
        }
        else {
            break;
        }
    }
    console.log('\nO valor que o usuário solicitou: ' + valorInicial);
    return valorInicial;
}
