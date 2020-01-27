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
var city = "Paris";
city = "Berlin";

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
