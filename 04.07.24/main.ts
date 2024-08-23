import { Jogo } from "./Jogo";
import { JogoDeTabuleiro} from "./JogoDeTabuleiro"
import { JogoEletronico} from "./JogoEletronico"
import { Biblioteca } from "./Biblioteca";

let biblioteca = new Biblioteca()

const rl = require('readline-sync')
function exibirMenu(){
    console.log(`   ~~~~~~~~~~~~~~~~~~
    BEM VINDO AO MENU! 
    Escolha: 
    Precione 1 para criar um jogo. 
    Precione 2 para listar todos os jogos.  
    precione 3 remover um jogo. 
    Precione 0 para sair.`)
}
function ProcessarEscolha(opcao){
    switch (opcao){
        case "1":
            const tipoJogo = rl.question('Qual tipo de jogo? \n(tabuleiro/eletronico) \nResposta: ').toLowerCase()
            if(tipoJogo === 'tabuleiro'){

                biblioteca.adicionarJogoTabuleiro()
            } else if(tipoJogo === 'eletronico'){
                biblioteca.adicionarJogoEletronico()
            }
            break;
        
        case "2":
            biblioteca.listarJogos()
            break;
        
        case "3":
            biblioteca.removerJogo()
            break;
        case "0":
            console.log("Encerrando...")
            return true
    }
}
 function main(){
    let encerrar:any = false
    while(!encerrar){
        exibirMenu()
        let opcao = rl.question ('Digite o numero da opcao desejada: ')
        encerrar = ProcessarEscolha(opcao)
    }
}

main()