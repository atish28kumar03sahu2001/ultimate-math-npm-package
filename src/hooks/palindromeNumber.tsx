const palindromNumber = (num: number): string => {
    let NUM: number = num, count: number = 0;
    while(num !== 0) {
        let rem: number = num % 10;
        count = (count * 10) + rem;
        num = Math.floor(num / 10);
    }
    if (NUM === count) {
        return `${NUM} is a palindrome number`;
    } else {
        return `${NUM} is not a palindrome number`;
    }
}
const palindromeNumberToN = (range: number): number[] => {
    let palindromes: number[] = [];
    for (let i = 0; i <= range; i++) {
        if (palindromNumber(i) === `${i} is a palindrome number`) {
            palindromes.push(i);
        }
    }
    return palindromes;
}
const palindromeNumberToRange = (range1: number, range2: number): number[] => {
    let palindromes: number[] = [];
    for (let i = range1; i <= range2; i++) {
        if (palindromNumber(i) === `${i} is a palindrome number`) {
            palindromes.push(i);
        }
    }
    return palindromes;
}
const palindromeNumberFromArray = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
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
    const result: number[] = combinedInput.filter(num => palindromNumber(num) === `${num} is a palindrome number`);
    return result;
}
export {palindromNumber, palindromeNumberToN, palindromeNumberToRange, palindromeNumberFromArray};