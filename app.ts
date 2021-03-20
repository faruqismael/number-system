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
            decimal = Math.floor(decimal / 2);
        }

        return Number(this.reverse(storeRemainder))
    }

    // other
}

let one = new NumberSystem();

console.log(one.toDecimal(110, 2))


export default NumberSystem;