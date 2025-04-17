const arithmetic = (input1: number, input2: number, choice: string): number => {
    switch (choice) {
        case "Addition":
            return input1 + input2;
        case "Subtraction":
            return input1 - input2;
        case "Multiplication":
            return input1 * input2;
        case "Division":
            return input1 / input2;
        case "Modulo":
            return input1 % input2;
        default:
            throw new Error("Invalid choice");
    }
};
const division = (input1: number, input2: number, choice: String): number => {
    switch(choice) {
        case "Dividend":
            return input1;
        case "Divisor":
            return input2;
        case "Quotient":
            return input1 / input2;
        case "Remainder":
            return input1 % input2;
        default:
            throw new Error("Invalid Choice");
    }
}
export {arithmetic, division};