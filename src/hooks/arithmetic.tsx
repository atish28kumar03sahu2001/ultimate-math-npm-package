const arithmetic = (input1: number, input2: number, choice: string) => {
    switch(choice) {
        case "Addition":
            return `${input1 + input2}`;
        case "Subtraction":
            return `${input1 - input2}`;
        case "Multiplication":
            return `${input1 * input2}`;
        case "Division":
            return `${input1 / input2}`;
        case "Modulo":
            return `${input1 % input2}`;
    }
}
export {arithmetic};