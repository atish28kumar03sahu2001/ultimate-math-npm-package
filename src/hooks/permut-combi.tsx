const factorialCache: Record<number, number> = {};
const factorialNumber = (n: number): number => {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    if (factorialCache[n]) {
        return factorialCache[n];
    }
    factorialCache[n] = n * factorialNumber(n - 1);
    return factorialCache[n];
};
const permutation = (n: number, r: number): number => {
    if (n < 0 || r < 0 || n < r) {
        throw new Error("Invalid input for permutation");
    }
    return factorialNumber(n) / factorialNumber(n - r);
};
const combination = (n: number, r: number): number => {
    if (n < 0 || r < 0 || n < r) {
        throw new Error("Invalid input for combination");
    }
    return factorialNumber(n) / (factorialNumber(r) * factorialNumber(n - r));
};
export {factorialNumber, permutation, combination};