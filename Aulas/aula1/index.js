var rl = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca, km) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.km = km;
    }
    Carro.prototype.acelerar = function () {
        console.log('vrummmm');
    };
    Carro.prototype.levarNoMecanico = function () {
        console.log('bah, deu ruim');
    };
    Carro.prototype.força = function () {
        if (this.motor >= 2.0) {
            console.log('Bébe mais que meu pai');
        }
        else if (this.motor > 1.6) {
            console.log('Fortão');
        }
        else if (this.motor >= 1.4) {
            console.log('Mediano');
        }
        else {
            console.log('50km por litro slk');
        }
    };
    return Carro;
}());
var meuCarro = new Carro(15, 2.0, 'Azul', 'Lancer', 'Mitsubishi', 0);
meuCarro.acelerar();
meuCarro.levarNoMecanico();
meuCarro.força();
var rodas = rl.questionInt('Qual o tamanho das rodas? ');
var motor = rl.questionFloat('qual as cilindradas do motor? ');
var cor = rl.question('Qual a cor do carro: ');
var modelo = rl.question('Qual o modelo do carro? ');
var marca = rl.question('Qual a marca do carro? ');
var km = rl.question('Qual a kilometragem do carro? ');
var carro2 = new Carro(rodas, motor, cor, modelo, marca, km);
carro2.força();
