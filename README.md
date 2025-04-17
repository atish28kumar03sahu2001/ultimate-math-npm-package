# 📦 math-unlimited

**`math-unlimited`** is a powerful and comprehensive JavaScript/TypeScript utility library that provides a wide range of mathematical functions and tools for developers, researchers, students, and enthusiasts. Designed with performance and modularity in mind, it offers an intuitive API to handle everything from basic arithmetic to complex mathematical computations.

Whether you're building a scientific application, developing financial software, working on data analysis tools, or just need quick and reliable math functions, `math-unlimited` is your go-to solution.

## cmd Prompt For Installation

```javascript
npm install math-unlimited
```

## 🔧 Key Features

-   **Lightweight & Modular**: Import only what you need — no unnecessary bloat.
    
-   **Typed with TypeScript**: Enjoy full IntelliSense support, type safety, and better developer experience.
    
-   **Comprehensive Function Set**: Covers basic arithmetic, algebra, geometry, trigonometry, statistics, calculus, number theory, and more.
    
-   **Optimized for Performance**: All functions are optimized for speed and reliability, suitable for production-level applications.
    
-   **Fully Tested**: High unit test coverage ensures accuracy and stability across all supported functionalities.
    
-   **Cross-Platform Compatibility**: Works seamlessly in both Node.js and browser environments.


## Required Packages

**1 npm init -y**


**2 npm i rollup**


**3 npm i react react-dom**


**4 npm i tslib**


**5 npm i @rollup/plugin-babel**


**6 npm i @rollup/plugin-typescript**


**7 npm i @types/react**




## arithmetic(input1: number, input2: number, choice: string)

```javascript
import React, { useState } from 'react'
import {arithmetic} from 'math-unlimited';
const App = () => {
  const [result, setResult] = useState(0);
  const HandleArithmetic = (e) => {
    e.preventDefault();
    const input1 = parseInt(e.target.ip1.value);
    const input2 = parseInt(e.target.ip2.value);
    const choice = e.target.choice.value;
    const result = arithmetic(input1, input2, choice);
    setResult(result);
    e.target.reset();
  }
  return (
    <div>
      <form onSubmit={HandleArithmetic}>
        <input type='text' id='ip1' name='ip1' placeholder='Enter Input1' />
        <input type='text' id='ip2' name='ip2' placeholder='Enter Input2' />
        <select id='choice' name='choice'>
          <option value="Addition">Addition</option>
          <option value="Subtraction">Subtraction</option>
          <option value="Multiplication">Multiplication</option>
          <option value="Division">Division</option>
          <option value="Modulo">Modulo</option>
        </select>
        <input type='submit' value="Result" />
      </form>
      <h1>Result: {result}</h1>
    </div>
  )
}

export default App
```
The `arithmetic(input1: number, input2: number, choice: string)` function accepts user inputs in the form of two numeric values (`input1` and `input2`) and a string value (`choice`). Based on the specified `choice`, the function performs the corresponding arithmetic operation and returns the result.

The parameters are defined as follows:

-   `input1`: A number representing the first operand.
    
-   `input2`: A number representing the second operand.
    
-   `choice`: A string indicating the arithmetic operation to perform. The valid options are:
    
    -   `Addition`
        
    -   `Subtraction`
        
    -   `Multiplication`
        
    -   `Division`
        
    -   `Modulo`
        

The function executes the operation specified by the `choice` parameter and returns the appropriate result.

## division(input1: number, input2: number, choice: String)

```javascript
import React, { useState } from "react";
import { division } from "math-unlimited";
const App = () => {
  const [output, setOutput] = useState(0);
  const HandleDivision = (e) => {
    e.preventDefault();
    const ip1 = parseInt(e.target.in1.value);
    const ip2 = parseInt(e.target.in2.value);
    const option = e.target.option.value;
    const output = division(ip1, ip2, option);
    setOutput(output);
    e.target.reset();
  }
  return (
    <>
      <div>
        <form onSubmit={HandleDivision}>
          <input type="text" id="in1" name="in1" placeholder="Enter Input1" />
          <input type="text" id="in2" name="in2" placeholder="Enter Input2" />
          <select id="option" name="option">
            <option value="Dividend">Dividend</option>
            <option value="Divisor">Divisor</option>
            <option value="Quotient">Quotient</option>
            <option value="Remainder">Remainder</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <h1>Result: {output}</h1>
      </div>
    </>
  );
};
export default App;
```

The `Division` function performs the mathematical operation based on the user's choice.

## Parameters

-   `input1` (number): The first input number.

-   `input2` (number): The second input number.

-   `choice` (string): The operation selected by the user.

## Logic


**1 Operation** 

* Handles the computation based on the choice value.

* Supported choices:

	- `Dividend`: Returns the first input number (input1).

	- `Divisor`: Returns the second input number (input2).

	- `Quotient`: Performs division (input1 / input2).

	- `Remainder`: Computes the remainder (input1 % input2).


## How They Work Together

* The App component provides a user interface to input data and interact with the Division function.

* On form submission:
	- Input values are retrieved from the form fields.
	
	- The Division function computes the result based on the selected operation.
	
	- The computed result is stored in the output state and displayed in the UI.

