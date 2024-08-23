import { Aluno } from "../../atividades/aluno"

const reader = require('readline-sync')

function inserirNotas(nome:string, matricula: number):Aluno {
    let prova1 = reader.questionInt('Insira a nota da prova 1:' )
    let prova2 = reader.questionInt('Insira a nota da prova: ')
    let trabalho = reader.questionInt('Insira a nota do trabalho: ')
    let alunoNovo = new Aluno(matricula,nome,prova1,prova2,trabalho)
    return alunoNovo
}

let menu: boolean = true
let alunoExiste: boolean = false
while(menu){
    console.log(`
        ---------------------------------
        0- encerrar
        1- Cadastrar Nome e Matricula (Alunos)
        2- Cadastrar Notas (professores)
        3- Verificar Médias das Provas (Alunos)
        4- Verificar Média Final (Alunos)
        ---------------------------------`)
    
    let option = reader.questionInt('Escolha: ')
        
    switch(option){
        case 1:
            let nomeAluno:string = reader.question('inserir o nome do aluno: ')
            let matriculaAluno = reader.questionInt('Numero de Matricula: ')
            let alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            alunoExiste = true
            break
        case 2:
            if(alunoExiste){
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            } else {
                throw new Error('O aluno não foi criado')
            }
            break
        case 3:
            if(alunoExiste){
                console.log(alunoNovo.media())
            }
            break
        case 4:
            if(alunoExiste){
                console.log(alunoNovo.final())
            }
        case 0:
            menu = false
            process.exit(0)
        default:
            console.log('Essa opção não existe')
            break
    }

}

