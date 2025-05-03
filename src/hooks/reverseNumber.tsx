const reverseNumber = (input: number): number => {
    let rev: number = 0;
    while(input !== 0) {
        let rem: number = input % 10;
        rev = (rev * 10) + rem;
        input = Math.floor(input / 10);
    }
    return rev;
}
const reverseNumberToN = (range: number): number [] => {
    const result: number[] = [];
    for(let i: number = 0; i <= range; i++) {
        result.push(reverseNumber(i));
    }
    return result;
}
const reverseNumberToRange = (range1: number, range2: number): number[] => {
    const result: number[] = [];
    for(let i: number = range1; i <= range2; i++) {
        result.push(reverseNumber(i));
    }
    return result;
}
const reverseNumberToArray = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
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
        const result: number[] = combinedInput.map(reverseNumber);
        return result;
}
export {reverseNumber, reverseNumberToN, reverseNumberToRange, reverseNumberToArray};
