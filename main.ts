export const binaryToDecimal = (binary: number): number => {
    let binaryString: string = binary.toString();
    let index: number = binaryString.length - 1;
    let result: number = 0;


    for (let i = 0; i < binaryString.length; i++) {
        result += Number(binaryString[i]) * (2 ** index)
        index--;
    }

    return result
}

