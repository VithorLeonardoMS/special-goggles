"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var vithorNasc = new data_1.Data(16, 1, 2007);
var eduardoNasc = new data_1.Data(22, 12, 2008);
console.log(vithorNasc.getAno());
console.log(vithorNasc.clone());
console.log(vithorNasc.isBissexto());
console.log(vithorNasc.getMesExtenso());
console.log(vithorNasc.compara(eduardoNasc));
