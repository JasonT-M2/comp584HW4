// Question 1
var thisIsaNewVariable = 10;

//if thisIsaNewVariable is set to 10 then do something
if (thisIsaNewVariable == 10) {
  // code block
}

//Question 2
let strTick = `Hello World`;
let numFloat = 5.0;
let boolTrue = true;

//Question 3

//creates the integer varible currentScore and sets it equal to 95
let currentScore = 95;

//Question 4

console.log("100" == 100);
console.log("100" === 100);

//Question 5

let isWeekend = false;
let schedule;

/*checks if the variable `isWeekend` is `true`. If true, assign the string `"Day off"` 
to the variable `schedule`, otherwise assign `"Work day"`.
*/
isWeekend == true ? (schedule = "Day off") : (schedule = "Work day");

//Question 6

let userAge = 16;
/* If `userAge` is greater than or equal to 18, 
 log the message `"Access Granted"`. Otherwise, 
 if the condition is **not met**, log the message `"Access Denied"`. */

if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

//Question 7

let hasPermission = true;
let itemCount = 3;
// Write if statement using AND operator:
if (hasPermission == true && itemCount <= 5) {
  console.log("Ready to Process");
}

//Question 8
for (i = 1; i <= 5; i++) {
  console.log(i);
}

//Question 9
for (i = 0; i <= 9; i++) {
  console.log(i);
  if (i == 7) {
    break;
  }
}

//Question 10
let counter = 10;
// Write do while loop:
do {
  console.log("Running Once");
} while (counter == 999);

//Question 11

function calculateArea(w, l) {
  let area = w * l;
  return area;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea);

//Question 12
let fruitList = ["Apple", "Banana"];

fruitList.push("Grape");
fruitList.shift();
console.log(fruitList.indexOf("Banana"));

//Question 13

let originalData = [1];
// Write slice method:
clonedData = originalData.slice();

//slice creates a copy of the array it is slicing so when placing it into a variable that allows the
//variable to be a copy of the original array
//We shuold be aware that the slice method needs to be should be stored in a variable or used directly in a function
//as it returns a copy of the array

//Question 14

function Animal(species, sound) {
  this.species = "Frog";
  this.sound = "Ribbit";
}
var animal = new Animal();
console.log(animal);

//Question 15
var dog = new Animal("Canine", "Woof");
var cat = new Animal("Feline", "Meow");

let animalArray = [dog, cat];
