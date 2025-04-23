const primeNumber = (num: number): string => {
    if (num <= 1) return `${num} is not a prime number.`;
    if (num === 2) return `${num} is a prime number.`;
    if (num % 2 === 0) return `${num} is not a prime number.`;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return `${num} is not a prime number.`;
    }
    
    return `${num} is a prime number.`;
}
const primeNumberToN = (range: number): number[] => {
    const primes: number[] = [];
    for (let i = 2; i <= range; i++) {
        if (primeNumber(i) === `${i} is a prime number.`) {
            primes.push(i);
        }
    }
    return primes;
}
const primNumberToRange = (range1: number, range2: number): number[] => {
    const primes: number[] = [];
    for (let i = range1; i <= range2; i++) {
        if (primeNumber(i) === `${i} is a prime number.`) {
            primes.push(i);
        }
    }
    return primes;
}
const primeNumbersFromArray = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
    const flattenToNumbers = (input: number | number[] | string): number[] => {
        if (typeof input === 'number') return [input];
        if (typeof input === 'string') return input.split(',').map(Number);
        if (Array.isArray(input)) return input.flatMap(flattenToNumbers);
        return [];
    };
    const combinedInput = [
        ...flattenToNumbers(inputArray),
        ...args.flatMap(flattenToNumbers),
    ];
    const result: number[] = combinedInput.filter(num => primeNumber(num) === `${num} is a prime number.`);
    return result;
}
export {primeNumber, primeNumberToN, primNumberToRange, primeNumbersFromArray};