const arithmetic = (Operand1: number, Operand2: number, OperatorChoice: string): number => {
    const res = OperatorChoice.toLowerCase();
    switch (res) {
        case "addition":
            return Operand1 + Operand2;
        case "subtraction":
            return Operand1 - Operand2;
        case "multiplication":
            return Operand1 * Operand2;
        case "division":
            return Operand1 / Operand2;
        case "modulo":
            return Operand1 % Operand2;
        default:
            throw new Error("Invalid choice");
    }
};
const division = (Dividend: number, Divisor: number, DivisionChoice: String): number => {
    const res = DivisionChoice.toLowerCase();
    switch(res) {
        case "dividend":
            return Dividend;
        case "divisor":
            return Divisor;
        case "quotient":
            return Dividend / Divisor;
        case "remainder":
            return Dividend % Divisor;
        default:
            throw new Error("Invalid Choice");
    }
}
export {arithmetic, division};