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
## palindromNumber(input)
This function takes a single argument, `num`, which is a number. It checks if the given number is a palindrome. The function initializes two variables: NUM, which stores the original number, and count, set to 0.

It uses a while loop to reverse the digits of the input number by taking the remainder (rem) when divided by 10 and then updating the reversed number (count) accordingly.

After reversing, it compares the original number (NUM) with the reversed number (count). If they are equal, the number is a palindrome, and the function returns a string stating that the number is a palindrome; otherwise, it states that the number is not a palindrome.

## Example Code

```javascript
import {palindromNumber} from  "math-unlimited";
console.log(palindromNumber(12321)); // 12321 is a palindrome number
console.log(palindromNumber(12345)); // 12345 is not a palindrome number
```
## palindromeNumberToN(range)
This function takes one argument, range, which is a number specifying the range up to which palindrome numbers need to be found. It generates a list of all palindrome numbers from 0 to the specified range.

The function initializes an empty array, palindromes. It uses a for loop to iterate through numbers from 0 to range. For each number, it calls the palindromNumber function to check if the number is a palindrome. If the number is a palindrome, it is added to the palindromes array. Finally, it returns the array of all palindrome numbers within the range.

## Example Code

```javascript
import {palindromeNumberToN} from  "math-unlimited";
console.log(palindromeNumberToN(30)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22 ]
console.log(palindromeNumberToN(50)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44 ]
```

## palindromeNumberToRange(range1, range2)

This function takes two arguments, range1 and range2, which define the start and end of a range. It generates a list of all palindrome numbers within the specified range (inclusive).

The function initializes an empty array, palindromes. It uses a for loop to iterate through numbers from range1 to range2. For each number, it calls the palindromNumber function to check if the number is a palindrome. If the number is a palindrome, it is added to the palindromes array. Finally, it returns the array of all palindrome numbers in the specified range.

## Example Code

```JavaScript
import {palindromeNumberToRange} from  "math-unlimited";
console.log(palindromeNumberToRange(30, 50)); // [ 33, 44 ]
console.log(palindromeNumberToRange(70, 90)); // [ 77, 88 ]
```
## palindromeNumberFromArray(input[] || ...args)

### Arguments

`inputArray`: Can be a number, an array of numbers, or a comma-separated string of numbers.

`...args`: Additional arguments of similar types (`number`, `number[]`, or `string`), allowing for combining multiple inputs.

### Working

It identifies all palindrome numbers from the provided input(s), which can include a combination of numbers, arrays, or strings.

The function defines a helper function, `flattenToNumbers`, which Converts a single number into an array containing that number. Splits a comma-separated string into an array of numbers. Flattens nested arrays into a single-level array of numbers.

It uses this helper function to normalize all inputs (inputArray and ...args) into a flat array of numbers. It filters this array, keeping only the numbers that are palindromes (as determined by the palindromNumber function). Finally, it returns an array of palindrome numbers extracted from the inputs.

## Example Code

```javascript
import {palindromeNumberFromArray} from  "math-unlimited";
console.log(palindromeNumberFromArray(11, 20, 33, 40, 55, 60, 77, 80, 99)); // [ 11, 33, 55, 77, 99 ]
console.log(palindromeNumberFromArray([11, 20, 33, 40, 55, 60, 77, 80, 99])); // [ 11, 33, 55, 77, 99 ]
console.log(palindromeNumberFromArray("11, 20, 33, 40, 55, 60, 77, 80, 99")); // [ 11, 33, 55, 77, 99 ]
```

## primeNumber(input)

This function determines whether a given number is a prime number. It accepts a number (`num`) as input and returns a string indicating whether the number is prime or not. The function first checks for edge cases: numbers less than or equal to 1 are not prime, and 2 is the smallest prime number. 

For numbers greater than 2, it eliminates even numbers, as they cannot be prime. It then iteratively checks divisors from 3 up to the square root of the number, skipping even numbers. If any divisor evenly divides the number, it returns a message stating the number is not prime. If no divisors are found, it confirms the number is prime.

## Example Code

```javascript
import {primeNumber} from  "math-unlimited";
console.log(primeNumber(29)); // 29 is a prime number.
console.log(primeNumber(30)); // 30 is not a prime number.
```

## primeNumberToN(range)

This function generates all prime numbers from 2 up to a given range (range). It iterates through numbers starting from 2 to the provided range. For each number, it uses the primeNumber function to check if it is prime. If confirmed as prime, the number is added to the result array, primes. The function returns the array of all prime numbers within the specified range.

## Example Code

```javascript
import {primeNumberToN} from  "math-unlimited";
console.log(primeNumberToN(50)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
console.log(primeNumberToN(100)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
```
## primNumberToRange(range1, range2)

This function identifies all prime numbers within a specified range defined by two numbers: range1 (start of the range) and range2 (end of the range). It iterates through all numbers between range1 and range2 inclusive. Using the primeNumber function, it checks each number for primality and adds prime numbers to the result array, primes. The function then returns the array of prime numbers within the provided range.

## Example Code

```javascript
import {primNumberToRange} from  "math-unlimited";
console.log(primNumberToRange(30, 50)); // [ 31, 37, 41, 43, 47 ]
console.log(primNumberToRange(60, 80)); // [ 61, 67, 71, 73, 79 ]
```

## primeNumbersFromArray(input[] || ...args)

This function takes an array, number, or string of numbers and additional optional arguments (which can also be numbers, arrays, or strings) and identifies all prime numbers within this combined input. 
It uses a helper function, `flattenToNumbers`, to normalize and extract numbers from different input types.  This helper flattens arrays, parses strings (comma-separated numbers), and handles individual numbers, converting all inputs into a unified array of numbers. 
It then filters this array to retain only prime numbers, verified using the `primeNumber` function. Finally, the function returns an array containing all the prime numbers extracted and verified from the input.

## Example Code

```javascript
import {primeNumbersFromArray} from  "math-unlimited";
console.log(primeNumbersFromArray("11,12,13,14,15,16,17,18,19,20")); // [ 11, 13, 17, 19 ]
console.log(primeNumbersFromArray(11,12,13,14,15,16,17,18,19,20)); // [ 11, 13, 17, 19 ]
console.log(primeNumbersFromArray([11,12,13,14,15,16,17,18,19,20])); // [ 11, 13, 17, 19 ]
```

## reverseNumber(input)
This function takes a single number as input and returns its digits reversed. It initializes a variable `rev` to store the reversed number and iteratively constructs it by extracting the last digit of the input (using modulo 10) and adding it to `rev` after shifting its digits left (multiplying by 10). The input number is reduced in each iteration by dividing it by 10 and truncating the decimal part using `Math.floor`. This process continues until the input becomes 0, ensuring that all digits are processed.

## Example Code
```javascript
import {reverseNumber} from "math-unlimited";
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(784)); // 487
console.log(reverseNumber(981)); // 189
```
## reverseNumberToN(range)

This function generates an array of reversed numbers for all integers from 0 up to a given range. It initializes an empty array `result` and uses a loop to iterate through each number from 0 to the specified range. For each number, it calls the `reverseNumber` function to reverse its digits and pushes the result into the `result` array. The function finally returns the array of reversed numbers, providing an easy way to see the reversed counterparts of numbers within a specific range starting from 0.

## Example Code
```javascript
import  {reverseNumberToN}  from  "math-unlimited";
console.log(reverseNumberToN(10)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1 ]
console.log(reverseNumberToN(20)); // [ 0,  1,  2,  3,  4,  5,  6, 7,  8,  9,  1, 11, 21, 31, 41, 51, 61, 71, 81, 91,  2 ]
console.log(reverseNumberToN(30)); // [ 0,  1,  2,  3,  4,  5,  6,  7,  8, 9,  1, 11, 21, 31, 41, 51, 61, 71,  81, 91,  2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 3 ]
```

## reverseNumberToRange(range1, range2)

This function reverses the digits of numbers within a specified range, defined by two integers `range1` and `range2`. It initializes an empty array `result` and iterates from the lower bound `range1` to the upper bound `range2`, calling the `reverseNumber` function for each number in this range. Each reversed number is added to the `result` array, which is returned as the output. This function is a flexible extension of `reverseNumberToN`, as it allows any starting and ending point for the range.

## Example Code
```javascript
import  {reverseNumberToRange}  from  "math-unlimited";
console.log(reverseNumberToRange(10, 20)); // [ 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 2 ]
console.log(reverseNumberToRange(30, 40)); // [ 3, 13, 23, 33, 43, 53, 63, 73, 83, 93, 4 ]
console.log(reverseNumberToRange(40, 50)); // [ 4, 14, 24, 34, 44, 54, 64, 74, 84, 94, 5 ]
```

## reverseNumberToArray(input[] || ...args)

This function processes dynamic inputs (a mix of numbers, arrays of numbers, or comma-separated strings representing numbers) to return an array of reversed numbers. It uses a helper function, `flattenToNumbers`, to standardize all input types into a flat array of numbers. The main function then combines all inputs, maps each number through the `reverseNumber` function, and returns the resulting array. This design ensures that the function can handle diverse input types and combinations, making it versatile and powerful for reversing numbers from multiple sources.

## Example Code

```javascript
import  {reverseNumberToArray}  from  "math-unlimited";
console.log(reverseNumberToArray(15, 26, 37, 48)); // [ 51, 62, 73, 84 ]
console.log(reverseNumberToArray([18 , 27 , 36, 45])); // [ 81, 72, 63, 54 ]
console.log(reverseNumberToArray("51", "43", "67", "91")); // [ 15, 34, 76, 19 ]
```

## multiplicationTable(input, range)
The `multiplicationTable` function generates and logs the multiplication table for a given number up to a specified range. It takes two arguments: `input`, the base number for which the table is to be generated, and `range`, which defines the maximum multiplier. The function uses a `for` loop to iterate through all integers from 0 to `range`. For each iteration, it computes the product of `input` and the current multiplier (`i`) and logs the result to the console in the format `{input} * {i} = {product}`. The function is designed to be straightforward, directly outputting the multiplication table to the console, making it useful for displaying results without needing to return any values. The use of template literals ensures clear and formatted output.

## Example Code
```javascript
import  {multiplicationTable}  from  "math-unlimited";
multiplicationTable(44, 5);
OUTPUT
44 * 0 = 0
44 * 1 = 44
44 * 2 = 88
44 * 3 = 132
44 * 4 = 176
44 * 5 = 220
```

## digitOfNumber(input)

The `digitOfNumber` function takes a single number as input and logs each digit of the number in reverse order (starting from the least significant digit) to the console. It uses a `while` loop that continues running as long as the input is not zero. Within each iteration, it calculates the remainder (`rem`) of the input divided by 10, which gives the last digit of the number. This digit is then logged to the console. Afterward, the input is reduced by dividing it by 10 and truncating the decimal part using `Math.floor`, effectively removing the last digit. The process repeats until the input becomes zero, ensuring all digits are processed and displayed. This function is useful for breaking down a number into its constituent digits and printing them sequentially.

## Example Code

```javascript
import  {digitOfNumber}  from  "math-unlimited";
digitOfNumber(1245); // 5 4 2 1
digitOfNumber(84316); // 6 1 3 4 8
digitOfNumber(32489); // 9 8 4 2 3
```

## armstrongNumber(input)

The `armstrongNumber` function determines whether a given number is an Armstrong number or not. An Armstrong number (or narcissistic number) is a number equal to the sum of its own digits raised to the power of the number of digits. This function takes an integer input and performs two main operations: first, it calculates the number of digits in the input by iteratively extracting each digit using the modulus operator and dividing the number by 10. Next, it calculates the sum of each digit raised to the power of the digit count, again by extracting digits and summing their powers. If the sum matches the original input number, the function returns the input number; otherwise, it returns a string message indicating that the input is not an Armstrong number.

## Example Code

```javascript
import {armstrongNumber} from "math-unlimited";
console.log(armstrongNumber(153)); // 153
console.log(armstrongNumber(253)); // 253 Is Not An Armstrong Number!
```

## armstrongNumberToN(range)

The `armstrongNumberToN` function generates a list of all Armstrong numbers within a range starting from 0 up to a given number. It takes a single integer `range` as input and iterates from 0 to the range. For each number in the loop, it calls the `armstrongNumber` function to check if the current number is an Armstrong number. If the result matches the number itself, it is added to an array of Armstrong numbers. Once all numbers in the range are processed, the function returns the array of Armstrong numbers, effectively providing a way to explore all Armstrong numbers up to a specific limit.

## Example Code

```javascript
import {armstrongNumberToN} from "math-unlimited";
console.log(armstrongNumberToN(500)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407 ]
```

## armstrongNumberToRange(range1, range2)

The `armstrongNumberToRange` function is similar to `armstrongNumberToN`, but it allows for a custom range of numbers to be specified. It takes two arguments, `range1` and `range2`, which define the lower and upper bounds of the range. The function iterates from `range1` to `range2`, inclusive, and uses the `armstrongNumber` function to determine if each number in the range is an Armstrong number. If a number is an Armstrong number, it is added to an array. After completing the iteration, the function returns the array of Armstrong numbers found within the specified range.

## Example Code

```javascript
import {armstrongNumberToRange} from "math-unlimited";
console.log(armstrongNumberToRange(100, 1000)); // [ 153, 370, 371, 407 ]
console.log(armstrongNumberToRange(100, 10000)); // [ 153,  370,  371, 407, 1634, 8208, 9474 ]
```

## armstrongNumberFromArray(input[] || ...args)

The `armstrongNumberFromArray` function determines Armstrong numbers from a diverse set of inputs, which can include individual numbers, arrays of numbers, or strings representing numbers. It takes a primary input and additional arguments, processes them using the helper function `flattenToNumbers`, and combines all inputs into a single array of numbers. The helper function converts numbers or strings into arrays of numbers and recursively flattens nested arrays. After combining all inputs, the function filters the array to include only those numbers that satisfy the Armstrong number condition, as determined by the `armstrongNumber` function. The resulting array of Armstrong numbers is returned, making this function versatile for different input formats.

## Example Code
```javascript
import {armstrongNumberFromArray} from "math-unlimited";
console.log(armstrongNumberFromArray([ 153, 372, 381, 407 ])); // [ 153, 407 ]
console.log(armstrongNumberFromArray(11, 1, 12, 2, 13, 3, 14, 4, 15, 5)); // [ 1, 2, 3, 4, 5 ]
```

## sumofDigits(input)

The `sumofDigits` function calculates the sum of all the digits in a given number. It takes a single integer input and initializes a variable `count` to zero, which will store the cumulative sum of the digits. The function uses a `while` loop to repeatedly extract the last digit of the input number using the modulus operator (`% 10`). This extracted digit is added to `count`, and the input number is then reduced by removing its last digit using integer division (`Math.floor(input / 10)`). This process continues until the input becomes zero, at which point all digits have been processed. Finally, the function returns the total sum of the digits stored in `count`. This utility function is particularly useful in scenarios requiring digit manipulation, such as in numerical puzzles or digital root calculations.

```javascript
import {sumofDigits} from "math-unlimited";
console.log(sumofDigits(1234567890)); // 45
console.log(sumofDigits(114245)); // 17
console.log(sumofDigits(78159)); // 30
```

## calculateMean(input[] || ...args)

This function calculates the arithmetic mean (average) of a set of numbers. It accepts various input formats, including a single number, an array of numbers, or a comma-separated string of numbers, and processes all inputs into a single array of numeric values. If the inputs include strings, they are split by commas, and any non-numeric entries are filtered out. After aggregating all valid numbers, the function computes the mean by summing up all the values and dividing by the total count. If no valid numbers are provided, the function returns `null`.

```javascript
import {calculateMean} from "math-unlimited";
console.log(calculateMean([1,11,21,31,41,51,61,71,81,91,101])); // 51
console.log(calculateMean([2,12,22,32,42,52,62,72,82,92,102])); // 52
console.log(calculateMean([3,13,23,33,43,53,63,73,83,93,103])); // 53
```

## calculateMedian(input[] || ...args)

The `calculateMedian` function determines the median value of a set of numbers, which is the middle value when the numbers are sorted in ascending order. Similar to `calculateMean`, it supports various input types such as individual numbers, arrays, and comma-separated strings. The function processes all inputs to extract valid numeric values, sorts them, and then calculates the median. For even-length datasets, it returns the average of the two middle values. If the input contains no valid numbers, the function returns `null`.

```javascript
import {calculateMedian} from "math-unlimited";
console.log(calculateMedian([1,11,21,31,41,51,61,71,81,91,101])); // 51
console.log(calculateMedian([2,12,22,32,42,52,62,72,82,92,102])); // 52
console.log(calculateMedian([3,13,23,33,43,53,63,73,83,93,103])); // 53
```

## calculateMode(input[] || ...args)

This function computes the mode, which is the value or values that appear most frequently in a dataset. It handles diverse input formats, including single numbers, arrays, and comma-separated strings, aggregating all valid numeric values into an array. The function then counts the frequency of each number and identifies the most frequent ones. If all values occur with the same frequency, the function returns `null` since there is no distinct mode. Otherwise, it returns an array of the mode(s).

```javascript
import {calculateMode} from "math-unlimited";
console.log(calculateMode([1,11,11,21,21,31,31,41,41,51,51])); // [ 11, 21, 31, 41, 51 ]
console.log(calculateMode([2,12,12,22,22,32,42,52,52,62,72])); // [ 12, 22, 52 ]
console.log(calculateMode([3,13,23,23,33,43,53,63,63,73,73])); // [ 23, 63, 73 ]
```

## calculateAverage(input[] || ...args)

The `calculateAverage` function calculates the arithmetic mean, which is the same as `calculateMean`. It aggregates numbers from inputs of various formats (a single number, an array, or a comma-separated string) into an array of valid numeric values. It filters out non-numeric data and computes the mean by summing all the numbers and dividing by their count. If there are no valid numeric values in the inputs, the function returns `null`.

```javascript
import {calculateAverage} from "math-unlimited";
console.log(calculateAverage([1,11,11,21,21,31,31,41,41,51,51])); // 28.272727272727273
console.log(calculateAverage([2,12,12,22,22,32,42,52,52,62,72])); // 34.72727272727273
console.log(calculateAverage([3,13,23,23,33,43,53,63,63,73,73])); // 42.09090909090909
```

## fibonacciSeries(range)

This function generates and prints the Fibonacci sequence up to a specified range. It initializes the first two numbers of the sequence (`n1 = 0` and `n2 = 1`) and iterates through a `for` loop for the given range. In each iteration, it prints the current Fibonacci number (`n1`) and updates the sequence by calculating the next number as the sum of `n1` and `n2`, assigning `n2` to `n1` and the new sum to `n2`. The function is ideal for displaying the sequence up to a specified number of terms.

```javascript
import {fibonacciSeries} from "math-unlimited";
fibonacciSeries(5); // 0 1 1 2 3
fibonacciSeries(10); // 0 1 1 2 3 5 8 13 21 34
```

## nthFibonacciNumber(range)

This function calculates and returns the Fibonacci number at the `n`th position in the sequence, where `n` is the provided range. Similar to the first function, it uses two variables (`n1` and `n2`) to keep track of the Fibonacci sequence. It iterates through the sequence using a `for` loop, updating the variables in the same manner. After the loop, it returns the last calculated `n1`, which corresponds to the Fibonacci number at the `n`th position.

```javascript
import {nthFibonacciNumber} from "math-unlimited";
console.log(nthFibonacciNumber(20)); // 4181
console.log(nthFibonacciNumber(40)); // 63245986
```

## Conclusion

In conclusion, **math-unlimited** stands out as an essential utility library for JavaScript/TypeScript developers, offering a versatile and efficient suite of mathematical tools. Its intuitive API, performance-driven design, and modular structure make it an invaluable resource for a diverse range of applications, from simple computations to advanced scientific or financial projects. Whether you're a developer, researcher, or enthusiast, **math-unlimited** empowers you to handle mathematical challenges with ease and precision.