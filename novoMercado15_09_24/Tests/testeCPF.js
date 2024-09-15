"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testeCPF = testeCPF;
function testeCPF(CPFteste, listaClasse) {
    var executavel = true;
    for (var i = 0; i < listaClasse.length; i++) {
        if (listaClasse[i].CPF === CPFteste) {
            executavel = false;
        }
    }
    return executavel;
}
