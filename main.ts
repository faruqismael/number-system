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

    // binary to decimal
    binaryToDecimal(binary: number): number {
        let binaryString = binary.toString();
        let index = binaryString.length - 1;

        for (let i = 0; i < binaryString.length; i++) {
            this.result += Number(binaryString[i]) * (2 ** index)
            index--;
        }
        return this.result
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

    // decimal to binary
    decimalToBinary(decimal: number): number {
        let storeRemainder: string = '';

        while (decimal != 0) {
            storeRemainder += decimal % 2;
            decimal = Math.floor(decimal / 2);
        }

        return Number(this.reverse(storeRemainder))
    }

    // other

    // simple shortcuts
    binaryToOctal(binary: number): number {
        let decimal = this.toDecimal(binary, 2)
        return this.fromDecimal(decimal, 8)
        // return 1
    }

    // binary to hexa
}



export default NumberSystem;