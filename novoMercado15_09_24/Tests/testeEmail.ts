import { Cliente     } from "../src/Model/Cliente";
import { Fornecedor  } from "../src/Model/Fornecedor";
import { Funcionario } from "../src/Model/Funcionario";

export function testeEmail(Emailteste: string, listaClasse: Funcionario[] | Cliente[] | Fornecedor[]) {
    let executavel = true;
    for (let i = 0; i < listaClasse.length; i++) {
        if (listaClasse[i].eMail === Emailteste) {
            executavel = false;
        }
    }
    return executavel;
}