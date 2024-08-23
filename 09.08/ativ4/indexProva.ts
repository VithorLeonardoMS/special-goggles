
import { Prova } from "../../atividade4/prova"
import { Usuario } from "./Usuario"

const rl = require('readline-sync')
let menu = true
let menu2 = false
type Gabarito = string[]
let gabarito:Gabarito = []
let prova:Prova = new Prova(gabarito)
let usuarios: Usuario[] = []
let viewer:Usuario
function setUsuario():Usuario{
    let nome = rl.question('Qual o nome do Usuario? ')
    let idade = rl.questionInt(`Qual a idade de ${nome}? `)
    let matricula = rl.questionInt(`Qual a matricula de ${nome}? `)
    let adm = rl.questionInt('È adm?[sim ou não]')
    if(adm.toLowerCase() == "sim"){
        adm = true
    } else{
        adm = false
    }
    return new Usuario(nome,idade,matricula,adm)
}
while(menu){
    console.log(`
    `)
}
while(menu2){
    console.log(`
    _______________________________________
 1: Criar ou trocar prova(Adm)
 2: Responder a prova(Aluno)
 3: Contabilizar acertos(Aluno)
 4: Verificar nota(Aluno)
 5: Comparar notas(Adm)
 6: Ver gabarito atual(Adm)
 7: Cadastrar novo usuario(Adm)
 8: Ver lista de usuarios(Adm)
 9: 
 10: Ver nota do aluno
 0: voltar`)

 let opcao = rl.question('Selecione a opcao: ')
    switch(opcao){
        case 1 && adm:
            if(gabarito.length === 0){
                for(let i = 1; i < 16;i++) {
                    gabarito.push(rl.question(`Qual a resposta correta da questao ${i}?[a,b,c,d ou e] `))
                 }
            } else{
                gabarito = []
                for(let i = 1; i < 16;i++) {
                    gabarito.push(rl.question(`Qual a resposta correta da questao ${i}?[a,b,c,d ou e] `))
            }   }
            prova = new Prova(gabarito)
            break
        case 2: 
            let resposta = rl.question(`Qual a sua resposta para a pergunta ${prova.respondidas+1}?[a,b,c,d ou e] `)
            prova.respostaAluno(resposta)
            break
        case 3:
            console.log('Você teve',prova.acertos(),'acertos na prova')
            break
        case 4:
            console.log(`Sua nota foi ${prova.nota()}`)
            break
        case 5:
             
            break
        case 6:
            let getGabarito = ''
            for(let i = 0; i < gabarito.length; i++){
                getGabarito += `n${i+1} corresponde a: ${gabarito[i].toUpperCase()}`
            }
            console.log(getGabarito)
            break
        case 7:
            Usuarios.push(setUsuario())
            break
        case 8: 

            let listagemAlunos = ''
            for(let i = 0; i < Usuario.length; i++){
                listagemAlunos += `Aluno 1: ${Usuario[i].getAluno()}`
            }
            break
        case 9:
            usuarios[usuarios.length -1].adicionarNota(prova.nota())
    }

}

function menu2{
    
}