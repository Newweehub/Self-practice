/*
1. Array Basics
 1.1 Create an array that contains:
    - a string,
    - a number,
    - a boolean,
    - an object,
    - and another array.
    Then:
    - Log the first element, last element, and the array length.
    - Loop through the array and print each element with its type.
 1.2 Using pop(), remove the last item from the array you created and print the result.
*/

let array = ['hello', 12, true, {key : 'pair'}, ['apple', 'banana', 'orange']];
console.log(array[0]);
console.log(array[array.length - 1]);
console.log(array.length);
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]} is ${typeof array[i]}`);
}

array.pop();
console.log(array);

/*
2. Nested Arrays & Objects
 2.1 From this nested array:
    let arr = [
        {name: 'fruit', list: ['apple', 'banana', 'mango']},
        ['hello', 'world']
    ];
    - Print 'banana' from the first object’s list.
    - Print 'world' from the second array.
 2.2 From the given colors array:
    const colors = [
        {id:1, name:'red', tone:'hot'},
        {id:2, name:'purple', tone:'cool'},
        {id:3, name:'white', tone:'neutral'}
    ];
    - Print the name of the second color.
    - Loop and print "red is hot", "purple is cool", "white is neutral".
*/

let arr = [
    {name: 'fruit', list: ['apple', 'banana', 'mango']},
    ['hello', 'world']
];
console.log(arr[0].list[1]);
console.log(arr[1][1]);

const colors = [
    {id:1, name:'red', tone:'hot'},
    {id:2, name:'purple', tone:'cool'},
    {id:3, name:'white', tone:'neutral'}
];
console.log(colors[1].name);
for (let i = 0; i < colors.length; i++) {
    console.log(`${colors[i].name} is ${colors[i].tone}`);
}

/*
3. Accessing Deep Data
 3.1 From this:
    const contacts = [
        {email:['abc@gmail.com','foo@kmutt.ac.th']},
        {address:['Bangkok', 'Phuket']}
    ];
    - Print only 'foo@kmutt.ac.th'.
    - Print only 'Bangkok'.
 3.2 From:
    const groups = [
        ['Malee', 'Jane'],
        ['John', 'Jay', 'Pete']
    ];
    - Print 'Jane' and 'Pete'.
    - Loop through groups and print the last name in each sub-array.
*/

const contacts = [
    {email:['abc@gmail.com','foo@kmutt.ac.th']},
    {address:['Bangkok', 'Phuket']}
];
console.log(contacts[0].email[1]);
console.log(contacts[1].address[0]);

const groups = [
    ['Malee', 'Jane'],
    ['John', 'Jay', 'Pete']
];
console.log(groups[0][1]);
console.log(groups[1][2]);
for (let i = 0; i < groups.length; i++) {
    console.log(groups[i][groups[i].length - 1]);
}

/*
4. Spread Syntax
 4.1 Convert the string "good morning" into an array of characters using [...string].
 4.2 Create a new array:
    ['start', ...charactersFromAbove, 'end']
    and print it.
*/

const string = 'good morning'
const charactersFromAbove = [...string]
console.log(charactersFromAbove);

const cloneString = ['start', ...charactersFromAbove, 'end']
console.log(cloneString);

/*
5. Array Creation Methods
 5.1 Create:
    - An empty array with new Array().
    - An array with 5 empty slots using new Array(5).
    - An array with numbers 3, 2, 1, 'done' using new Array(...).
 5.2 Use:
    - Array.of() to create [7], [1,2,3].
    - Array.from() to:
      - Convert a string into an array of characters.
      - Convert an array-like object {0:'a', 1:'b', length:2} into a real array.
*/

let a1 = new Array();
console.log(a1);
let a2 = new Array(5);
console.log(a2);
let a3 = new Array(3, 2, 1, 'done');
console.log(a3);

let b11 = Array.of(7);
let b12 = Array.of(1, 2, 3);
console.log(b11);
console.log(b12);
let b2 = Array.from('hello world')
console.log(b2);
let b3 = Array.from({0:'a', 1:'b', length:2});
console.log(b3);
