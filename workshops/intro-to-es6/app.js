//

function sayHi(name){
  return "Hello, there" + name + "!"
}

// console.log(sayHi("Doug"))


// new var is const
// and also let


//ES6 Arrow Function
const sayHello = (name) => {
  return  "Hello, there" + name + "!";

}
// console.log(sayHello("Doug"));


//expame using string interpolation
const sayHello2 = (name, age) => {
  return `Hello, there ${name}, whats your age ${age}!`;
}

// console.log(sayHello2("doug", 18))


const sayHello3 = name => `Hello, there ${name}`
// console.log(sayHello3("Doug"));

const getSum = (a,b) => {
  return a + b;
}
// console.log(getSum(3,6));


const numbers = [1,3,5,7,9,10];

var mappedNumbers = numbers.map(function(num){
  return {count: num}
});


const mappedNumbers2 = numbers.filter((nums) => {
  return nums > 6
})
// console.log(mappedNumbers2);

//Objects

// ES5
var name = "Doug";
var age = 22;

var person = {name: name, age: age};

//ES6
const nombre = "Doug";
const anons = 22;

const persono = { nomber, anons };
