const armstrongNumber = (input: number): number | string => {
    let INPUT: number = input, res:number = input, rem: number = 0, count: number = 0, sum: number = 0;
    while(input !== 0) {
        rem = input % 10;
        count++;
        input = Math.floor(input / 10);
    }
    while(INPUT !== 0) {
        let rem1: number = INPUT % 10;
        sum += Math.pow(rem1, count);
        INPUT = Math.floor(INPUT / 10);
    }
    if(sum === res) return input;
    else return `${input} Is Not An Armstrong Number!`;
}
const armstrongNumberToN = (range: number): number[] => {
    let armstrongs: number[] = [];
    for (let i = 0; i <= range; i++) {
        if (armstrongNumber(i) === i) {
            armstrongs.push(i);
        }
    }
    return armstrongs;
}
const armstrongNumberToRange = (range1: number, range2: number): number[] => {
    let armstrongs: number[] = [];
    for (let i = range1; i <= range2; i++) {
        if (armstrongNumber(i) === i) {
            armstrongs.push(i);
        }
    }
    return armstrongs;
}
const armstrongNumberFromArray = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] => {
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
    const result: number[] = combinedInput.filter(num => armstrongNumber(num) === num);
    return result;
}
export {armstrongNumber, armstrongNumberToN, armstrongNumberToRange, armstrongNumberFromArray};
