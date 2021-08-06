"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
class Resta {
    constructor(a, b) {
        this.resultado = 0;
        this.resultado = a - b;
    }
    ver() {
        return console.log(this.resultado);
    }
}
exports.Resta = Resta;
