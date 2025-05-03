const multiplicationTable = (input: number, range: number): void => {
    for(let i: number = 0; i <= range; i++) {
        console.log(
            `${input} * ${i} = ${input * i}`
        );
    }
}
export {multiplicationTable};