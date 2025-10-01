"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var rl = require('readline-sync');
//Esta função retorna se A qunatidade de gasolina representam listros ou Mls
function litroOuMl(gasolina) {
    var litros = '';
    if (gasolina >= 1 || gasolina === 0) {
        litros = 'litro(s)';
    }
    else {
        litros = "ml";
    }
    return litros;
}
function kmOuMetros(distancia) {
    var distanciaTipo = '';
    if (distancia >= 1 || distancia === 0) {
        distanciaTipo = 'km';
    }
    else {
        distanciaTipo = "metros";
    }
    return distanciaTipo;
}
var Carro = /** @class */ (function () {
    function Carro(marca, tanque, kmLitro) {
        this.kmLitro = kmLitro;
        this.marca = marca;
        this.tanque = tanque;
        this.kmRodados = 0;
    }
    //Esse método retorna uma string que retorna as propriedades da classe "Carro"
    Carro.prototype.getCarro = function () {
        if (this.id > -999) {
            return "        ______________\n            Id: ".concat(this.id, "\n            Marca: ").concat(this.marca, "\n            Tanque: ").concat(this.tanque, " ").concat(litroOuMl(this.tanque), " \n            KM p. litro: ").concat(this.kmLitro, "\n        ");
        }
        else {
            return "        ______________\n            Marca: ".concat(this.marca, "\n            Tanque: ").concat(this.tanque, " ").concat(litroOuMl(this.tanque), " \n            KM p. litro: ").concat(this.kmLitro, "\n        ");
        }
    };
    //Modifica as propriedades do Carro por meio de readline
    Carro.prototype.setCarro = function () {
        this.marca = rl.question('Qual a marca do carro? ');
        this.tanque = rl.questionInt('Quanto de gasolina ele tem no tanque? ');
        this.kmLitro = rl.questionInt('Quantos quilometros por litros ele faz? ');
    };
    //Para demonstrar no console os km, caso sejam metros multiplica por 10, para ficar corretamente na escrita
    Carro.prototype.demonstraçãoKm = function (litros) {
        if (kmOuMetros(this.projecaoKm(litros)) === 'km') {
            return this.projecaoKm(litros);
        }
        else if (kmOuMetros(this.projecaoKm(litros)) === 'metros') {
            return this.projecaoKm(litros) * 10;
        }
    };
    //Esse método é utilizado para andar o carro, reduzindo a quantidade de combustivel do tanque de acordo com os km andados e do gasto de gasolida por km do carro
    Carro.prototype.andar = function () {
        var kmAndar = rl.questionInt('Quantos kilometros deseja andar? ');
        var litroGasto = kmAndar * this.kmLitro;
        if (litroGasto >= this.tanque) {
            console.log("Voc\u00EA andou ".concat(this.demonstraçãoKm(this.tanque), " ").concat(kmOuMetros(this.projecaoKm(this.tanque)), " e ficou sem gasolina"));
            this.kmRodados += this.projecaoKm(this.tanque);
            this.tanque = 0;
        }
        else {
            this.tanque -= litroGasto;
            console.log("Voc\u00EA andou ".concat(this.demonstraçãoKm(litroGasto), " ").concat(kmOuMetros(this.projecaoKm(litroGasto))));
            this.kmRodados += this.projecaoKm(litroGasto);
        }
    };
    //Esse método retorna o total de combustível no tanque
    Carro.prototype.obterGasolina = function () {
        return "Voc\u00EA t\u00EAm ".concat(this.tanque, " ").concat(litroOuMl(this.tanque), " de gasolina");
    };
    //Esse método retorna apenas uma projeção da quantidade de KM andado por uma quantidade de gasolina variavel
    Carro.prototype.projecaoKm = function (Litros) {
        return Litros * this.kmLitro;
    };
    //Aumenta a quantidade de gasolina no tanque por um readline
    Carro.prototype.abastecerGasolina = function () {
        this.tanque += rl.questionInt('Quantos litros de gasolina deseja abastecer? ');
    };
    return Carro;
}());
exports.Carro = Carro;
