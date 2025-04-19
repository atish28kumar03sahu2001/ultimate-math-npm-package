# 📦 math-unlimited

**`math-unlimited`** is a powerful and comprehensive JavaScript/TypeScript utility library that provides a wide range of mathematical functions and tools for developers, researchers, students, and enthusiasts. Designed with performance and modularity in mind, it offers an intuitive API to handle everything from basic arithmetic to complex mathematical computations.

Whether you're building a scientific application, developing financial software, working on data analysis tools, or just need quick and reliable math functions, `math-unlimited` is your go-to solution.

## cmd Prompt For Installation

```javascript
npm  install  math-unlimited@latest
```

## 🔧 Key Features

-  **Lightweight & Modular**: Import only what you need — no unnecessary bloat.

-  **Typed with TypeScript**: Enjoy full IntelliSense support, type safety, and better developer experience.

-  **Comprehensive Function Set**: Covers basic arithmetic, algebra, geometry, trigonometry, statistics, calculus, number theory, and more.

-  **Optimized for Performance**: All functions are optimized for speed and reliability, suitable for production-level applications.

-  **Fully Tested**: High unit test coverage ensures accuracy and stability across all supported functionalities.

-  **Cross-Platform Compatibility**: Works seamlessly in both Node.js and browser environments.


## arithmetic (Operand1, Operand2, OperatorChoice)

This method is used for to perform the basic `arithmetic` operations like `Addition(+)`, `Subtraction(-)`, `Multiplication(*)`, `Division(/)`, `Modulo(%)`. In arithmetic method it will took three arguments `input1`, `input2`, and `OperatorChoice`.

**Operand1**: This is the first operand value.

**Operand2**: This is the second operand value.

**OperatorChoice**: User will choose one option from [+, -, *, /, %]
  
```code
Addition = Operand1 + Operand2
Subtraction = Operand1 - Operand2
Multiplication = Operand1 * Operand2
Division = Operand1 / Operand2
Modulo(Remainder) = Operand1 % Operand2
```

## Example Code

```javascript
import {arithmetic} from  "math-unlimited";
let  Operand1 = 100, Operand2 = 200;
console.log(arithmetic(Operand1, Operand2, "Addition")); // 300
console.log(arithmetic(Operand1, Operand2, "SUBTRACTION")); // -100
console.log(arithmetic(Operand1, Operand2, "multiplication")); // 20000
console.log(arithmetic(Operand1, Operand2, "DiViSiOn")); // 0.5
console.log(arithmetic(Operand1, Operand2, "mODULO")); // 100
```

In the above code you can observe after added the input1 and input2 i wrote the options in different types of string writing format patterns. but the code is working fine. The reason is in the package i convert the string into `lowercase` so you can give any type of string writing format.

## division (Dividend, Divisor, DivisionChoice)

This method is used for to perform the Division operation and it will display the `Divisor`, `Dividend`, `Quotient` and `Remainder`. In division method it will took three arguments `Dividend`, `Divisor`, `DivisionChoice`.

**Dividend**: This is the first operand value.

**Divisor**: This is the second operand value.

**DivisionChoice**: User will choose one option from [Divisor, Dividend, Quotient, Remainder]

![Division Example](https://res.cloudinary.com/duke5nl3i/image/upload/v1744910976/Division_aj1rzn.png)

## Example Code

```javascript
import {division} from  "math-unlimited";
let  Dividend = 150, Divisor = 7;
console.log(division(Dividend, Divisor, "Dividend")); // 150
console.log(division(Dividend, Divisor, "dIVISOR")); // 7
console.log(division(Dividend, Divisor, "Quotient")); // 21.428571428571427
console.log(division(Dividend, Divisor, "REMAINDER")); // 3
```

In the above code you can observe after added the input1 and input2 i wrote the options in different types of string writing format patterns. but the code is working fine. The reason is in the package i convert the string into `lowercase` so you can give any type of string writing format.

## evenOdd(inputNumber)

This method is used for to calculate either the number is `Even Number` or `Odd Number`. This is particularly used for to calculate and return only for Even and Odd Number. In this method it need only one argument `inputNumber` and it must be Integer type.

**inputNumber**: Using the value of this argument code will calculate for even and odd.

```javascript
if(inputNumber % 2 === 0) {
	return  "Even Number";
} else {
	return  "Odd Number";
}
```

## Example Code

```javascript
import {evenOdd} from  "math-unlimited";
console.log(evenOdd(20)); // Even Number
console.log(evenOdd(21)); // Odd Number
```

## isDivisible(inputNumber, divisibleBy)

This method is used for to calculate any number is divisible by any given number of not. This method need two arguments `inputNumber` and `divisibleBy` and in output it will return String output.

```javascript
if(inputNumber % divisibleBy === 0) {
	return `${inputNumber} Divisible By ${divisibleBy}.`
} else {
	return `${inputNumber} Is Not Divisible By ${divisibleBy}.`
}
```

## Example Code

```javascript
import {isDivisible} from  "math-unlimited";
console.log(isDivisible(20, 3)); // 20 Is Not Divisible By 3.
console.log(isDivisible(21, 3)); // 21 Divisible By 3.
```

## evenFromArray(inputArray, ...args)

The evenFromArray method is highly versatile, enabling the handling of various types and formats of data inputs while maintaining a clean and concise implementation. Its primary purpose is to extract even numbers, regardless of whether the input is given as individual numbers, arrays of numbers, or comma-separated strings representing numbers. This adaptability makes the function extremely useful in scenarios where data comes from diverse sources and may not have a consistent structure. This method contain two arguments: 

**inputArray**: The first argument, which can be, A single number (e.g., `5`). An array of numbers (e.g., `[2, 3, 4]`). A comma-separated string of numbers (e.g., `"1,2,3,4"`).

**...args**: A rest parameter, allowing additional arguments to be passed. Each additional argument can also be: A number. An array of numbers. A string of comma-separated numbers.

## Example Code

```javascript
import {evenFromArray} from "math-unlimited";
console.log(evenFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 2, 4, 6, 8, 10 ]
console.log(evenFromArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [ 2, 4, 6, 8, 10 ]
console.log(evenFromArray("1,2,3,4,5,6,7,8,9,10")); // [ 2, 4, 6, 8, 10 ]
```

## oddFromArray  = (inputArray, ...args)

The `oddFromArray` method is a utility designed to filter and return all **odd numbers** from a combination of inputs. Like its counterpart `evenFromArray`, it is structured to handle diverse input types, ensuring the method works seamlessly with numbers, arrays, or strings. Its design ensures robustness and ease of use when working with heterogeneous data. The primary purpose of the `oddFromArray` function is to: -   Normalize and combine different types of inputs into a single array of numbers. Filter and extract only the odd numbers from the resulting array. This method contain two arguments: 

**inputArray**: it Represents the first input to the function. It can be-   A single number (e.g., `7`). An array of numbers (e.g., `[1, 3, 5]`). A comma-separated string of numbers (e.g., `"1,3,5"`).

**…args**: -   A rest parameter allowing multiple additional arguments. Each argument can also be A number (e.g., `9`). An array of numbers (e.g., `[11, 13]`). A comma-separated string of numbers (e.g., `"15,17"`).

## Example Code

```javascript
import {oddFromArray} from "math-unlimited";
console.log(oddFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 1, 3, 5, 7, 9 ]
console.log(oddFromArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [ 1, 3, 5, 7, 9 ]
console.log(oddFromArray("1,2,3,4,5,6,7,8,9,10")); // [ 1, 3, 5, 7, 9 ]
```

## divisibilityArray(divisibleBy, inputArray, ...args)

The `divisibilityArray` method is a flexible and robust utility that processes various types of inputs to extract and return an array of numbers divisible by a specified value. It takes a required divisor (divisibleBy) and a series of inputs, which can be numbers, arrays of numbers, or comma-separated strings of numbers. The function flattens and normalizes these inputs into a single array of valid numbers, then filters out those not divisible by the given divisor, providing a clean, processed result. The `divisibilityArray` method has the following arguments

**divisibleBy**: A number used as the divisor to filter input numbers.
    
**inputArray**: This can be a single number, an array of numbers, or a string representation of numbers separated by commas.
    
**...args**: A rest parameter allowing additional arguments, each of which can be a number, an array of numbers, or a comma-separated string of numbers.

## Example Code

```javascript
import {divisibilityArray} from "math-unlimited";
console.log(divisibilityArray(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 3, 6, 9 ]
console.log(divisibilityArray(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [ 5, 10 ]
console.log(divisibilityArray(2, "1,2,3,4,5,6,7,8,9,10")); // [ 2, 4, 6, 8, 10 ]
```

## nonDivisibilityArray  = (divisibleBy, inputArray, ...args)


The `nonDivisibilityArray` function processes various types of inputs to extract and return an array of numbers **not divisible** by a specified value. It takes a required divisor (`divisibleBy`) and a series of inputs, which can be numbers, arrays of numbers, or comma-separated strings of numbers. The function flattens and normalizes these inputs into a single array of valid numbers, then filters out those that are divisible by the given divisor, ensuring only numbers **not divisible** by `divisibleBy` are included in the result. The `nonDivisibilityArray` method has the following arguments

 **divisibleBy (number)**:   The divisor used to filter out numbers divisible by this value.
    
**inputArray (number | number[] | string)**:   The initial input, which can be a single number, an array of numbers, or a comma-separated string of numbers.
    
**...arg` (number | number[] | string)**:   Additional inputs, each of which can also be a number, an array of numbers, or a comma-separated string of numbers.

## Example Code

```JavaScript
import {nonDivisibilityArray} from "math-unlimited";
console.log(nonDivisibilityArray(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 1, 2, 4, 5, 7, 8, 10 ]
console.log(nonDivisibilityArray(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [ 1, 2, 3, 4, 6, 7, 8, 9 ]
console.log(nonDivisibilityArray(2, "1,2,3,4,5,6,7,8,9,10")); // [ 1, 3, 5, 7, 9 ]
```
## evenNumbersUpToN(range)

The `evenNumbersUpToN` method is a utility function designed to generate a string containing all even numbers from `0` up to a specified range. It does so by iterating through numbers within the given range and concatenating those that are even.

You need to generate a list of even numbers in a string format for display or further processing. It’s required to dynamically compute even numbers up to a variable range. The resulting string format provides a compact representation of even numbers for use in logs, messages, or integrations. The `evenNumbersUpToN` method has the following arguments.

**range: number** The method expects a single argument, a number. This argument specifies the upper limit of the range up to which even numbers should be identified and included in the resulting string.

## Example Code

```javascript
import {evenNumbersUpToN} from "math-unlimited";
console.log(evenNumbersUpToN(10)); // 0 2 4 6 8 10
console.log(evenNumbersUpToN(20)); // 0 2 4 6 8 10 12 14 16 18 20
```
## evenNumbersFromRange(range1, range2)

The `evenNumbersFromRange` method is a utility function designed to generate a string containing all even numbers between two specified numeric ranges (inclusive). It iterates through the given range and appends even numbers to the result string.

A dynamic range of even numbers needs to be generated based on custom start (range1) and end (range2) values. The output is required in a clean, space-separated string format for display, logging, or further processing. It provides a simple and reusable solution to extract even numbers from any numeric range. The `evenNumbersFromRange` method has the following arguments.

**range1: number**: A number representing the starting point of the range. Specifies the lower limit from which the search for even numbers begins.

**range2: number**: A number representing the ending point of the range. Specifies the upper limit up to which even numbers are included.

## Example Code

```javascript
import {evenNumbersFromRange} from "math-unlimited";
console.log(evenNumbersFromRange(10, 40)); // 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40
console.log(evenNumbersFromRange(50, 80)); // 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80
```
## oddNumbersUpToN(range)

The `oddNumbersUpToN` method is a utility function designed to generate a string containing all odd numbers from `0` up to a specified range. It iterates through numbers within the given range and appends those that are odd to a result string.

A dynamic list of odd numbers is required, up to a specific range, in a clean string format. The output can be used for display, logging, or further processing. It provides a straightforward solution for extracting odd numbers from 0 to any upper limit. The `oddNumbersUpToN` method has the following arguments. 

**range: number** The method expects a single argument, a number. This argument specifies the upper limit of the range up to which even numbers should be identified and included in the resulting string.

## Example Code

```javascript
import {oddNumbersUpToN} from "math-unlimited";
console.log(oddNumbersUpToN(10));// 1 3 5 7 9
console.log(oddNumbersUpToN(30)); // 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29
```

## oddNumbersFromRange(range1, range2)

The `oddNumbersFromRange` method is a utility function designed to generate a string containing all odd numbers between two specified numeric ranges (inclusive). It iterates through the range and appends odd numbers to the result string.

A dynamic range of odd numbers needs to be generated between custom start (range1) and end (range2) values. The output is required in a clean, space-separated string format for display, logging, or further processing. It provides a convenient way to extract odd numbers within a specified range, making it reusable and efficient. The `oddNumbersFromRange` method has the following arguments.

**range1: number**: A number representing the starting point of the range. Specifies the lower limit from which the search for even numbers begins.

**range2: number**: A number representing the ending point of the range. Specifies the upper limit up to which even numbers are included.

## Example Code

```javascript
import {oddNumbersFromRange} from "math-unlimited";
console.log(oddNumbersFromRange(10, 20));// 11 13 15 17 19
console.log(oddNumbersFromRange(30, 40)); // 31 33 35 37 39
```

## divisibleNumbersUpToN(range, divisibleBy)

The `divisibleNumbersUpToN` method is a utility function designed to generate a string containing all numbers from `0` to a specified range that are divisible by a given number. It iterates through the range and appends numbers that meet the divisibility condition to the result string.

The `divisibleNumbersUpToN` method is useful in scenarios where: You need to generate a list of numbers within a specific range that are divisible by a given number. The output is required in a clean, space-separated string format for display, logging, or further processing. It provides a dynamic and efficient way to identify and represent numbers that meet specific divisibility criteria. The `divisibleNumbersUpToN` method has the following arguments.

**range: number**: A number representing the upper limit of the range. Specifies the maximum value up to which the method checks for divisibility.

**divisibleBy: number**: A number used as the divisor for the divisibility check. Specifies the number by which all numbers within the range are tested for divisibility.

## Example Code

```javascript
import {divisibleNumbersUpToN} from "math-unlimited";
console.log(divisibleNumbersUpToN(20, 5));// 0 5 10 15 20
console.log(divisibleNumbersUpToN(50, 7)); // 0 7 14 21 28 35 42 49
```

## divisibleNumbersFromRange (range1, range2, divisibleBy)

This `divisibleNumbersFromRange` method generates a string of numbers within a specified range that are divisible by a given number. It is useful for tasks where you need to filter numbers based on divisibility criteria and return them as a space-separated string.

This method is typically used in scenarios where You need to find and display all numbers in a range that are divisible by a specific value. The result should be formatted as a space-separated string for easier presentation or further processing. This `divisibleNumbersFromRange` method has the following arguments.

**range1: number**: Represents the starting number of the range (inclusive). It defines where the iteration begins.

**range2:number**: Represents the ending number of the range (inclusive). It defines where the iteration stops.

**divisibleBy: number**: Represents the divisor. This is the number used to check divisibility for each number in the specified range.

## Example Code

```javascript
import {divisibleNumbersFromRange} from "math-unlimited";
console.log(divisibleNumbersFromRange(20, 50, 5));// 20 25 30 35 40 45 50
console.log(divisibleNumbersFromRange(50, 80, 7)); // 56 63 70 77
```

## nonDivisibleNumbersUpToN(range, divisibleBy)


This `nonDivisibleNumbersUpToN` method generates a string of numbers up to a given range that are **not divisible** by a specified number. It is helpful in scenarios where you want to filter out numbers based on divisibility and return the rest in a space-separated string format.

Identify numbers in a range that are not divisible by a specific value. Format these numbers as a space-separated string for easy representation or further processing. Filtering out numbers divisible by a given value. Formatting numerical results for display or further use in processing workflows. Solving problems in modular arithmetic or data filtering tasks. The `nonDivisibleNumbersUpToN` method has the following arguments.

**range: number**: Represents the upper limit of the range (inclusive). The method checks all numbers from 0 to this value.

**divisibleBy: number**: Represents the divisor. This number is used to check the divisibility condition for each number in the range.

## Example Code

```javascript
import {nonDivisibleNumbersUpToN} from "math-unlimited";
console.log(nonDivisibleNumbersUpToN(10, 5));// 1 2 3 4 6 7 8 9
console.log(nonDivisibleNumbersUpToN(10, 7)); // 1 2 3 4 6 7 8 9
```

## nonDivisibleNumbersFromRange(range1, range2, divisibleBy)

This `nonDivisibleNumbersFromRange` method generates a string of numbers within a specified range that are not divisible by a given number. It is helpful when filtering numbers based on divisibility criteria and presenting the results in a space-separated string format. Identify numbers in a specific range that are not divisible by a given value. Format these numbers as a space-separated string for easy presentation or further processing.

Filtering numbers in a given range based on divisibility conditions. Preparing numerical data for output in a human-readable format. Applications involving modular arithmetic, pattern identification, or custom numerical filtering tasks. The `nonDivisibleNumbersFromRange` method has the following arguments.

**range1: number** Represents the starting number of the range (inclusive). It specifies where the iteration begins.

**range2: number** Represents the ending number of the range (inclusive). It defines where the iteration stops.

**divisibleBy: number** Represents the divisor. This is the number used to check the divisibility condition for each number in the range.

## Example Code

```javascript
import {nonDivisibleNumbersFromRange} from "math-unlimited";
console.log(nonDivisibleNumbersFromRange(10, 20, 5));// 11 12 13 14 16 17 18 19
console.log(nonDivisibleNumbersFromRange(10, 20, 7)); // 10 11 12 13 15 16 17 18 19 20
```

## factorialNumber(n)

The given function `factorialNumber` is a TypeScript implementation of a recursive algorithm to calculate the factorial of a non-negative integer. It uses memoization to optimize performance by caching previously computed results. Memoization is achieved using the `factorialCache` object, which maps input numbers to their corresponding factorial values.

The factorial of a number `n`, denoted as `n!`, is the product of all positive integers from `1` to `n`. For example, 
```javascript
5! = 5 x 4 x 3 x 2 x 1 = 120
Special cases include 0!=1, which is a standard mathematical definition.
```
The `factorialNumber(n)` has only one argument which is `n: number` so user will send a integer parameter to the function.

## Example Code

```javascript
import {factorialNumber} from "math-unlimited";
console.log(factorialNumber(5));  // 120
console.log(factorialNumber(6)); // 720
console.log(factorialNumber(10)); // 3628800
```

##  permutation(n, r)

The given function `permutation` calculates the number of permutations of `r` objects selected from a set of `n` distinct objects. A permutation is an arrangement of objects in a specific order, and the formula for calculating permutations is: **P(n, r) = n! / (n - r)!**. Here, `n!` is the factorial of nnn, and `(n−r)!` is the factorial of `n−r`. The function uses the previously defined `factorialNumber` function to compute these factorial values. The permutation(n, r) has two arguments **n: number** and **r: number** which need integer parameters to perform the Permutation operation.

```javascript
import {permutation} from "math-unlimited";
console.log(permutation(5, 3)); // Output: 60
console.log(permutation(6, 2)); // Output: 30
console.log(permutation(4, 4)); // Output: 24
console.log(permutation(9, 6)); // Output: 60480
```

##  combination(n, r)

The `combination` function calculates the number of combinations of `r `objects selected from a set of `n` distinct objects. In combinations, the order of selection does not matter. The mathematical formula for combinations is: **C(n, r) = n! / r! x (n - r)!** `n!` is the factorial of `n`, `r!` is the factorial of `r`, and  `(n−r)!` is the factorial of `n−r`.  This function leverages the `factorialNumber` function to compute the factorial values and calculates the result using the above formula.

```JavaScript
import {combination} from "math-unlimited";
console.log(combination(9, 6)); // Output: 84
console.log(combination(5, 3)); // Output: 10
console.log(combination(6, 2)); // Output: 15
console.log(combination(4, 4)); // Output: 1
```


## Conclusion

In conclusion, **math-unlimited** stands out as an essential utility library for JavaScript/TypeScript developers, offering a versatile and efficient suite of mathematical tools. Its intuitive API, performance-driven design, and modular structure make it an invaluable resource for a diverse range of applications, from simple computations to advanced scientific or financial projects. Whether you're a developer, researcher, or enthusiast, **math-unlimited** empowers you to handle mathematical challenges with ease and precision.


