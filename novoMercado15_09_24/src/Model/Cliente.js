"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var rl = require('readline-sync');
/**
 * Cliente - Classe que representa um cliente da loja, que é logado como um usuario no sistema.
 * Apenas o cliente pode logar no menu de cliente, onde pode executar várias ações, incluindo compra de produtos.
 *
 * @Class
 * @example
 * /src/Utils/Cadastro/cadastrarClienteRl.ts linha 31
 */
var Cliente = /** @class */ (function () {
    /**
     * Cria uma instância de Cliente
     * @constructor
     * @param {number} CPF - CPF identificador
     * @param {string} enderecoCliente - Informação complementar referente ao endereço
     * @param {string} nomeCliente - Nome do cliente
     * @param {string} senhaCliente  - Senha para loggin do cliente
     * @param {string} eMail - E-Mail de cadastro
     * @param {number} dinheiro - Dinheiro que o cliente têm disponivel para gastar
     */
    function Cliente(CPF, enderecoCliente, nomeCliente, senhaCliente, eMail, dinheiro) {
        /**
         * Tipo - Usado para verificar o tipo de classe que é lidada
         * @type {string}
         * @example
         * /src/Utils/IDs/apagarPorID.ts linha 21
         */
        this.tipo = "Cliente";
        /**
         * Notas fiscais - É uma junção de todas as notas fiscais das compras do cliente,
         * para que o cliente possa ter um registro de suas compras realizadas
         * @type {NotaFiscal[]}
         */
        this.notasFiscais = []; //precisamos implementar no código 
        this.CPF = CPF;
        this.enderecoCliente = enderecoCliente;
        this.nomeCliente = nomeCliente;
        this.senhaCliente = senhaCliente;
        this.eMail = eMail;
        this.tipo = 'Cliente';
        this.dinheiro = dinheiro;
    }
    /**
     * Geter do cliente - Retorna uma string mostrando os dados do cliente de maneira organizada
     * @returns {string}
     */
    Cliente.prototype.getCliente = function () {
        return ("\n            CPF:             ".concat(this.CPF, ";\n            Endere\u00E7o:        ").concat(this.enderecoCliente, ";\n            Nome do Cliente: ").concat(this.nomeCliente, ";\n            Senha:           ").concat(this.secretPassword(this.senhaCliente), ";\n            E-Mail:          ").concat(this.eMail, ";\n            Dinheiro:        ").concat(this.dinheiro));
    };
    /**
     * Seter do cliente - Usado para alterar alguns dos dados do cliente
     * @returns {void}
     */
    Cliente.prototype.setCliente = function () {
        var NovoNomeCliente = rl.question("Insira o novo nome: \n");
        var NovaSenhaCliente = rl.question("Insira a nova senha: \n");
        var NovoEnderecoCliente = rl.question("Insira o novo endereco: \n");
        var NovoEmail = rl.question("Insira o novo Email: \n");
        var NovoDinheiro = rl.questionInt("Adicione uma quantia de dinheiro: \n");
        this.nomeCliente = NovoNomeCliente;
        this.enderecoCliente = NovoEnderecoCliente;
        this.eMail = NovoEmail;
        this.senhaCliente = NovaSenhaCliente;
        this.dinheiro += NovoDinheiro;
    };
    /**
     * Get da senha - Retorna a senha do usuário se o código estiver correto
     * @param {number} codigo - Simula uma criptografia/um método de segurança de dados
     * @returns {string} - Senha do cliente
     */
    Cliente.prototype.getSenha = function (codigo) {
        if (codigo === 1234) {
            return this.senhaCliente;
        }
        else {
            return 'Codigo errado';
        }
    };
    /**
     * secretPassword() - Um simples método que retorna um asterísco para cada caractere na senha do cliente
     * @param {string} senhaCliente
     * @returns {string}
     * @example
     * /src/Model/Cliente.ts linha 96
     */
    Cliente.prototype.secretPassword = function (senhaCliente) {
        var retorno = '';
        for (var i = 0; i < senhaCliente.length; i++) {
            retorno += '*';
        }
        return retorno;
    };
    /**
     * Alterara o atributo "tipo" do usuário,
     * Posteriormente é usado para alterar o tipo do usuário neutro para operação correta do código
     * @param {string} tipo - Novo tipo que substituirá o anterior
     * @param {number} codigo - Simula uma criptografia/um método de segurança de dados
     * @example
     * /src/Utils/variaveis.ts linha 29
     */
    Cliente.prototype.alterarTipo = function (tipo, codigo) {
        if (codigo === 1234) {
            this.tipo = tipo;
        }
    };
    /**
     * Mostra todas as notas fiscais do cliente com o método getNotaFiscalSimples()
     * @returns {strng}
     * @see {@link NotaFiscal #getNotaFiscalSimples}
     * @example
     * /src/Controllers/menuCliente.ts linha 163
     */
    Cliente.prototype.mostrarNotasFiscais = function () {
        return this.notasFiscais.reduce(function (acumulador, notaFiscal) {
            return acumulador + '\n' + notaFiscal.getNotaFiscalSimples();
        }, '');
    };
    /**
     * Retorna o getNotaFiscal() da nota fiscal cujo ID é o mesmo do parâmetro
     * @param {number} Identificador - ID da nota fiscal que deseja buscar e retornar
     * @returns {string}
     * @see {@link NotaFiscal #getNotaFiscal}
     * @example
     * /src/Controllers/menuCliente.ts linha 170
     */
    Cliente.prototype.getNotaFiscalPorID = function (Identificador) {
        var findNF = this.notasFiscais.find(function (notaFiscal) { return notaFiscal.ID === Identificador; });
        if (findNF) {
            return findNF.getNotaFiscal();
        }
        else {
            return 'Nota fiscal não encontrada';
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
