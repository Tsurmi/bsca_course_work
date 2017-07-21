//Operators
//
// Add: +
// Subtract: -
// Multiple: *
// Divide: /
// Modulo: %


function basicMath(operator, num1, num2){
  var operator = operator;
  var num1 = num1;
  var num2 = num2;

  if(operator === '+'){
    var result = num1 + num2
  }
  else if (operator === '-') {
    var reslut = num1 - num2
  }
  else if (operator === '/') {
    var reslut = num1 / num2
  }
  else if (operator === '*') {
    var reslut = num1 * num2
  }
  else if (operator === '%') {
    var reslut = num1 % num2
  }

  return reslut
}

// console.log("ADD", basicMath('+',4,7))
// console.log("SUBTRACT", basicMath('-',15,18))
// console.log("DIVIDE", basicMath('/',45,5))
// console.log("MULTIPLY",basicMath('*', 5,5))
// console.log("MOD", basicMath('%',20,10))

  function basicOp(op, num1, num2){
    if(op === '+'){
      return num1 + num2
    }
    else if(op === '-'){
      return num1 - num2
    }
    else if(op === '*'){
      return num1 * num2
    }
    else if(op === '/'){
      return num1 / num2
    }
    else if(op ==='%'){
      return num1 % num2
    }
}

console.log("ADD",basicOp('+',10,11))
console.log("SUBTRACT",basicOp('-',20,11))
console.log("MULTIPLY",basicOp('*',2,11))
console.log("DIVIDE",basicOp('/',10,2))
console.log("MODULO",basicOp('%',20,10))
