import { Carro } from "./Carro";
import { Garagem } from "./Garagem";

const rl = require('readline-sync')

const garagem1 = new Garagem()
let carro1 = new Carro('marca',100,13)



carro1.setCarro()
console.log(carro1.getCarro())
console.log(carro1.projecaoKm(rl.questionInt('Digite os litros para descobrir quantos km eles rendem: ')))
carro1.andar()
console.log(carro1.obterGasolina())
carro1.abastecerGasolina()
console.log(carro1.obterGasolina())


garagem1.adicionarCarro(carro1)
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',60,10.23))
garagem1.adicionarCarro(new Carro('Fiat',70,9))
garagem1.adicionarCarro(new Carro('volkswagen',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))
garagem1.adicionarCarro(new Carro('Fiat',50,13.1))

