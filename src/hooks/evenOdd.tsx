const evenOdd = (inputNumber: number): string => {
    if(inputNumber % 2 === 0) return `Even Number`;
    else return `Odd Number`;
}
const isDivisible = (inputNumber: number, divisibleBy: number) => {
    if(inputNumber % divisibleBy === 0) return `${inputNumber} Divisible By ${divisibleBy}.`
    else return `${inputNumber} Is Not Divisible By ${divisibleBy}.`
}
const evenFromArray = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        const stack = [value];
        const flattened: number[] = [];
        while (stack.length) {
            const current = stack.shift();
            if (typeof current === "number") {
                flattened.push(current);
            } else if (Array.isArray(current)) {
                stack.push(...current);
            } else if (typeof current === "string") {
                flattened.push(
                    ...current.split(',').map(Number).filter(num => !isNaN(num))
                );
            }
        }
        return flattened;
    };
    const combinedInput = [
        ...flattenToNumbers(inputArray),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % 2 === 0);
    return result;
};
const oddFromArray = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        const stack = [value];
        const flattened: number[] = [];
        while (stack.length) {
            const current = stack.shift();
            if (typeof current === "number") {
                flattened.push(current);
            } else if (Array.isArray(current)) {
                stack.push(...current);
            } else if (typeof current === "string") {
                flattened.push(
                    ...current.split(',').map(Number).filter(num => !isNaN(num))
                );
            }
        }
        return flattened;
    };
    const combinedInput = [
        ...flattenToNumbers(inputArray),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % 2 !== 0);
    return result;
}
const divisibilityArray = (divisibleBy: number, inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        const stack = [value];
        const flattened: number[] = [];
        while (stack.length) {
            const current = stack.shift();
            if (typeof current === "number") {
                flattened.push(current);
            } else if (Array.isArray(current)) {
                stack.push(...current);
            } else if (typeof current === "string") {
                flattened.push(
                    ...current.split(',').map(Number).filter(num => !isNaN(num))
                );
            }
        }
        return flattened;
    };
    const combinedInput = [
        ...flattenToNumbers(inputArray),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % divisibleBy === 0);
    return result;
}
const nonDivisibilityArray = (divisibleBy: number, inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (value: number | number[] | string): number[] => {
        const stack = [value];
        const flattened: number[] = [];
        while (stack.length) {
            const current = stack.shift();
            if (typeof current === "number") {
                flattened.push(current);
            } else if (Array.isArray(current)) {
                stack.push(...current);
            } else if (typeof current === "string") {
                flattened.push(
                    ...current.split(',').map(Number).filter(num => !isNaN(num))
                );
            }
        }
        return flattened;
    };
    const combinedInput = [
        ...flattenToNumbers(inputArray),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => num % divisibleBy !== 0);
    return result;
}

const evenNumbersUpToN = (range: number): string => {
    let result: string = '';
    for(let i:number = 0; i <= range; i++) {
        if(i % 2 === 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const evenNumbersFromRange = (range1: number, range2: number): string => {
    let result: string = '';
    for(let i: number = range1; i <= range2; i++) {
        if(i % 2 === 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const oddNumbersUpToN = (range: number): string => {
    let result: string = '';
    for(let i: number = 0; i <= range; i++) {
        if(i % 2 !== 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const oddNumbersFromRange = (range1: number, range2: number): string => {
    let result: string = '';
    for(let i: number = range1; i <= range2; i++) {
        if(i % 2 !== 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const divisibleNumbersUpToN = (range: number, divisibleBy: number): string => {
    let result: string = '';
    for(let i:number = 0; i <= range; i++) {
        if(i % divisibleBy === 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const divisibleNumbersFromRange = (range1: number, range2: number, divisibleBy: number): string => {
    let result: string = '';
    for(let i:number = range1; i <= range2; i++) {
        if(i % divisibleBy === 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const nonDivisibleNumbersUpToN = (range: number, divisibleBy: number): string => {
    let result: string = '';
    for(let i:number = 0; i <= range; i++) {
        if(i % divisibleBy !== 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
const nonDivisibleNumbersFromRange = (range1: number, range2: number, divisibleBy: number): string => {
    let result: string = '';
    for(let i:number = range1; i <= range2; i++) {
        if(i % divisibleBy !== 0) {
            result += `${i} `;
        }
    }
    return result.trim();
}
export {
    evenOdd, isDivisible, 
    evenFromArray, oddFromArray, 
    divisibilityArray, nonDivisibilityArray,
    evenNumbersUpToN, evenNumbersFromRange,
    oddNumbersUpToN, oddNumbersFromRange,
    divisibleNumbersUpToN, divisibleNumbersFromRange,
    nonDivisibleNumbersUpToN, nonDivisibleNumbersFromRange,
};