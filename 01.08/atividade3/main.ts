import { Data } from "../atividade2/data";
import { Voo } from "./voo";

let data1 = new Data(16,2,2020)
let voo1 = new Voo('internacional bradesco',data1)
console.log(voo1.vagas())
console.log(voo1.getData())
voo1.ocupa(1)
voo1.ocupa(2)
voo1.ocupa(5)
console.log(voo1.getVoo())
