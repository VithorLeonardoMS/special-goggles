class Data{
    dia:number
    mes:number
    ano:number

    constructor(dia:number,mes:number,ano:number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

let novaData = new Data(11,10,2001)
console.log(novaData)