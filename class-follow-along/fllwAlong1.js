// const constructorArray = new Array(10).fill(10);
// console.log("CONSTRUCT: ", constructorArray);
// const arrayLiteral = ["crystal", "michael", "ryan"];
// const mixedArray = [
//   [1, 2, 3],
//   ["hey", 10, "goodbye"],
//   function () {
//     return function () {
//       return "hello there from inner";
//     };
//   },
//   "strings",
//   12,
//   {},
// ];

// const innerFunc = mixedArray[2];

// console.log(innerFunc()().toUpperCase());
// console.log(arrayLiteral[1][2].toUpperCase());

// console.log(arrayLiteral[arrayLiteral.lenght - 1]);
// console.log(arrayLiteral.at(-1));

const arrayLiteral = ["crystal", "michael", "ryan"];

console.log(arrayLiteral[1][2].toUpperCase());
console.log(arrayLiteral[arrayLiteral.length - 1]);
console.log(arrayLiteral.at(-1));

console.log(arrayLiteral.pop());
console.log(arrayLiteral);
console.log(arrayLiteral.push("brett"));
console.log(arrayLiteral.shift);
