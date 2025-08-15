/*
1. Basic Object Creation & Access
 1.1 Create an object car with:
    - brand (string)
    - model (string)
    - year (number)
    - Method getBrand() that returns the brand.
 1.2 Print the whole object.
 1.3 Call and print the result of getBrand().
*/

let car = { brand : 'Toyota', model : 'Camry', year : 2025, getBrand() { return this.brand }}
console.log(car);
console.log(car.getBrand());

/*
2. Nested Objects & Arrays
 2.1 Create an object university with:
    - name (string)
    - location (string)
    - departments (array of department names)
    - contact (object with email and phone)
    - Method getLocation() that returns the location.
 2.2 Access and print the second department name.
 2.3 Access and print the university’s phone number.
*/

let university = { name : 'KMUTT', location : 'Bangkok', 
        departments : ['SIT','Engineering', 'Science'],
        contact : {email : 'contact@kmutt.ac.th', phone : '024708000'},
        getLocation() { return this.location }}
console.log(university.departments[1]);
console.log(university.contact.phone);

/*
3. Adding & Removing Properties
 3.1 Add a ranking property to university and print it.
 3.2 Delete the location property from university.
 3.3 Print the updated object.
*/

university.ranking = 3;
delete university.location;
console.log(university);

/*
4. Loop Through Object Properties
 4.1 Use a for...in loop to print all keys and values in car.
*/

for (const key in car) {
    console.log(`key: ${key}, value: ${car[key]}`);
}

/*
5. Constructor Functions
 5.1 Write a constructor function Movie that accepts:
    - title
    - director
    - year
 5.2 Create two Movie objects and print them.
*/

function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
}
let movie1 = new Movie('Harry Potter', 'Chris Columbus', 2001)
let movie2 = new Movie('Superman', 'James Gunn', 2025)
console.log(movie1);
console.log(movie2);

/*
6. Classes
 6.1 Create a class Laptop with:
    - Constructor for brand and price
    - Method getBrand()
    - Method setPrice(newPrice)
    - Method getInfo() returning a formatted string with brand and price.
 6.2 Create a Laptop object and test all methods.
*/

class Laptop {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    getBrand() {
        return this.brand;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    getInfo() {
        return `brand : ${this.brand}, price : ${this.price}`
    }
}
let laptop1 = new Laptop('OMEN', 58000);
console.log(laptop1.getInfo());
console.log(laptop1.getBrand());
laptop1.setPrice(60000);
console.log(laptop1.getInfo());

/*
7. Object.create
 7.1 Create a base object animal with a property type and method makeSound().
 7.2 Use Object.create(animal) to create a new object dog with an extra property breed.
 7.3 Call makeSound() from dog.
*/

const animal = {type : 'animal', sound : '', makeSound() { return this.sound} }
const dog = Object.create(animal);
dog.type = 'mammal'
dog.sound = 'woof'
dog.breed = 'pomeranian';
console.log(dog);
console.log(dog.makeSound());

/*
8. Object Reference & Equality
 8.1 Create two objects with the same content but different references.
 8.2 Compare them with:
    - ===
    - ==
    - Object.is()
 8.3 Assign one to another and compare again.
*/

let a = { id : 1, title : 'ABC'};
let b = { id : 1, title : 'ABC'};
console.log(a === b);  //false
console.log(a == b);  //false
console.log(Object.is(a,b));  //false

b = a;
console.log(a === b);  //true
console.log(a == b);  //true
console.log(Object.is(a,b));  //true

/*
9. Shallow Equality Check
Write a function shallowEquality(obj1, obj2) that:
 9.1 Gets all keys from both objects using Object.keys().
 9.2 If the number of keys is different, return false.
 9.3 Loop through the keys from obj1 and compare the values with obj2.
 9.4 If all keys and values match, return true; otherwise false.
Example:
let book1 = { isbn: 123456789, title: "JavaScript" };
let book2 = { isbn: 123456789, title: "JavaScript" };
console.log(shallowEquality(book1, book2)); // true
*/

let book1 = { isbn: 123456789, title: "JavaScript" };
let book2 = { isbn: 123456789, title: "JavaScript" };

function shallowEquality(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

console.log(shallowEquality(book1, book2)); // true

/*
10. Object.keys / Object.values
 10.1 Use Object.keys(existingObj) to print all keys.
 10.2 Use Object.values(existingObj) to print all values.
*/

console.log(Object.keys(movie1));
console.log(Object.values(movie1));

/*
11. Destructuring
 11.1 Create an array fruits with three fruits and use array destructuring to get the third fruit.
 11.2 Create an object player with:
    - name
    - team
    - stats (nested object with goals and assists)
 11.3 Use object destructuring to:
    - Extract name and team.
    - Extract only goals from stats.
*/

const fruits = ['apple', 'banana', 'mango']
const [, , fruit3 ] = fruits
console.log(fruit3);

const player = { name: 'somchai', team: 'team1', stats: { goals: 3, assist: 2} }
const {name, team} = player;
console.log(name);
console.log(team);
const {stats:{goals}} = player;
console.log(goals);