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
var Livro = /** @class */ (function () {
    function Livro(título, autor, anoPublicacao) {
        this.título = título;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        return "".concat(this.título, " t\u00EAm como autor ").concat(this.autor, " e foi pulicado em ").concat(this.anoPublicacao);
    };
    return Livro;
}());
var Pagina = /** @class */ (function (_super) {
    __extends(Pagina, _super);
    function Pagina() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pagina;
}(Livro));
var um = new Pagina('A origem', 'Sérigio lobato', 1999);
console.log(um.obterDetalhes());
