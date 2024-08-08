import { Data } from "./data";

let vithorNasc = new Data(16,1,2007)
let eduardoNasc = new Data(22,12,2008)
console.log(vithorNasc.getAno())
console.log(vithorNasc.clone())
console.log(vithorNasc.isBissexto())
console.log(vithorNasc.getMesExtenso())
console.log(vithorNasc.compara(eduardoNasc))
