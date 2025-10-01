"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definirNovoID = definirNovoID;
function definirNovoID(IDsRemovidos, listaClasse) {
    if (IDsRemovidos.length > 0) {
        return IDsRemovidos.reduce(function (resultante, valoresAnalisados) {
            return Math.min(resultante, valoresAnalisados);
        }); //Resumidamente o reduce consegue executar uma função determinada item por item na array, no caso resultará no menor valor
    }
    else {
        return listaClasse.length;
    }
}
