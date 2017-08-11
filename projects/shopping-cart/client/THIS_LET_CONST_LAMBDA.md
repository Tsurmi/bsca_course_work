//functions inputs, does something and then returns

//this: unless "this" gets set as a specific object it will
//return a global object. Their is no good reason to ever refrence
//the gobal object.
//How to not get "this" set to the global object
  //if you invoke a function as a method, js will set the object.


//lambda function. Whatever the value of 'this' is while never change
//Thats why when we do a "map" we use a lambda.


//Difference between using a lambda and a function//

class Foo {
  constructor() {
    this.valueToAdd = 5
    this.myArray = [1,2,3]
  }

  addValueToEach() {
    return this.myArray.map( val => val + this.valueToAdd )
  }
}

class Bar {
  constructor() {
    this.valueToAdd = 5
    this.myArray = [1,2,3]
  }

  addValueToEach() {
    const self = this
    return this.myArray.map( function (val) { val + self.valueToAdd } )
  }
}

function map(mappingFunction) {
  for(...) {
    mappingFunction(val, i)
  }
}

//var/const/let//

var aVar= 0

let aLet = 'Hi'

const aConst = {}

/////////////////////////////
const aConst = 'aConst'
console.log(aConst)

// This is a BLOCK: The curlies are declaring a BLOCK
{
  const aNewVar = 0
  console.log(aNewVar)
}
// The BLOCK allows us to create names, use them and then leave them.
// A BLOCK can look up but not down

//The only Difference between "let" and "const" is once you give "const" variable
//a value you can not change it. You can use the equals operator only one time
//when using a "const". Once you declare it, it is fixed
// When you need to change the variable you us "let"

//You should use "const" as a default unless you knowingly need to change the variable.
//A common place you would want to use "let" is when using a "for loop"

const arr = [1,2,3]
for (let i=0; i < arr.length; i++){

}


const isloaded = true // boolean
const count = 10 // number
const name = 'Fred' // string
const startDate = new Date() // object type

const submitForm = (event) => {} // do something // function

const user = {
  name: "Jim", // string
  isActive: true, // boolean
  favoriteColor: "blue" // string
}// object type

const colors = [
  'blue'
  'green'
  'red'
]
colors[1ls]
