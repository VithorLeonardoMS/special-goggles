export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): string;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}

export class Data implements Data{
    dia:number
    mes:number
    ano:number
    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    compara(outraData: Data):string {
        let difAno = this.ano - outraData.ano
        let ifMes = this.mes - outraData.mes
        let ifDia = this.dia - outraData.dia
        if(difAno > 0 ){
            return `${this.getTudo()} é maior`
        } else if (difAno < 0 ){
            return `${outraData.getTudo()} é maior`
        } else if (ifMes > 0){
            return `${this.getTudo()} é maior`
        } else if (ifMes < 0){
             return `${outraData.getTudo()} é maior`
        } else if (ifMes > 0){
            return `${this.getTudo()} é maior`
        } else if (ifDia < 0){
            return `${outraData.getTudo()} é maior`
        } else if(ifDia === 0){
            return 'As duas datas são iguais'
        } else{
            return 'erro'
        }
    }
    getDia(): number{
        return this.dia
    }
    getMes(): number{
        return this.mes
    }
    getTudo(): string{
        return `${this.dia}-${this.mes}-${this.ano}`
    }
    getAno(): number{
        return this.ano
    }
    getMesExtenso(): string {
        let mes = this.mes
        let extenso = ''
        switch(mes){
            case 1
:           extenso = 'janeiro'
            break
            case 2
:           extenso = 'fevereiro'
            break
            case 3
:           extenso = 'março'
            break
            case 4
:           extenso = 'abril'
            break
            case 5
:           extenso = 'maio'
            break
            case 6
 :          extenso = 'junho'
            break
            case 7
:           extenso = 'julho'
            break
            case 8
:           extenso = 'agosto'
            break
            case 9
:           extenso = 'setembro'
            break
            case 10
:           extenso = 'outubro'
            break
            case 11:
           extenso = 'novembro'
            break
            case 12:
           extenso = 'dezembro'
            break
        }
        return extenso
    }
    isBissexto(): boolean{
        if(this.ano % 100 == 0 && this.ano % 400 !== 0){
            return true
        } else if(this.ano % 4 === 0){
            return true
        } else {
            return false
        }
    }

    clone(): Data{
        return new Data (16,1,2007)
    }
}