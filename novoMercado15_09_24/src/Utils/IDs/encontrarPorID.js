"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontrarPorID = encontrarPorID;
function encontrarPorID(listaClasse, ID) {
    var retorno = -1;
    listaClasse.forEach(function (valorAtual, indice) {
        if (valorAtual.ID === ID) {
            retorno = indice;
        }
    });
    return retorno;
}
