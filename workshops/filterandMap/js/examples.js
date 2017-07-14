// ------------------------
// FILTER AND MAP RESOURCES
// ------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// ------------------------
// MAP EXAMPLES
// ------------------------
var numbers = [1,2,3,4,5,6,7,8,9];


// ONE
// Use a for loop to return an array of odd numbers
var oddNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 !== 0){
    oddNumbers.push(numbers[i])
  }
}
// console.log(oddNumbers);



var mappedOddNumbers = numbers.map(function(item){
  return item * 2
});

// console.log(mappedOddNumbers);


// TWO
// use a for loop to return an array full of objects.
//ex: var numberObjects = [ { count: 1 }, { count: 2 }];
var oddNumObjects = [];

for (var i = 0; i < numbers.length; i++) {
  oddNumObjects.push( { count: numbers[i] } )
};

// console.log(oddNumObjects);

// use map to achieve the same goal.
var mappedNumberObjects = numbers.map(function(item){
  var objItem = { count: item }
  return objItem
});

// console.log(mappedNumberObjects);

// ------------------------
// FILTER EXAMPLES
// ------------------------

// ONE

// Use a for loop to return an arry of numbers less than 4
var numsLessThanFour = [];

for (var i = 0; i < numbers.length; i++) {
  if(numbers[i] < 4) {
    numsLessThanFour.push(numbers[i])
  }
}

// console.log(numsLessThanFour)


// Use Filter to achieve the same goal.
var filteredNumbersBelowFour = numbers.filter(function(num){
  // RETURN ITEMS WHERE CONDITION IS TRUE
  return num < 4
});

// console.log(filteredNumbersBelowFour);


// TWO
// Use Filter to return an Array full of EVEN numbers
var filteredEvenNumbers = numbers.filter(function(item){
  return item % 2 === 0;
});

// console.log(filteredEvenNumbers);


// THREE
// Use map and filter together to return number objects greater than 5;
// 1) Filter Array to have numbers only greater than 5
// 2) Then we will chain the map method right onto it.
var filteredNumbersGreaterThanFive = numbers.filter(function(num){
  return num > 5;
}).map(function(num){
  return {count: num}
});

//console.log(filteredNumbersGreaterThanFive)

// ------------------------
// ADDITIONAL EXAMPLES
// ------------------------

var names = ["David Bowie", "John Lennon", "Jimi Hendirx", "Paul McCartney", "Kurt Cobain"];

// map the names to objects
// ex {name: "David Bowie"}
var mappedNames = names.map(function(item){
  return {object: item};
});

//console.log("Obejct Names",mappedNames);

// map just the first names
var firstName = names.map(function(item){
  return item.split(' ').slice(0, -1).join(' ');
})

console.log("First names only",firstName);

// map just the first names
// ex: ["David", "John", "Jimi"]

// filter to return names that begin with J
// ex: ["John Lennon", "Jimi Hendrix"]

// use map and filter together to return names that begin with J.
// ex: ["John", "Jimi"]

var shapes = [
  { name: "Square", color: "Green", sides: 4 },
  { name: "Triangle", color: "Green", sides: 3 },
  { name: "Rectangle", color: "Red", sides: 4 },
  { name: "Pentagon", color: "Green", sides: 5 },
  { name: "Right Triangle", color: "Red", sides: 3 },
];

// return an array of just shape names

// return an array of Green shapes

// return an array of shapes with less then 4 sides





// ------------------------
// FUTURE TOPICS
// ------------------------

// https://www.w3schools.com/jsref/jsref_obj_array.asp

// find
// reduce
// sort
