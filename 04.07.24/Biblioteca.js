"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var JogoDeTabuleiro_1 = require("./JogoDeTabuleiro");
var JogoEletronico_1 = require("./JogoEletronico");
var rl = require('readline-sync');
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.jogos = [];
    }
    Biblioteca.prototype.adicionarJogoTabuleiro = function () {
        var titulo = rl.question('Qual o titulo do jogo? ');
        var genero = rl.question('Qual o genero do jogo? ');
        var classificacao = rl.questionInt('Qual a classificacao etaria do jogo? ');
        var numeroDeJogadores = rl.question('Qual o numero de jogadores? ');
        var jogo = new JogoDeTabuleiro_1.JogoDeTabuleiro(titulo, genero, classificacao, numeroDeJogadores);
        this.jogos.push(jogo);
    };
    Biblioteca.prototype.adicionarJogoEletronico = function () {
        var titulo = rl.question('Qual o titulo do jogo? ');
        var genero = rl.question('Qual o genero do jogo? ');
        var classificacao = rl.questionInt('Qual a classificacao etaria do jogo? ');
        var plataforma = rl.question('Qual a plataforma do jogo? ');
        var jogo = new JogoEletronico_1.JogoEletronico(titulo, genero, classificacao, plataforma);
        this.jogos.push(jogo);
    };
    Biblioteca.prototype.removerJogo = function () {
        var titulo = rl.question('Qual o nome do jogo a ser removido? ').toLowerCase();
        this.jogos = this.jogos.filter(function (game) { return game.getPropriedades()[0].toLowerCase() !== titulo; });
    };
    Biblioteca.prototype.listarJogos = function () {
        var list = '';
        for (var i = 0; i < this.jogos.length; i++) {
            list += '\n' + this.jogos[i].getDetalhes();
        }
        console.log(list);
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
/*adicionarJogo(jogo: Jogo): void - Adiciona um jogo à biblioteca.
removerJogo(titulo: string): void - Remove um jogo pelo título.
listarJogos(): string - Retorna uma lista de detalhes de todos os jogos na biblioteca.
*/ 
