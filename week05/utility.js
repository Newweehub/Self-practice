// Part 4: Functions & Modules

/*
8. Write a function echoTwice that takes a string and returns it repeated twice.
  echoTwice("Hello") // "HelloHello"
*/

function echoTwice(str) {
    return str.repeat(2)
}

function getLength(str) {
  return str.length
}
const MAXSTUDENT = 60

module.exports = { echoTwice, getLength, MAXSTUDENT }