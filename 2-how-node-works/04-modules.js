console.log(arguments); //cool
console.log(require('module').wrapper);
// 👆This is what Node internally uses, the above template and then fills up the body of function with our code👆

// ⭐module.export
const calc = require('./test-module-1');
const calculate = new calc();
console.log(calculate.add(5, 7));

// .⭐exports
// since its an object we can destructur it

// const calc2 = require('./test-module-2');
const { add, sub, mul: multiplication } = require('./test-module-2');
console.log(add(10, 20));
console.log(sub(10, 20));
console.log(multiplication(10, 20));

// .⭐caching
// the whole module is only loded once and executed once, after that the modules were stored in node's processes cache, and simply retrived from there instead of loading the module again
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
