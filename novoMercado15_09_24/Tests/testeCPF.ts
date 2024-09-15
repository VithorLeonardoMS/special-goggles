import { Cliente     } from "../src/Model/Cliente";
import { Funcionario } from "../src/Model/Funcionario";

export function testeCPF(CPFteste: number, listaClasse: Funcionario[] | Cliente[]): boolean {
    let executavel = true;
    for (let i = 0; i < listaClasse.length; i++) {
        if (listaClasse[i].CPF === CPFteste) {
            executavel = false;
        }
    }
    return executavel;
}