class NumberSystem {

    result = 0;

    // utils

    reverse(value: string): string {
        let reversed: string = '';
        for (let i = value.length - 1; i >= 0; i--) {
            reversed += value[i];
        }

        return reversed;

    }

    // for all 
    toDecimal(num: number, base: number): number {
        let binaryString = num.toString();
        let index = binaryString.length - 1;

        for (let i = 0; i < binaryString.length; i++) {
            this.result += Number(binaryString[i]) * (base ** index)
            index--;
        }
        return this.result
    }

    // decimal to binary
    fromDecimal(decimal: number, base: number): number {
        let storeRemainder: string = '';

        while (decimal != 0) {
            storeRemainder += decimal % base;
            decimal = Math.floor(decimal / base);
        }
        return Number(this.reverse(storeRemainder))
    }

    // simple shortcuts

    // from binary
    fromBinary(binary: number, base: number): number {
        let decimal = this.toDecimal(binary, 2)
        return this.fromDecimal(decimal, base)
        // return 1
    }

    // to binary

    toBinary(number: number, base: number) {
        let decimal = this.toDecimal(number, base)
        return this.fromDecimal(decimal, 2)
    }

}


export default NumberSystem;
