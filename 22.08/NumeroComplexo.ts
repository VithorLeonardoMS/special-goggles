let rl = require("readline-sync");



export class NumeroComplexo {
    real: number
    imaginario: number

    constructor(real: number, imaginario: number) {
        this.real = real
        this.imaginario = imaginario
    }

    setValores(): void {
        this.real = rl.questionInt("Qual o valor REAL voce deseja adicionar? ")
        this.imaginario = rl.questionInt("Qual o valor IMAGINARIO voce deseja adicionar? ")
    }

    getValores(): void {
        console.log(`Valor Real: ${this.real}`)
        console.log(`Valor Imaginário: ${this.imaginario}`)
    }

    somar(outroComplexo: NumeroComplexo): string {
        return new NumeroComplexo((this.real + outroComplexo.real), (this.imaginario + outroComplexo.imaginario)).toString()
    }

    subtrair(outroComplexo: NumeroComplexo): string {
        return new NumeroComplexo((this.real + outroComplexo.real) - (this.imaginario + outroComplexo.imaginario), (this.real - this.imaginario) + (outroComplexo.real - outroComplexo.imaginario)).toString()
    }

    multiplicar(outroComplexo: NumeroComplexo): string {
        return new NumeroComplexo((this.real + outroComplexo.real) * (this.imaginario + outroComplexo.imaginario), (this.real * this.imaginario - outroComplexo.real * outroComplexo.imaginario) + (this.real * outroComplexo.imaginario + outroComplexo.real * this.imaginario)).toString()
    }

    dividir(outroComplexo: NumeroComplexo): string {
        return new NumeroComplexo((this.real + outroComplexo.real) / (this.imaginario + outroComplexo.imaginario), (this.real * this.imaginario + outroComplexo.real * outroComplexo.imaginario) / (this.imaginario ** 2 + outroComplexo.imaginario ** 2) + (outroComplexo.real * this.imaginario - this.real * outroComplexo.imaginario) / (this.imaginario ** 2 + outroComplexo.imaginario ** 2)).toString()
    }

    equals(outroComplexo: NumeroComplexo): boolean {
        if (this.real === outroComplexo.real && this.imaginario === outroComplexo.imaginario) {
            return true
        } else {
            return false
        }
    }

    toString(): string {
        return `Real: ${this.real}, Imaginário: ${this.imaginario}i`
    }

    modulo(): number {
        return (Math.abs(this.real), Math.abs(this.imaginario))
    }
}

let teste = new NumeroComplexo(0, 0)
let teste2 = new NumeroComplexo(7, 3)












let menu = true

while (menu) { // enquanto o "MENU" for TRUE ele vai repetir o menu dentro.
    console.log(`
        -------------
        1- Set Valores.
        2- Get Valores.
        3- Somar.
        4- Subtrair.
        5- Multiplicar.
        6 - Dividir.
        7 - Equals.
        8 - toString.
        9 - Módulo
        0- SAIR.
    `)







    let pergunta = rl.questionInt("RESPOSTA: \n") //pergunta base do menu.
    switch (pergunta) {
        case 1:
            teste.setValores()
            break;

        case 2:
            teste.getValores()
            break;

        case 3:
            console.log(teste.somar(teste2))
            break;

        case 4:
            console.log(teste.subtrair(teste2))
            break;

        case 5:
            console.log(teste.multiplicar(teste2))
            break;

        case 6:
            console.log(teste.dividir(teste2))
            break;

        case 7:
            if (teste.equals(teste2)) {
                console.log("Os números são iguais.")
            }
            else {
                console.log("Os núeros são diferentes.")
            }
            break;

        case 8:
            console.log(teste.toString())
            break;

        case 9:
            console.log(teste.modulo())
            break;

        case 0:
            console.log(" \n Fechando...")
            menu = false;
            break;

        default:
            console.log("ERRO")
    }
} 