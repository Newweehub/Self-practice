/* 
1. Function Basics
 1.1 Write a function subtract(a, b) using function declaration and test it.
 1.2 Write a function divide(a, b) using an arrow function and test it.
 1.3 Write a function modulus(a, b) using a function expression and test it.
*/

function subtract(a,b) {
    return a-b;
}
console.log(subtract(5,3));

const divide = (a,b) => a/b;
console.log(divide(40,2));

const modulus = function(a,b) {return a%b};
console.log(modulus(13,2));

/*
2. Function as Values (Reference)
 2.1 Assign one of your functions (e.g. subtract) to a variable myFunc and call it.
 2.2 Check if two functions are equal (===) and explain why.
*/

let myFunc = subtract
console.log(myFunc(5,6));

if (myFunc === subtract) {
    console.log('myFunc is equal to subtract');
}
else {
    console.log('myFunc is not equal to subtract');
}
//myFunc = subtract เพราะเก็บเป็น reference ของ function

/*
3. Higher-Order Functions
 3.1 Write a function applyOperation(fn, a, b) that takes a function (fn) and two numbers, 
 then applies the function.
 3.2 Write a function returnHelloFunction() that returns a function which, when called, prints "Hello".
*/

function applyOperation(fn, a, b) {
    return fn(a,b);
}
console.log(applyOperation(divide, 15, 3));
console.log(applyOperation(modulus, 13, 11));

function returnHelloFunction() {
    return hello
}
function hello() {
    return 'Hello';
}
console.log(returnHelloFunction()());

/*
4. Working with Objects
 4.1 Create an object laptop = { brand: "Dell", price: 25000 }.
 4.2 Write a function updatePrice(obj, newPrice) that updates the price property.
 4.3 Show that primitive types don’t change outside functions, but objects do.
*/

let laptop = { brand: "Dell", price: 25000 };

function updatePrice(obj, newPrice) {
    obj.price = newPrice;
}

console.log(laptop.price);
updatePrice(laptop, 50000);
console.log(laptop.price);

/*
5. Rest Parameters & Arguments
 5.1 Write a function printAll(...args) that logs every argument passed.
    printAll(1, 2, 3, "hello", true);
 5.2 Write a function sumAll(...nums) that returns the sum of all numbers.
*/

function printAll(...args) {
    for (argu of arguments) {
        console.log(argu);
    }
}
console.log(printAll(1, 2, 3, "hello", true));

function sumAll(...nums) {
    let output = 0;
    for (num of arguments) {
        output += num
    }
    return output
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8));
console.log(sumAll(1));
console.log(sumAll());

/*
6. Default Parameters
 6.1 Create a function introduce(name = "Guest", age = "unknown") that prints
    Hello, my name is [name], I am [age] years old.
 Test with introduce(), introduce("Anna"), and introduce("Bob", 21).
*/

function introduce(name = "Guest", age = "unknown") {
    return `Hello, my name is ${name}, I am ${age} years old.`;
}
console.log(introduce());
console.log(introduce("Anna"));
console.log(introduce("Bob", 21));

/*
7. Word Frequency Counter
Write a function getFreqOfWords (sentence) that returns an object with keys representing unique words 
in lowercase and values representing the frequency of occurrences of each word with ignore case in the sentence. 
If the input string is null or undefined, return undefined.
Output:
   - console.log(getFreqOfWords('Today is present and present is your gift'))
    //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
   - console.log(getFreqOfWords('Do you best just do it'))
    //{ do: 2, you: 1, best: 1, just: 1, it: 1 }
   - console.log(getFreqOfWords (null)) //undefined
   - console.log(getFreqOfWords (undefined)) //undefined
*/

function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) return undefined;

    let words = sentence.toLowerCase().split(' ');
    let output = {}

    for (const i of words) {
        output[i] = i in output ? output[i] += 1 : 1
        //add property to object -> object["key"] = "value"
    }
    return output;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords (null))
console.log(getFreqOfWords (undefined))