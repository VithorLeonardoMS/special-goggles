"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gabarito_1 = require("./gabarito");
var prova_1 = require("./prova");
var gabarito1 = new gabarito_1.Gabarito('abcdeacbdeabcde');
var prova1 = new prova_1.Prova(gabarito1, 'Teste');
prova1.respostaAluno('abcdeaaaaabbbbb');
console.log(prova1.acertos());
console.log(prova1.nota());
