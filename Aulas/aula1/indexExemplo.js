var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
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
        else if (this.motor === 1.8) {
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
var meuCarro = new Carro(15, 2.0, 'Azul', 'Lancer', 'Mitsubishi');
meuCarro.acelerar();
meuCarro.levarNoMecanico();
meuCarro.força();
