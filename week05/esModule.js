/*
9. Import the echoTwice and getLength functions from utility.js, then:
 - Call echoTwice("JavaScript")
 - Call getLength("JavaScript")
10. Use MAXSTUDENT (from your utility.js) to:
 - Check if the number 45 is below the maximum.
 - Check if the number 75 is above the maximum.
*/

import { echoTwice, getLength, MAXSTUDENT } from "./utility.js";

console.log(echoTwice("JavaScript"));
console.log(getLength("JavaScript"));

console.log(`45 is below the maximum? ${45 < MAXSTUDENT ? true : false}`);
console.log(`75 is above the maximum ${75 > MAXSTUDENT ? true : false}`);