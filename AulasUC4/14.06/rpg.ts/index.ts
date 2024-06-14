import { Guerreiro } from "./guerreiro"
import { Monstro } from "./monstro"

const eu:Guerreiro = new Guerreiro('Vithor','Guerreiro',5)
const bolsonaro:Monstro = new Monstro('Lula')
eu.atacar(bolsonaro)

bolsonaro.atacar(eu)

eu.atacar(bolsonaro)
bolsonaro.status()
