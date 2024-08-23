import { match } from "assert"

const rl = require('readline-sync')

export class Ponto2D {
    public x: number
    public y: number
    constructor() {
        this.x = 0
        this.y = 0
    }

    setPonto2D(): void {
        this.x = rl.questionInt('Qual o valor do ponto x? ')
        this.y = rl.questionInt('Qual o valor do ponto y? ')
    }

    getX(): number {
        return this.x
    }

    getY(): number {
        return this.y
    }

    pontoToString(): string {
        return `(${this.x},${this.y})`
    }

    equals(outroPonto: Ponto2D): boolean {
        if (this.x === outroPonto.x && this.y === outroPonto.y) {
            return true
        } else {
            return false
        }
    }

    distancia(outroPonto: Ponto2D): number {
        return Math.sqrt((((outroPonto.x - this.x) ** 2) + ((outroPonto.y - this.y) ** 2)))
    }

    clone(): Ponto2D {
        let retorno = new Ponto2D()
        retorno.x = this.x
        retorno.y = this.y
        return retorno
    }
}

export class Ponto2DComCordenada extends Ponto2D {
    constructor(X: number, Y: number) {
        super()
        this.x = X
        this.y = Y
    }
    alterarPonto(X: number, Y: number): void {
        this.x = X
        this.y = Y
    }
}

export class CopiaPonto2D extends Ponto2D {
    constructor(outroPonto2D: Ponto2D) {
        super()
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y
    }
    alterarPonto(outroPonto2D): void {
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y
    }
}

// let ponto1 = new Ponto2D()
// console.log('0 0_', ponto1.pontoToString())

// ponto1.setPonto2D(1, 2)
// console.log('1 2_', ponto1.pontoToString())

// let ponto2 = new Ponto2DComCordenada(2, 3)
// console.log('2 3_', ponto2.pontoToString())
// ponto2.alterarPonto(10, 10)
// console.log('10 10_', ponto2.pontoToString())

// let ponto3 = new CopiaPonto2D(ponto2)
// console.log('10 10_', ponto3.pontoToString())

// ponto3.alterarPonto(ponto1.clone())// testa clone 
// console.log('1 2_', ponto3.pontoToString())

// console.log('true', ponto1.equals(ponto1))

// console.log('0_', ponto1.distancia(ponto1))

