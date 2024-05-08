'use strict'

function execute(operation, a, b) {
  switch (operation) {
    case 'DIV':
      return DIV(a, b);
    case 'ADD':
      return ADD(a, b);
    case 'SUB':
      return SUB(a, b);
    case 'MUL':
      return MUL(a, b);
    default:
      return typeof operation === 'string' ? 'Nom d\'opération inconnu' : 'Type d\'opération inconnu';
  }
}


const DIV = function (a, b) {
  
  return a / b
};

const ADD = function (a, b) {
  
  return a + b
};

const SUB = function (a, b) {
  
  return a - b
};

const MUL = function (a, b) {
 
  return a * b
};


console.log(execute('ADD', 6, 2));
console.log(execute('SUB', 6, 2));
console.log(execute('MUL', 6, 2));
console.log(execute('DIV', 6, 2));
console.log(execute('chaloupe', 6, 2));
console.log(execute(666, 6, 2));