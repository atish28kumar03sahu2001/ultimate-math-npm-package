const calculateMean = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number | null => {
    const allValues: number[] = [];

    const processInput = (input: number | number[] | string) => {
        if (typeof input === "number") {
            allValues.push(input);
        } else if (Array.isArray(input)) {
            allValues.push(...input);
        } else if (typeof input === "string") {
            const parsed = input.split(",").map(Number).filter(v => !isNaN(v));
            allValues.push(...parsed);
        }
    };

    processInput(inputArray);
    args.forEach(processInput);

    if (allValues.length === 0) return null;

    const sum = allValues.reduce((acc, value) => acc + value, 0);
    return sum / allValues.length;
}
const calculateMedian = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number | null => {
    const allValues: number[] = [];

    const processInput = (input: number | number[] | string) => {
        if (typeof input === "number") {
            allValues.push(input);
        } else if (Array.isArray(input)) {
            allValues.push(...input);
        } else if (typeof input === "string") {
            const parsed = input.split(",").map(Number).filter(v => !isNaN(v));
            allValues.push(...parsed);
        }
    };

    processInput(inputArray);
    args.forEach(processInput);

    if (allValues.length === 0) return null;

    const sortedValues = allValues.sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);

    if (sortedValues.length % 2 === 0) {
        return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    } else {
        return sortedValues[mid];
    }
}
const calculateMode = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number[] | null  => {
    const allValues: number[] = [];

    const processInput = (input: number | number[] | string) => {
        if (typeof input === "number") {
            allValues.push(input);
        } else if (Array.isArray(input)) {
            allValues.push(...input);
        } else if (typeof input === "string") {
            const parsed = input.split(",").map(Number).filter(v => !isNaN(v));
            allValues.push(...parsed);
        }
    };

    processInput(inputArray);
    args.forEach(processInput);

    if (allValues.length === 0) return null;

    const frequency: { [key: number]: number } = {};
    allValues.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency)
        .filter(key => frequency[Number(key)] === maxFrequency)
        .map(Number);

    return modes.length === allValues.length ? null : modes;
}
const calculateAverage = (inputArray: number | number[] | string, ...args: (number | number[] | string)[]): number | null => {
    const allValues: number[] = [];
    const processInput = (input: number | number[] | string) => {
        if (typeof input === "number") {
            allValues.push(input);
        } else if (Array.isArray(input)) {
            allValues.push(...input);
        } else if (typeof input === "string") {
            const parsed = input.split(",").map(Number).filter(v => !isNaN(v));
            allValues.push(...parsed);
        }
    }
    processInput(inputArray);
    args.forEach(processInput);

    if(allValues.length === 0) return null;

    const sum = allValues.reduce((acc, value) => acc + value, 0);
    return sum / allValues.length;
}
export { calculateMean, calculateMedian, calculateMode, calculateAverage };