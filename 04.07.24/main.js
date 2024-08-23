"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./Biblioteca");
var biblioteca = new Biblioteca_1.Biblioteca();
var rl = require('readline-sync');
function exibirMenu() {
    console.log("   ~~~~~~~~~~~~~~~~~~\n    BEM VINDO AO MENU! \n    Escolha: \n    Precione 1 para criar um jogo. \n    Precione 2 para listar todos os jogos.  \n    precione 3 remover um jogo. \n    Precione 0 para sair.");
}
function ProcessarEscolha(opcao) {
    switch (opcao) {
        case "1":
            var tipoJogo = rl.question('Qual tipo de jogo? \n(tabuleiro/eletronico) \nResposta: ').toLowerCase();
            if (tipoJogo === 'tabuleiro') {
                biblioteca.adicionarJogoTabuleiro();
            }
            else if (tipoJogo === 'eletronico') {
                biblioteca.adicionarJogoEletronico();
            }
            break;
        case "2":
            biblioteca.listarJogos();
            break;
        case "3":
            biblioteca.removerJogo();
            break;
        case "0":
            console.log("Encerrando...");
            return true;
    }
}
function main() {
    var encerrar = false;
    while (!encerrar) {
        exibirMenu();
        var opcao = rl.question('Digite o numero da opcao desejada: ');
        encerrar = ProcessarEscolha(opcao);
    }
}
main();
