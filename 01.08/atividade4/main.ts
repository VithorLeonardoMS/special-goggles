import { Gabarito } from "./gabarito";
import { Prova } from "./prova";


let gabarito1 = new Gabarito('abcdeacbdeabcde')
let prova1 = new Prova(gabarito1,'Teste')
prova1.respostaAluno('abcdeaaaaabbbbb')
console.log(prova1.acertos())
console.log(prova1.nota())
