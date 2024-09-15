"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testeEmail = testeEmail;
function testeEmail(Emailteste, listaClasse) {
    var executavel = true;
    for (var i = 0; i < listaClasse.length; i++) {
        if (listaClasse[i].eMail === Emailteste) {
            executavel = false;
        }
    }
    return executavel;
}
