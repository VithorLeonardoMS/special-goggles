"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuSecreto = menuSecreto;
var child_process_1 = require("child_process");
var variaveis_1 = require("../Utils/variaveis");
var ajustarValor_1 = require("../Utils/ajustarValor");
var rl = require('readline-sync');
function menuSecreto() {
    console.clear();
    console.log("        -----MENU-----\n        -------------\n        UM \u2013 \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u0438 //mostra senhas\n        \u0414\u0412\u0410 \u2013 \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440. //reinicia computador\n        \u0422\u0420\u0418 - \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u0434\u0435\u043E //Abre v\u00EDdeo do youtube\n        \u0427\u0415\u0422\u0412\u0415\u0420\u0422\u041E\u0415 \u2013 \u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0432\u043A\u043B\u0430\u0434\u043E\u043A //Abre guias aleat\u00F3riasxxzxxz \n        \u041F\u042F\u0422\u042C \u2013 \u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 //Muda o idioma do teclado para russo\n        \u0428\u0415\u0421\u0422\u042C \u2014 \u043C\u0435\u043D\u044F\u0435\u0442 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443 \u043D\u0430 \u043F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u044C\u0441\u043A\u0443\u044E. //Muda o idioma do teclado para Portugu\u00EAs\n    ");
    var ESCOLHA = (0, ajustarValor_1.ajustarValor)(6, 0, 0, '', '       ');
    switch (ESCOLHA) {
        case 1:
            console.clear();
            for (var i = 0; i < variaveis_1.listaClientes.length; i++) {
                console.log(variaveis_1.listaClientes[i].getSenha(1234));
            }
            break;
        case 2:
            console.clear();
            (0, child_process_1.exec)('shutdown /r /t 0', function (error, stdout, stderr) {
                if (error) {
                    console.log("ERROR");
                }
                ;
                if (stderr) {
                    console.log("ERROR");
                }
                console.log("АОЙДВЕПФХ");
            });
            break;
        case 3:
            console.clear();
            (0, child_process_1.exec)('start https://www.youtube.com/watch?v=QNaDjMVh3mk', function (error, stdout, stderr) {
                if (error) {
                    console.log("ERROR opening video");
                }
                ;
                if (stderr) {
                    console.log("ERROR");
                }
            });
            break;
        case 4:
            console.clear();
            var websites = [
                'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'https://www.reddit.com',
                'https://www.google.com',
                'https://www.wikipedia.org',
                'https://www.netflix.com',
                'https://www.sitepirata.com'
            ];
            while (true) {
                websites.forEach(function (site) {
                    (0, child_process_1.exec)("start ".concat(site), function (error, stdout, stderr) {
                        if (error) {
                            console.log('Erro ao abrir site:', site);
                        }
                        else {
                            console.log('Abrindo site:', site);
                        }
                    });
                });
            }
            break;
        case 5:
            console.clear();
            function mudarIdiomaTecladoParaRusso() {
                var comando = "\n            powershell -Command \"Set-WinUILanguageOverride -Language ru-RU; \n                    Set-WinSystemLocale -SystemLocale ru-RU;\n                    Set-WinUserLanguageList -LanguageList ru-RU -Force;\"\n        ";
                (0, child_process_1.exec)(comando, { shell: 'powershell.exe' }, function (error, stdout, stderr) {
                    if (error) {
                        console.error("Erro ao executar o comando: ".concat(error.message));
                        return;
                    }
                    if (stderr) {
                        console.error("Erro: ".concat(stderr));
                        return;
                    }
                    console.log("Sa\u00EDda: ".concat(stdout));
                    console.log('Idioma alterado para russo (RU).');
                });
            }
            mudarIdiomaTecladoParaRusso();
            break;
        case 6:
            console.clear();
            function mudarIdiomaTecladoParaPortugues() {
                // Comando para alterar o idioma para português (Brasil) usando PowerShell
                var comando = "\n                powershell -Command \"Set-WinUILanguageOverride -Language pt-BR; \n                        Set-WinSystemLocale -SystemLocale pt-BR;\n                        Set-WinUserLanguageList -LanguageList pt-BR -Force;\"\n            ";
                (0, child_process_1.exec)(comando, { shell: 'powershell.exe' }, function (error, stdout, stderr) {
                    if (error) {
                        console.error("Erro ao executar o comando: ".concat(error.message));
                        return;
                    }
                    if (stderr) {
                        console.error("Erro: ".concat(stderr));
                        return;
                    }
                    console.log("Sa\u00EDda: ".concat(stdout));
                    console.log('Idioma alterado para português (BR).');
                });
            }
            mudarIdiomaTecladoParaPortugues();
            break;
        default:
            console.clear();
            console.log('?');
    }
}
/*
Como estes códigos funcionam?
Se você não sabe imagina eu.
*/ 
