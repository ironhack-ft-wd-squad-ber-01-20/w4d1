// var, let and const

var name = "John";
name; // "John";
// variables declared with `var` can be re-declared
var name = "Jane";
name; // "Jane"

let lastName = "Doe";
// let lastName = "Doe"; // ❌ variables declared with `let` or `const` cannot be redeclared
// Uncaught SyntaxError: Identifier 'lastName' has already been declared

// variables declared with `let` or `var` can be re-assigned
// var city = "Paris";
// city = "Berlin";

let country = "France";
country = "Germany";

// variables declared with `const` cannot be re-assigned
const continent = "Europe";
// continent = "Europe"; // ❌
// Uncaught TypeError: Assignment to constant variable.

// If we declare a variable of the non-primitive type with `const`, it remains mutable
const person = {
  name: "John"
};

person.name = "Jane";

person.name; // "Jane"
person.age = 21;
person.age; // 21

/*
Object.freeze(person);
person.foo = "bar";

console.log(person);
*/

// Hoisting

console.log(a);
var a = 42;
// variables declared with `var` hoist and are initialized with a value of undefined

// console.log(b); // ❌
// Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 42;
// console.log(c); // ❌
// Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 42;
// variables declared with `let` and `const` hoist but they are not initialized

let foo = 1;

function foobar() {
  // console.log(foo); // ❌ it tries to access the variable declared at line 61 -> hoisted
  let foo = 0;
  console.log(foo);
}

foobar();

// Scope
// variables declared with `let` and `const` have a `block scope`

if (true) {
  let x = 1337;
  const y = 42;
  var z = -1;
  console.log(x);
  console.log(y);
}
// console.log(y); // ❌ Uncaught ReferenceError: y is not defined

// console.log(x); // Uncaught ReferenceError: x is not defined

// variables declared with `var` have two possible scopes: the global scope and the function scope (or local scope)
console.log(z); // global scope

if (true) {
  console.log(z); // -1 (z from line 73)
}

function bar() {
  const z = "foo";

  if (true) {
    console.log(z);
    // console.log(q); // ❌ Uncaught ReferenceError: q is not defined
    console.log(r); // "rrr"

    if (true) {
      const z = "baz";
      const q = "qux";
      var r = "rrr";

      if (true) {
        console.log(z);
        console.log(q);
        console.log(r);
      }
    }
  }
}

bar();

// console.log(r); // ❌ Uncaught ReferenceError: r is not defined
// variables declared with `var` have 2 possible scopes:
// - the global scope
// - the function (or local) scope:
//    - when defined in a function, a variable declared with `var` will be available globally in that function and only in that function's body

// String interpolation

const student = {
  name: "Jason",
  country: "USA"
};

// const greeting = "Hello " + student.name + " from " + student.country;

const greeting = `Hello ${student.name} from ${student.country} ${6 * 7}`;

// const content = "<div>\n\
// <p>\n\
// <span>foo bar</span>\n\
// </p>\n\
// </div>";

const content = `<div>
<p>
<span>foo bar</span>
</p>
</div>
`;

// .includes() for strings and arrays will return a boolean true or false depending on if the string or array contains the value that was passed to it

greeting.includes("Hello"); // true
greeting.includes("hello"); // false -> case sensitive
greeting.includes("Hello", 1); // false -> the position parameter tells to start searching from that index

["Hello", "World", "!"].includes("!"); // true
["Hello", "World", "!"].includes("orl"); // false

// more string methods

// .startsWith() for strings returns a boolean true or false depending on if the string starts with a given search string

greeting.startsWith("Hello"); // true
greeting.startsWith("He"); // true
greeting.startsWith("hello"); // false

greeting.startsWith("USA", 17); // true -> position where the string should start
greeting.startsWith("Hello", 17); // false

// .endsWith() for strings returns a boolean true or false depending on if the string ends with a given search string

greeting.endsWith("42"); // true

greeting.endsWith("Hello", 5); // true -> position where the string should end

// string.repeat(n) will return a string with the given string repeated n times
const chorus = "Because I'm happy. ";

console.log("Chorus lyrics: ", chorus.repeat(27));

// https://www.codewars.com/kata/build-a-square
// https://gist.github.com/mjarraya/8ca503322dcbcf937ee685b61da8b102

console.clear();

// Sets
// Set is a collection of unique values
const uniques = new Set([1, 2, 3, 4, 5, 6, 5, 3, 3]);
const cart = new Set(["potato", "tomato", "carrot", "carrot", "mate"]);

cart.has("potato"); // true
cart.has("beer"); // false
cart.size; // 4

// Destructuring
// Objects
const campus = {
  city: "Berlin",
  bootcamps: ["UX/UI", "WebDev", "Data"]
};

// const city = campus.city;
// const bootcamps = campus.bootcamps;
const { city, bootcamps, studentsCount = 42 } = campus;
// We are creating variables that bear the same name as the properties in the object that we are destructuring

// const { 🔨, 🔩, 🔧 } = 🧰;
// const { 👽 } = 🚀

// Arrays
const numbers = [1, 2, 3, 4];
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];
const [first, second, third] = numbers;

const letters = ["a", "b", "c", "d"];
// const bLetter = letters[1];
// const cLetter = letters[2];
// we can skip elements
const [, bLetter, cLetter] = letters;

const colors = ["#F00", "#0F0", "#00F"];
const [red, green, blue, white = "#FFF"] = colors;

const [f, g = 2, h, j = 1] = [5, 4];
f; // 5
g; // 4
h; // undefined
j; // 1

// Spread operator
// returns the content of an array (or of an object) without the array (or object) itself

// we can use it to copy array values
const numbersCopy = [...numbers];
// we can use the spread to split a string
[..."hello"]; // ["h", "e", "l", "l", "o"]
// we can use it to concatenate arrays
const reptiles = ["snake", "lizard"];
const birds = ["eagle", "falcon", "pidgeon"];
const mammals = ["dog", "cow"];

const animals = [...reptiles, ...birds, ...mammals];

// we can use it to (shallow) copy object properties
const obj = {
  a: 1,
  b: 2
};

const objCopy = { ...obj };

// we can use it to merge objects
const obj2 = {
  c: 3,
  d: 4
};

const bigObj = { ...obj, ...obj2, c: 0 };

bigObj.c; // 0

// Rest parameter
// the rest parameter is a placeholder that allows us to access in the body of the function an array with all the arguments passed from that position
// Rest parameter must be last formal parameter
function sum(a, b, ...numbers) {
  console.log(a, b, numbers);
  return numbers.reduce(function(acc, val) {
    return acc + val;
  }, 0);
}

// console.log(sum(1, 3, 5));
// console.log(sum(0, 2));
// console.log(sum(-5, -5, -5, -5, -5, -5));
// console.log(sum());

const randomNumbers = [0, 4, 5, 13, -5, 99, -100];
Math.max(...randomNumbers); // 99 spread
// Math.max(0, 4, 5, 13, -5, 99, -100);
