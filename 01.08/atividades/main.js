"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = require("./aluno");
var aluno = new aluno_1.Aluno(1234, 'pedro', 6, 4, 10);
console.log(aluno.media());
console.log(aluno.final());
