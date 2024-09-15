import { NotaFiscal } from "./NotaFiscal";

let rl = require('readline-sync')

/**
 * Cliente - Classe que representa um cliente da loja, que é logado como um usuario no sistema.
 * Apenas o cliente pode logar no menu de cliente, onde pode executar várias ações, incluindo compra de produtos.
 * 
 * @Class
 * @example 
 * /src/Utils/Cadastro/cadastrarClienteRl.ts linha 31
 */
export class Cliente {
    /**
     * Cpf do cliente, serve como um identificador único
     * @type {number}
     */
    public CPF: number;
    /**
     * Endereco do cliente - Informação complementar
     * @type {string}
     */
    private enderecoCliente: string;
    /**
     * Nome do cliente - Informação complementar que ajuda na identificação
     * @type {string}
     */
    public nomeCliente: string;
    /**
     * Senha do cliente - É nescesária para logar como cliente no menu, 
     * caso o usuário insira a senha correspondente no  terminal  o loggin é feito
     * @type {string}
     * @example 
     * /src/Controllers/menuInicial.ts linha 69
     */
    private senhaCliente: string;
    /**
     * E-mail do cliente - É usado como identificador do usuário no momento do loggin
     * @type {string}
     * @example
     * /src/Controllers/menuInicial.ts linha 68
     */
    public eMail: string;
    /**
     * Tipo - Usado para verificar o tipo de classe que é lidada
     * @type {string}
     * @example
     * /src/Utils/IDs/apagarPorID.ts linha 21
     */
    public tipo: string = "Cliente";
    /**
     * Dinheiro - Usado para comprar produtos, onde é subtraido pelo valor de venda do produto quando comprado
     * @type {number}
     * @example
     * /src/Controllers/menuCliente.ts linha 127
     */
    public dinheiro: number;
    /**
     * Notas fiscais - É uma junção de todas as notas fiscais das compras do cliente,
     * para que o cliente possa ter um registro de suas compras realizadas
     * @type {NotaFiscal[]}
     */
    public notasFiscais: NotaFiscal[] = []//precisamos implementar no código 

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
    constructor(CPF: number, enderecoCliente: string, nomeCliente: string, senhaCliente: string, eMail: string, dinheiro: number) {
        this.CPF = CPF;
        this.enderecoCliente = enderecoCliente;
        this.nomeCliente = nomeCliente;
        this.senhaCliente = senhaCliente;
        this.eMail = eMail
        this.tipo = 'Cliente';
        this.dinheiro = dinheiro;
    }

    /**
     * Geter do cliente - Retorna uma string mostrando os dados do cliente de maneira organizada
     * @returns {string}
     */
    public getCliente(): string{
        return  (`
            CPF:             ${this.CPF};
            Endereço:        ${this.enderecoCliente};
            Nome do Cliente: ${this.nomeCliente};
            Senha:           ${this.secretPassword(this.senhaCliente)};
            E-Mail:          ${this.eMail};
            Dinheiro:        ${this.dinheiro}`)
    }

    /**
     * Seter do cliente - Usado para alterar alguns dos dados do cliente
     * @returns {void}
     */
    public setCliente(): void {
        let NovoNomeCliente = rl.question("Insira o novo nome: \n")
        let NovaSenhaCliente = rl.question("Insira a nova senha: \n")
        let NovoEnderecoCliente = rl.question("Insira o novo endereco: \n")
        let NovoEmail = rl.question("Insira o novo Email: \n")
        let NovoDinheiro = rl.questionInt("Adicione uma quantia de dinheiro: \n")

        this.nomeCliente = NovoNomeCliente;
        this.enderecoCliente = NovoEnderecoCliente;
        this.eMail = NovoEmail;
        this.senhaCliente = NovaSenhaCliente;
        this.dinheiro += NovoDinheiro;
    }

        
    /**
     * Get da senha - Retorna a senha do usuário se o código estiver correto
     * @param {number} codigo - Simula uma criptografia/um método de segurança de dados
     * @returns {string} - Senha do cliente
     */
    public getSenha(codigo:number): string{
        if(codigo === 1234){
            return this.senhaCliente;
        } else {
            return 'Codigo errado'
        }
    }

    /**
     * secretPassword() - Um simples método que retorna um asterísco para cada caractere na senha do cliente
     * @param {string} senhaCliente 
     * @returns {string}
     * @example
     * /src/Model/Cliente.ts linha 96
     */
    public secretPassword(senhaCliente:string):string {
        let retorno = ''
        for(let i = 0;i < senhaCliente.length; i++){
            retorno += '*'
        }
        return retorno
    }

    /**
     * Alterara o atributo "tipo" do usuário,
     * Posteriormente é usado para alterar o tipo do usuário neutro para operação correta do código
     * @param {string} tipo - Novo tipo que substituirá o anterior
     * @param {number} codigo - Simula uma criptografia/um método de segurança de dados
     * @example
     * /src/Utils/variaveis.ts linha 29
     */
    public alterarTipo(tipo:string, codigo:number):void{
        if(codigo === 1234){
            this.tipo = tipo
        }
    } 

    /**
     * Mostra todas as notas fiscais do cliente com o método getNotaFiscalSimples()
     * @returns {strng}
     * @see {@link NotaFiscal #getNotaFiscalSimples}
     * @example
     * /src/Controllers/menuCliente.ts linha 163
     */
    public mostrarNotasFiscais():string{
        return this.notasFiscais.reduce((acumulador, notaFiscal)=>{
            return acumulador + '\n' + notaFiscal.getNotaFiscalSimples()
        },'')        
    }

    /**
     * Retorna o getNotaFiscal() da nota fiscal cujo ID é o mesmo do parâmetro
     * @param {number} Identificador - ID da nota fiscal que deseja buscar e retornar
     * @returns {string}
     * @see {@link NotaFiscal #getNotaFiscal}
     * @example
     * /src/Controllers/menuCliente.ts linha 170
     */
    public getNotaFiscalPorID(Identificador:number):string{
        let findNF= this.notasFiscais.find(notaFiscal => notaFiscal.ID === Identificador) 
        if(findNF){
            return findNF.getNotaFiscal()
        } else{
            return 'Nota fiscal não encontrada'
        }
    }
}
