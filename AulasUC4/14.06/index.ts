import { Cachorro } from "./cachorro"
import { Coruja } from "./coruja"

const novoCachorro:Cachorro = new Cachorro('Mimosa',2,'Vira-lata')
const minhaCoruja:Coruja = new Coruja('zé da manga',2.2)
novoCachorro.latir()
minhaCoruja.chirriar()
console.log(minhaCoruja.nome)