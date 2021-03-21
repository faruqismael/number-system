type base = 2 | 8 | 10 | 16;

class NumberSystem {
    result = 0;

    // reverse method
    reverse(value: string): string {
        let reversed: string = '';
        for (let i = value.length - 1; i >= 0; i--) {
            reversed += value[i];
        }

        return reversed;

    }

    // from any number system to decimal
    toDecimal(num: number, base: base): number {
        let binaryString = num.toString();
        let index = binaryString.length - 1;

        for (let i = 0; i < binaryString.length; i++) {
            this.result += Number(binaryString[i]) * (base ** index)
            index--;
        }
        return this.result
    }

    // decimal to any number system
    fromDecimal(decimal: number, base: base): number {
        let storeRemainder: string = '';

        while (decimal != 0) {
            storeRemainder += decimal % base;
            decimal = Math.floor(decimal / base);
        }
        return Number(this.reverse(storeRemainder))
    }


    // from binary to any number
    fromBinary(binary: number, base: base): number {
        let decimal = this.toDecimal(binary, 2)
        return this.fromDecimal(decimal, base)
    }

    // any number to binary

    toBinary(number: number, base: base) {
        let decimal = this.toDecimal(number, base)
        return this.fromDecimal(decimal, 2)
    }

}


export default NumberSystem;
let ns = new NumberSystem();

