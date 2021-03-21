"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberSystem {
    constructor() {
        this.result = 0;
    }
    // reverse method
    reverse(value) {
        let reversed = '';
        for (let i = value.length - 1; i >= 0; i--) {
            reversed += value[i];
        }
        return reversed;
    }
    // from any number system to decimal
    toDecimal(num, base) {
        let binaryString = num.toString();
        let index = binaryString.length - 1;
        for (let i = 0; i < binaryString.length; i++) {
            this.result += Number(binaryString[i]) * (Math.pow(base, index));
            index--;
        }
        return this.result;
    }
    // decimal to any number system
    fromDecimal(decimal, base) {
        let storeRemainder = '';
        while (decimal != 0) {
            storeRemainder += decimal % base;
            decimal = Math.floor(decimal / base);
        }
        return Number(this.reverse(storeRemainder));
    }
    // from binary to any number
    fromBinary(binary, base) {
        let decimal = this.toDecimal(binary, 2);
        return this.fromDecimal(decimal, base);
    }
    // any number to binary
    toBinary(number, base) {
        let decimal = this.toDecimal(number, base);
        return this.fromDecimal(decimal, 2);
    }
}
exports.default = NumberSystem;
let ns = new NumberSystem();
