const arithmetic = (input1: number, input2: number, choice: string): number => {
    const res = choice.toLowerCase();
    switch (res) {
        case "addition":
            return input1 + input2;
        case "subtraction":
            return input1 - input2;
        case "multiplication":
            return input1 * input2;
        case "division":
            return input1 / input2;
        case "modulo":
            return input1 % input2;
        default:
            throw new Error("Invalid choice");
    }
};
const division = (input1: number, input2: number, choice: String): number => {
    const res = choice.toLowerCase();
    switch(res) {
        case "dividend":
            return input1;
        case "divisor":
            return input2;
        case "quotient":
            return input1 / input2;
        case "remainder":
            return input1 % input2;
        default:
            throw new Error("Invalid Choice");
    }
}
export {arithmetic, division};