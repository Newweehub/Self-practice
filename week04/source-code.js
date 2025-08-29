/* 
1. Filtering and Mapping
 1.1 Use .filter() to get only the words that contain "mango".
 1.2 Use .map() to convert all words to lowercase.
 1.3 Combine .filter() and .map() to return only words shorter than 7 letters, in uppercase.
*/

const words = ["mango", "Apple", "mangosteen", "orange", "mangoes"]

const getMango = words.filter(word => word.includes('mango'))
console.log(getMango);

const toLowerCase = words.map(word => word.toLowerCase())
console.log(toLowerCase);

const shortWord = words.map(word => word.toUpperCase()).filter(word => word.length < 7)
console.log(shortWord);

/*
2. Sorting
 2.1 Sort the words array in reverse alphabetical order.
 2.2 Sort students by their name (alphabetically).
*/

const sortReverse = words.sort().reverse()
console.log(sortReverse);

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
];
const sortStudent = students.sort((a,b) => a.name.localeCompare(b.name))
console.log(sortStudent);

/*
3. Finding
 3.1 Use .find() to get the first word that includes "apple".
 3.2 Use .find() to get the student whose id is 2.
*/

const findApple = words.find(word => word.toLowerCase().includes('apple'))
console.log(findApple);

const findID = students.find(student => student.id === 2)
console.log(findID);

/*
4. Reducing
 4.1 Write a .reduce() that calculates the total quantity of all items in the cart.
 4.2 Write a .reduce() that calculates the average price of all products in the cart.
 4.3 Modify .reduce() so that it returns an object like:
    { totalPrice: xxx, totalQuantity: yyy }
*/

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
];

const totalQuantity = cart.reduce((total, product) => total += product.quantity, 0)
console.log(totalQuantity);

const average = cart.reduce((total, product) => total += product.price, 0)/cart.length
console.log(average);

const results = cart.reduce((result, product) => {
  result.totalPrice += product.price * product.quantity;
  result.totalQuantity += product.quantity;
  return result;
}, { totalPrice: 0, totalQuantity: 0 });
console.log(results);

/*
5. Array Modification
 5.1 Add a new product to cart using .push().
 5.2 Remove the last product from cart using .pop().
 5.3 Replace "orange" in words1 with "grape" using .splice().
 5.4 Extract only the first 2 elements from words1 using .slice().
 5.5 Fill the entire words1 array with "fruit" using .fill().
*/

cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart);

cart.pop()
console.log(cart);

const words1 = ["mango", "Apple", "mangosteen", "orange", "mangoes"]
words1.splice(3,1,'grape')
console.log(words1);

console.log(words1.slice(0,2));

words1.fill('fruit')
console.log(words1);

/*
6. Challenge 
Write a function calculateTotal(cart) that takes a shopping cart (array of objects) 
and returns the grand total price.
    const cart = [
      { productId: 1001, price: 500, quantity: 2 },
      { productId: 1002, price: 10, quantity: 3 },
      { productId: 1003, price: 5, quantity: 10 },
    ];
    console.log(calculateTotal(cart)); // should return 1080
*/

function calculateTotal(cart) {
    return cart.reduce((total,product) => total += product.price * product.quantity, 0)
}
console.log(calculateTotal(cart));
