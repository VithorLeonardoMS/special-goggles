"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarNotaFiscal = cadastrarNotaFiscal;
var NotaFiscal_1 = require("../../Model/NotaFiscal");
var definirNovoID_1 = require("../IDs/definirNovoID");
var variaveis_1 = require("../variaveis");
function cadastrarNotaFiscal(vendas, cliente) {
    var IDNotaFiscal = (0, definirNovoID_1.definirNovoID)(variaveis_1.IDsRemovidosNotasFiscais, variaveis_1.listaNotasFiscais);
    variaveis_1.listaNotasFiscais.push(new NotaFiscal_1.NotaFiscal(vendas, IDNotaFiscal));
    cliente.notasFiscais.push(new NotaFiscal_1.NotaFiscal(vendas, IDNotaFiscal));
}
