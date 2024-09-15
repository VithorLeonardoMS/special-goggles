"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
var rl = require('readline-sync');
var Produto_1 = require("./Produto");
var Fornecedor = /** @class */ (function () {
    function Fornecedor(ID, enderecoFornecedor, nomeFornecedor, senhaFornecedor, eMail) {
        this.tipo = "Fornecedor";
        this.produtos = [];
        this.IDsRemovidos = [];
        this.ID = ID;
        this.EnderecoFornecedor = enderecoFornecedor;
        this.nomeFornecedor = nomeFornecedor;
        this.senhaFornecedor = senhaFornecedor;
        this.tipo = "Fornecedor";
        this.produtos = [];
        this.eMail = eMail;
    }
    Fornecedor.prototype.getFornecedor = function () {
        return "\n        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n        ID:             ".concat(this.ID, "\n        NomeFornecedor: ").concat(this.nomeFornecedor, " \n        endere\u00E7o:       ").concat(this.EnderecoFornecedor, "\n        E-Mail:         ").concat(this.eMail);
    };
    Fornecedor.prototype.setFornecedor = function () {
        var NovoNomeFornecedor = rl.question("Insira o novo nome do fornecedor: ");
        var NovoEnderecoFornecedor = rl.question("Insira o novo endereço: ");
        var NovaSenhaFornecedor = rl.question("Insira a nova senha do fornecedor: ");
        var novoeMail = rl.question("Insira o novo E-Mail do fornecedor: ");
        this.nomeFornecedor = NovoNomeFornecedor;
        this.senhaFornecedor = NovaSenhaFornecedor;
        this.EnderecoFornecedor = NovoEnderecoFornecedor;
        this.eMail = novoeMail;
    };
    Fornecedor.prototype.adicionarProdutos = function (produtosRemovidos, todosProdutosExistentes) {
        var novoNome = rl.question("Insira o Nome do novo produto: ");
        var novoPrecoCompra = rl.questionInt('Insira o valor de fabrica: ');
        var precoVerificacao = true;
        while (precoVerificacao) {
            if (novoPrecoCompra < 0) {
                novoPrecoCompra = rl.questionInt('Valor invalido, insira o valor de fabrica novamente: ');
            }
            else {
                precoVerificacao = false;
            }
        }
        var novoPrecoVenda = rl.questionInt("Insira o valor de venda do novo produto: ");
        var novaQuantidade = rl.questionInt("Insiria a quantidade do produto: ");
        var novoID;
        if (produtosRemovidos.length > 0) {
            novoID = produtosRemovidos.reduce(function (resultante, valoresAnalisados) {
                return Math.min(resultante, valoresAnalisados);
            }); //Resumidamente o reduce consegue executar uma função determinada item por item na array e retornar um valor acumulador, no caso resultará no menor valor
        }
        else {
            novoID = todosProdutosExistentes.length;
        }
        //"ID novo"
        this.produtos.push(new Produto_1.Produto(novoNome, novoID, novoPrecoVenda, novaQuantidade, novoPrecoCompra));
    };
    Fornecedor.prototype.getSenha = function (codigo) {
        if (codigo === 1234) {
            return this.senhaFornecedor;
        }
        else {
            return 'Codigo errado';
        }
    };
    Fornecedor.prototype.getID = function () {
        return this.ID;
    };
    return Fornecedor;
}());
exports.Fornecedor = Fornecedor;
