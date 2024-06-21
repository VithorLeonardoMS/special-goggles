var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
    };
    return Pessoa;
}());
var Pé = /** @class */ (function (_super) {
    __extends(Pé, _super);
    function Pé() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pé.prototype.cumprimentar = function () {
        console.log("Sauda\u00E7\u00E3o ".concat(this.nome));
    };
    return Pé;
}(Pessoa));
var eu = new Pé('vithor', 17);
eu.cumprimentar();
