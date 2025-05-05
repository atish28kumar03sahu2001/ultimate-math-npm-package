const fibonacciSeries =  (range: number): void => {
    let n1: number = 0;
    let n2: number = 1;
    for(let i: number = 0; i < range; i++) {
        console.log(n1);
        let temp:number = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
}
const nthFibonacciNumber = (range: number): number => {
    let n1: number = 0;
    let n2: number = 1;
    let res: number = 0;
    for(let i: number = 0; i < range; i++) {
        res = n1;
        let temp: number = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return res;
}
export {fibonacciSeries, nthFibonacciNumber};