const digitOfNumber = (input: number): void => {
    while(input !== 0) {
        let rem: number = input % 10;
        console.log(rem);
        input = Math.floor(input / 10);
    }
    console.log();
}
const sumofDigits = (input: number): number => {
    let count: number = 0;
    while(input !== 0) {
        let rem: number = input % 10;
        count += rem;
        input = Math.floor(input / 10);
    }
    return count;
}
export {digitOfNumber, sumofDigits};