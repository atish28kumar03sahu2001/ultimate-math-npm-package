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


##  arithmetic (input1, input2, choice)

This method is used for to perform the basic `arithmetic` operations like `Addition(+)`, `Subtraction(-)`, `Multiplication(*)`, `Division(/)`, `Modulo(%)`. In arithmetic method it will took three arguments `input1`, `input2`, and `choice`.

**input1**: This is the first operand value.
**input2**: This is the second operand value.
**choice**: User will choose one option from [+, -, *, /, %]

    Addition = num1 + num2
    Subtraction = num1 - num2
    Multiplication = num1 * num2
    Division = num1 / num2
    Modulo(Remainder) = num1 % num2

### Example Code

```javascript
import {arithmetic} from "math-unlimited";
let num1 = 100, num2 = 200;
console.log(arithmetic(num1, num2, "Addition")); // 300
console.log(arithmetic(num1, num2, "SUBTRACTION")); // -100
console.log(arithmetic(num1, num2, "multiplication")); // 20000
console.log(arithmetic(num1, num2, "DiViSiOn")); // 0.5
console.log(arithmetic(num1, num2, "mODULO")); // 100
```

In the above code you can observe after added the input1 and input2 i wrote the options in different types of string writing format patterns. but the code is working fine. The reason is in the package  i convert the string into `lowercase` so you can give any type of string writing format.

## division (input1, input2, choice)

This method is used for to perform the Division operation and it will display the `Divisor`, `Dividend`, `Quotient` and `Remainder`. In division method it will took three arguments `input1`, `input2`, `choice`.

**input1**: This is the first operand value.  
**input2**: This is the second operand value.  
**choice**: User will choose one option from [Divisor, Dividend, Quotient, Remainder]

![Division Example](https://res.cloudinary.com/duke5nl3i/image/upload/v1744910976/Division_aj1rzn.png)

### Example Code

```javascript
import {division} from "math-unlimited";
let num1 = 150, num2 = 7;
console.log(division(num1, num2, "Dividend")); // 150
console.log(division(num1, num2, "dIVISOR")); // 7
console.log(division(num1, num2, "Quotient")); // 21.428571428571427
console.log(division(num1, num2, "REMAINDER")); // 3
```
In the above code you can observe after added the input1 and input2 i wrote the options in different types of string writing format patterns. but the code is working fine. The reason is in the package i convert the string into `lowercase` so you can give any type of string writing format.

##  evenOdd(input)

This method is used for to calculate either the number is `Even Number` or `Odd Number`. This is particularly used for to calculate and return only for Even and Odd Number. In this method it need only one argument `input` and it must be Integer type.

**input**: Using the value of this argument code will calculate for even and odd.

```javascript
if(i % 2 === 0) {
	return "Even Number";
} else {
	return "Odd Number";
}
```

### Example Code

```javascript
import {evenOdd} from "math-unlimited";
console.log(evenOdd(20)); // Even Number
console.log(evenOdd(21)); // Odd Number
```

## isDivisible(input, divisibleBy)

This method is used for to calculate any number is divisible by any given number of not. This method need two arguments `input` and `divisibleBy` and in output it will return String output.

```javascript
if(input % divisibleBy === 0) {
	return `${input} Divisible By ${divisibleBy}.`
} else {
	return `${input} Is Not Divisible By ${divisibleBy}.`
}
```
### Example Code

```javascript
import {isDivisible} from  "math-unlimited";
console.log(isDivisible(20, 3)); // 20 Is Not Divisible By 3.
console.log(isDivisible(21, 3)); // 21 Divisible By 3.
```

