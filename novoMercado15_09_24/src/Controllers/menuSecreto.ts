import { exec } from "child_process";
import { listaClientes } from "../Utils/variaveis";
import { Funcionario } from "../Model/Funcionario";
import { Fornecedor } from "../Model/Fornecedor";
import { Cliente } from "../Model/Cliente";
import { ajustarValor } from "../Utils/ajustarValor";


let rl = require('readline-sync')

export function menuSecreto() {
    console.clear()
    console.log(`        -----MENU-----
        -------------
        UM – Показать пароли //mostra senhas
        ДВА – Перезагрузите компьютер. //reinicia computador
        ТРИ - Открыть видео //Abre vídeo do youtube
        ЧЕТВЕРТОЕ – Открытие случайных вкладок //Abre guias aleatóriasxxzxxz 
        ПЯТЬ – Сменить язык компьютера на русский //Muda o idioma do teclado para russo
        ШЕСТЬ — меняет клавиатуру на португальскую. //Muda o idioma do teclado para Português
    `)
    let ESCOLHA = ajustarValor(6,0,0,'','       ')
    switch (ESCOLHA) {

        case 1:
            console.clear()
        for (let i = 0; i < listaClientes.length; i++) {
            console.log(listaClientes[i].getSenha(1234))
        }

        break
        case 2:
            console.clear()
        exec('shutdown /r /t 0', (error, stdout, stderr) => {
            if (error) {
            console.log("ERROR")
            };
            if (stderr) {
            console.log("ERROR");
            } console.log("АОЙДВЕПФХ")
        })

        break;

        case 3:
            console.clear()
        exec('start https://www.youtube.com/watch?v=QNaDjMVh3mk', (error, stdout, stderr) => {
            if (error) {
            console.log("ERROR opening video");
            };
            if (stderr) {
            console.log("ERROR");
            }
        })

        break;

        case 4:
            console.clear()
        const websites: string[] = [
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'https://www.reddit.com',
            'https://www.google.com',
            'https://www.wikipedia.org',
            'https://www.netflix.com',
            'https://www.sitepirata.com'
        ];
        while (true) {
            websites.forEach((site) => {
            exec(`start ${site}`, (error, stdout, stderr) => {
                if (error) {
                console.log('Erro ao abrir site:', site);
                } else {
                console.log('Abrindo site:', site);
                }
            });
            })
        }

        break;

        case 5:
            console.clear()
        function mudarIdiomaTecladoParaRusso() {

            const comando = `
            powershell -Command "Set-WinUILanguageOverride -Language ru-RU; 
                    Set-WinSystemLocale -SystemLocale ru-RU;
                    Set-WinUserLanguageList -LanguageList ru-RU -Force;"
        `;

            exec(comando, { shell: 'powershell.exe' }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar o comando: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Erro: ${stderr}`);
                return;
            }
            console.log(`Saída: ${stdout}`);
            console.log('Idioma alterado para russo (RU).');
            });
        }
        mudarIdiomaTecladoParaRusso();

        break;

        case 6:
            console.clear()
        function mudarIdiomaTecladoParaPortugues() {
            // Comando para alterar o idioma para português (Brasil) usando PowerShell
            const comando = `
                powershell -Command "Set-WinUILanguageOverride -Language pt-BR; 
                        Set-WinSystemLocale -SystemLocale pt-BR;
                        Set-WinUserLanguageList -LanguageList pt-BR -Force;"
            `;

            exec(comando, { shell: 'powershell.exe' }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar o comando: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Erro: ${stderr}`);
                return;
            }
            console.log(`Saída: ${stdout}`);
            console.log('Idioma alterado para português (BR).');
            });
        }
        mudarIdiomaTecladoParaPortugues();

        break;
        default:
            console.clear()
        console.log('?')
    }
}
/*
Como estes códigos funcionam?
Se você não sabe imagina eu.
*/