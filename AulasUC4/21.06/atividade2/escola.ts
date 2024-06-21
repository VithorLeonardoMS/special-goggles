const readline = require('readline-sync')
class Professor{

    nome:string
    idade:number
    anosXp:number

    constructor(nome:string,idade:number,anosXp:number){
        this.nome = nome
        this.idade = idade
        this.anosXp = anosXp
    }
    getProfessor():void{
        console.log(`O nome do profssor é ${this.nome}, ele tem ${this.idade} anos e ${this.anosXp} anos de experiencia`)
    }
    setProfessor():void{
        const nomeUp = readline.question('Qual é o nome do(a) professor(a)? ')
        this.nome = nomeUp
        const idadeUp = readline.questionInt(`Qual a idade de ${this.nome}? `)
        const anosXpUp = readline.questionInt(`Qual o tempo de experiencia do(a) professor(a) ${this.nome}?`)
        this.idade = idadeUp
        this.anosXp = anosXpUp
    } 
}
class Escola{
    professor:Professor
    nome:string
    endereco:string
    num_end:number

    constructor(professor:Professor, nome:string, endereco:string, num_end:number){
        this.professor = professor
        this.endereco = endereco
        this.nome = nome
        this.num_end = num_end
    }

    getEscola():void{
        console.log(`A escola se chama ${this.nome}, Se localiza em: ${this.endereco} no numero ${this.num_end} e tem como professor ${this.professor.nome}`)
    }
    setEscola():void{
        const nomeUp = readline.question('Qual o nome da escola? ')
        const enderecoUp = readline.question('Qual o endereco da escola? ')
        const num_endUp = readline.questionInt('Qual o numero de endereco da escola?')
        this.nome = nomeUp
        this.num_end = num_endUp
        this.endereco = enderecoUp
      //  const professor
    }
}

//Função para exibir o menu de opções
function exibirMenu ():void {
    console.log("Menu de Opções:");
    console.log("1. Adcionar escola");
    console.log("2. Adcionar professor");
    console.log("3. Ver professor")
    console.log("4. Ver escola");
    console.log("5. Sair");
}


function processarEscolha (opcao):boolean {
    switch (opcao) {
        case '1':
             novaEscola.setEscola()
        break
        case '2':
             novoProfessor.setProfessor()

        break
        case '3':
             novoProfessor.getProfessor()
        break;
        case '4':
            novaEscola.getEscola()
        break
        case '5':
            console.log("Encerrando o programa...");
            return true; //Indica que o programa deve ser encerrado
    default:
        console.log("Opção invalida. Por favor, escolha uma opção valida.");
        }
        return false; // Indica que o programa não deve ser encerrado
}


//Função principal
function main():void {
    let encerrar = false;

    while (!encerrar) {
        exibirMenu();
        let opcao = readline.question ("Digite o numero da opcao desejada: ");
        encerrar = processarEscolha(opcao);
    }
}

//Iniciar programa
let novoProfessor = new Professor('',0,0)
let novaEscola = new Escola(novoProfessor,'','',0)

main();
