"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../atividade2/data");
var voo_1 = require("./voo");
var data1 = new data_1.Data(16, 2, 2020);
var voo1 = new voo_1.Voo('internacional bradesco', data1);
console.log(voo1.vagas());
console.log(voo1.getData());
voo1.ocupa(1);
voo1.ocupa(2);
voo1.ocupa(5);
console.log(voo1.getVoo());
