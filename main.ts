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


}

let one = new NumberSystem();

console.log(one.binaryToDecimal(110))


export default NumberSystem;