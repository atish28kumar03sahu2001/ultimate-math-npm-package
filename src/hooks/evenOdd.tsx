const evenOdd = (input: number): string => {
    if(input % 2 === 0) return `Even Number`;
    else return `Odd Number`;
}
const isDivisible = (input: number, divisibleBy: number) => {
    if(input % divisibleBy === 0) return `${input} Divisible By ${divisibleBy}.`
    else return `${input} Is Not Divisible By ${divisibleBy}.`
}
const evenFromArray = (input: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        if (typeof value === "number") {
            return [value];
        } else if (Array.isArray(value)) {
            return value.flatMap(flattenToNumbers);
        } else if (typeof value === "string") {
            return value.split(',').map(Number);
        }
        return [];
    };
    const combinedInput = [
        ...flattenToNumbers(input),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % 2 === 0);
    return result;
};
const oddFromArray = (input: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        if (typeof value === "number") {
            return [value];
        } else if (Array.isArray(value)) {
            return value.flatMap(flattenToNumbers);
        } else if (typeof value === "string") {
            return value.split(',').map(Number);
        }
        return [];
    };
    const combinedInput = [
        ...flattenToNumbers(input),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % 2 !== 0);
    return result;
}
const divisibilityArray = (divisibleBy: number, input: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        if (typeof value === "number") {
            return [value];
        } else if (Array.isArray(value)) {
            return value.flatMap(flattenToNumbers);
        } else if (typeof value === "string") {
            return value.split(',').map(Number);
        }
        return [];
    };
    const combinedInput = [
        ...flattenToNumbers(input),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % divisibleBy === 0);
    return result;
}
const nonDivisibilityArray = (divisibleBy: number, input: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        if (typeof value === "number") {
            return [value];
        } else if (Array.isArray(value)) {
            return value.flatMap(flattenToNumbers);
        } else if (typeof value === "string") {
            return value.split(',').map(Number);
        }
        return [];
    };
    const combinedInput = [
        ...flattenToNumbers(input),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % divisibleBy !== 0);
    return result;
}

export {evenOdd, isDivisible, evenFromArray, oddFromArray, divisibilityArray, nonDivisibilityArray};