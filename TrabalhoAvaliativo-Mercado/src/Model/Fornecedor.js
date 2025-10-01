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
        this.enderecoFornecedor = enderecoFornecedor;
        this.nomeFornecedor = nomeFornecedor;
        this.senhaFornecedor = senhaFornecedor;
        this.tipo = "Fornecedor";
        this.produtos = [];
        this.eMail = eMail;
    }
    Fornecedor.prototype.getFornecedor = function () {
        return "\n        ID:             ".concat(this.ID, "\n        NomeFornecedor: ").concat(this.nomeFornecedor, " \n        endereco:       ").concat(this.enderecoFornecedor, "\n        E-Mail:         ").concat(this.eMail);
    };
    Fornecedor.prototype.setFornecedor = function () {
        var novoNomeFornecedor = rl.question("Insira o novo nome do fornecedor: ");
        var novoenderecoFornecedor = rl.question("Insira o novo endereco: ");
        var novaSenhaFornecedor = rl.question("Insira a nova senha do fornecedor: ");
        var novoeMail = rl.question("Insira o novo E-Mail do fornecedor: ");
        this.nomeFornecedor = novoNomeFornecedor || this.nomeFornecedor;
        this.senhaFornecedor = novaSenhaFornecedor || this.senhaFornecedor;
        this.enderecoFornecedor = novoenderecoFornecedor || this.enderecoFornecedor;
        this.eMail = novoeMail || this.eMail;
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
