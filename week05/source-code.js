// Part 1: Working with Arrays & Objects
/*
1. Given the array studentScores, write a function that:
 - Returns all students who scored below 60.
 - Returns only their names in lowercase.
 // Example output: ["david"]
*/

const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
function failedStudent(studentList) {
    return studentList.filter(student => student.score < 60).map(student => student.name.toLowerCase())
}
console.log(failedStudent(studentScores));

/*
2. Modify failedStudent so it returns both the name and score of students who failed.
*/

function failedStudent1(studentList) {
    let result = []
    for (const i of studentList) {
        if (i.score < 60) {
            result.push(i)
        }
    }
    return result
}
console.log(failedStudent1(studentScores));

/*
3. Using Array.isArray(), check:
 - If studentScores[0].name is an array.
 - If [1,2,3] is an array.
 - If {} is an array.
*/

console.log(Array.isArray(studentScores[0].name));
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray({}));

// Part 2: Array Operations
/*
4. Merge the following arrays and remove duplicates:
 const a = ["apple", "banana"]
 const b = ["banana", "cherry"]
 // Expected output: ["apple", "banana", "cherry"]
*/

const a = ["apple", "banana"]
const b = ["banana", "cherry"]
const fruits = [...new Set(a.concat(b))]
console.log(fruits);

/*
5. Convert the merged array into a single comma-separated string.
*/

const fruitsToString = fruits.join(",")
console.log(fruitsToString);

//Part 3: Sorting
/*
6. Sort the array of numbers:
 const nums = [10, 5, 40, 25, 100]
 - Ascending order
 - Descending order
*/

const nums = [10, 5, 40, 25, 100]
const ascend = nums.sort((a,b) => a-b)
console.log(ascend);
const descend = nums.sort((a,b) => b-a)
console.log(descend);

/*
7. Given the array of students:
 const students = [
   { id: 1, name: "Tisanai" },
   { id: 2, name: "Alice" },
   { id: 3, name: "Bob" }
 ]
 - Sort students by id descending.
 - Sort students by name ascending.
*/

const students = [
   { id: 1, name: "Tisanai" },
   { id: 2, name: "Alice" },
   { id: 3, name: "Bob" }
]
const idDescend = students.sort((a,b) => b.id - a.id)
console.log(idDescend);
const nameAscend = students.sort((a,b) => a.name.localeCompare(b.name))
console.log(nameAscend);
