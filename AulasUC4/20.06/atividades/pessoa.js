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
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.cumprimentar = function () {
        console.log("Sauda\u00E7\u00E3o ".concat(this.nome, ", voc\u00EA t\u00EAm ").concat(this.idade));
    };
    return Idoso;
}(Pessoa));
var Criança = /** @class */ (function (_super) {
    __extends(Criança, _super);
    function Criança() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Criança.prototype.cumprimentar = function () {
        console.log("Sauda\u00E7\u00E3o ".concat(this.nome, ", voc\u00EA t\u00EAm ").concat(this.idade));
    };
    return Criança;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.cumprimentar = function () {
        console.log("Sauda\u00E7\u00E3o ".concat(this.nome, ", voc\u00EA t\u00EAm ").concat(this.idade, " anos"));
    };
    return Adulto;
}(Pessoa));
var eu = new Idoso('vithor', 17);
eu.cumprimentar();
