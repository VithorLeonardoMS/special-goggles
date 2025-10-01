"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
var coruja_1 = require("./coruja");
var novoCachorro = new cachorro_1.Cachorro('Mimosa', 2, 'Vira-lata');
var minhaCoruja = new coruja_1.Coruja('zé da manga', 2.2);
novoCachorro.latir();
minhaCoruja.chirriar();
console.log(minhaCoruja.nome);
