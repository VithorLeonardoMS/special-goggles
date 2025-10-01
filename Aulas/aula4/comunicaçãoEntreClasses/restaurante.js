var leitor = require('readline-sync');
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.ano_xp = ano_xp;
        this.idade = idade;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Ol\u00E1 meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e sou chef da ").concat(this.ano_xp, " anos"));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question('Qual o nome do cozinheiro? ');
        var idadeUp = leitor.question('Qual a idade do cozinheiro? ');
        var ano_xpUp = leitor.question('Qual o tempo de xp do cozinheiro? ');
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereco, num_end) {
        this.cz = cz;
        this.endereco = endereco;
        this.nome = nome;
        this.num_end = num_end;
    }
    Restaurante.prototype.getRestaurante = function () {
        console.log("O coziheiro do restaurante \u00E9 ".concat(this.cz.nome, ", o nome \u00E9 ").concat(this.nome, ", endere\u00E7o \u00E9 ").concat(this.endereco, " e o n\u00FAmero do endere\u00E7o \u00E9 ").concat(this.num_end));
    };
    Restaurante.prototype.setRestaurante = function () {
        var nomeUp = leitor.question('Qual o nome do restaurante? ');
        var enderecoUp = leitor.question('Qual o endereço? ');
        var num_endUp = leitor.question('Qual o numero de endereco? ');
        this.nome = nomeUp;
        this.endereco = enderecoUp;
        this.num_end = num_endUp;
    };
    return Restaurante;
}());
//Instancia da classe cozinheiro
var bolsonaro = new Cozinheiro('lula', 2, 2);
//instancia da classe restaurante agregada com o objeto da classa cozinheiro
var casaDoBolsonaro = new Restaurante(bolsonaro, 'Casa do Lula', 'Brazil', 999);
console.log(casaDoBolsonaro.cz);
var chefNovo = new Cozinheiro('teste', 45, 25);
chefNovo.getCozinheiro();
chefNovo.setCozinheiro();
chefNovo.getCozinheiro();
var novoRestaurante = new Restaurante(chefNovo, 'teste', 'abc', 123);
novoRestaurante.getRestaurante();
novoRestaurante.setRestaurante();
novoRestaurante.getRestaurante();
