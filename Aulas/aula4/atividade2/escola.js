var readline = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, idade, anosXp) {
        this.nome = nome;
        this.idade = idade;
        this.anosXp = anosXp;
    }
    Professor.prototype.getProfessor = function () {
        console.log("O nome do profssor \u00E9 ".concat(this.nome, ", ele tem ").concat(this.idade, " anos e ").concat(this.anosXp, " anos de experiencia"));
    };
    Professor.prototype.setProfessor = function () {
        var nomeUp = readline.question('Qual é o nome do(a) professor(a)? ');
        this.nome = nomeUp;
        var idadeUp = readline.questionInt("Qual a idade de ".concat(this.nome, "? "));
        var anosXpUp = readline.questionInt("Qual o tempo de experiencia do(a) professor(a) ".concat(this.nome, "?"));
        this.idade = idadeUp;
        this.anosXp = anosXpUp;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(professor, nome, endereco, num_end) {
        this.professor = professor;
        this.endereco = endereco;
        this.nome = nome;
        this.num_end = num_end;
    }
    Escola.prototype.getEscola = function () {
        console.log("A escola se chama ".concat(this.nome, ", Se localiza em: ").concat(this.endereco, " no numero ").concat(this.num_end, " e tem como professor ").concat(this.professor.nome));
    };
    Escola.prototype.setEscola = function () {
        var nomeUp = readline.question('Qual o nome da escola? ');
        var enderecoUp = readline.question('Qual o endereco da escola? ');
        var num_endUp = readline.questionInt('Qual o numero de endereco da escola?');
        this.nome = nomeUp;
        this.num_end = num_endUp;
        this.endereco = enderecoUp;
        //  const professor
    };
    return Escola;
}());
//Função para exibir o menu de opções
function exibirMenu() {
    console.log("Menu de Opções:");
    console.log("1. Adcionar escola");
    console.log("2. Adcionar professor");
    console.log("3. Ver professor");
    console.log("4. Ver escola");
    console.log("5. Sair");
}
function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            novaEscola.setEscola();
            break;
        case '2':
            novoProfessor.setProfessor();
            break;
        case '3':
            novoProfessor.getProfessor();
            break;
        case '4':
            novaEscola.getEscola();
            break;
        case '5':
            console.log("Encerrando o programa...");
            return true; //Indica que o programa deve ser encerrado
        default:
            console.log("Opção invalida. Por favor, escolha uma opção valida.");
    }
    return false; // Indica que o programa não deve ser encerrado
}
//Função principal
function main() {
    var encerrar = false;
    while (!encerrar) {
        exibirMenu();
        var opcao = readline.question("Digite o numero da opcao desejada: ");
        encerrar = processarEscolha(opcao);
    }
}
//Iniciar programa
var novoProfessor = new Professor('', 0, 0);
var novaEscola = new Escola(novoProfessor, '', '', 0);
main();
