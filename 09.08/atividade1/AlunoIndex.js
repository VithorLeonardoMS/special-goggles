"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = require("../../atividades/aluno");
var reader = require('readline-sync');
function inserirNotas(nome, matricula) {
    var prova1 = reader.questionInt('Insira a nota da prova 1:');
    var prova2 = reader.questionInt('Insira a nota da prova: ');
    var trabalho = reader.questionInt('Insira a nota do trabalho: ');
    var alunoNovo = new aluno_1.Aluno(matricula, nome, prova1, prova2, trabalho);
    return alunoNovo;
}
var menu = true;
var alunoExiste = false;
while (menu) {
    console.log("\n        ---------------------------------\n        1- Cadastrar Nome e Matricula (Alunos)\n        2- Cadastrar Notas (professores)\n        3- Verificar M\u00E9dias das Provas (Alunos)\n        4- Verificar M\u00E9dia Final (Alunos)\n        ---------------------------------");
    var option = reader.questionInt('Escolha: ');
    switch (option) {
        case 1:
            var nomeAluno = reader.question('inserir o nome do aluno: ');
            var matriculaAluno = reader.questionInt('Numero de Matricula: ');
            var alunoNovo = inserirNotas(nomeAluno, matriculaAluno);
            alunoExiste = true;
            break;
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno);
            }
            else {
                throw new Error('O aluno não foi criado');
            }
            break;
        case 3:
            if (alunoExiste) {
                console.log(alunoNovo.media());
            }
            break;
        case 4:
            if (alunoExiste) {
                console.log(alunoNovo.final());
            }
        case 0:
            menu = false;
            process.exit(0);
        default:
            console.log('Essa opção não existe');
            break;
    }
}
