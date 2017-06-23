/*
 * EXERCISE: Duplicate Danger
 *
 * Hopefully you're feeling more comfortable with functions! We're going to
 * re-introduce some of the methods we introduced last week, albiet now running
 * them locally via Node.
 *
 * Below you'll note an array of numbers containing large amounts of duplicates.
 * Your goal is to use "forEach", "push", and "indexOf" to remove all
 * duplicates such that the array only contains a single entry of each number.
 * Go ahead and (in your terminal or command prompt) test the program by
 * running:
 *
 *    node main.js
 *
 * Note that your console won't print out all the numbers in the array, there's
 * too many!
 *
 * Begin by calling the "forEach" method upon our array. Remember, the "forEach"
 * method takes a function as it's argument (and that this function takes two
 * arguments, the item being iterated over and its index, you'll need both):
 *
 *    array.forEach(function(number,index){
 *      ...code in here...
 *    })
 *
 * Go ahead remove the initial console log statment provided to you, add this
 * below, then log both the number and it's index to console inside the
 * "forEach" method. Once done, run your program again using:
 *
 *    node main.js
 *
 * via either terminal or command prompt. This time, all 395 numbers in the
 * array should log to your console!
 *
 * Now for a key piece of insight. The "indexOf" method introduced last week
 * only returns the first location of in an array at which the item passed to
 * "indexOf" (as its argument) occurs. Then, if we find an number at an index
 * that is not the first index at which it occurs, that number is a duplicate!
 * Excellent! Let's transfer this insight in our code, using an if statement
 * whose conditional checks if the index of a given number is equal to the
 * the first index at which it occurs (found via the "indexOf" method).
 *
 * First, remove the console log statement you added previously. Let's think
 * how we can build up this conditional, starting by just adding a basic if
 * statement inside our call to "forEach":
 *
 *    array.forEach(function(number,index){
 *      if(){
 *
 *      }
 *    });
 *
 * We haven't had much practice with "indexOf", so let's go slowly, starting
 * with what we ought call the method on. Given that "indexOf" is an array-type
 * method, it makes sens to call it on our array, but then would should we pass
 * as its argument? Think about what we're looking for the index of, a given
 * number right? Then it would make sense to pass our "forEach" function's
 * "number" argument as the "indexOf" method's argument! Fantastic! Go ahead and
 * add this call inside the conditional of your if statement:
 *
 *    array.forEach(function(number,index){
 *      if(array.indexOf(number)...){
 *
 *      }
 *    });
 *
 * Obviously this isn't going to work though, we need to check if something is
 * true or not for our conditional to work! Recall our insight, that if the
 * index of a given number iterated over is not equal the index returned by
 * our "indexOf" method, that number is a duplicate! Then likewise, if the index
 * of a number is *equal* to the index returned by our "indexOf" method, that
 * number is the first occurence of that number (and thus not a duplicate)!
 * Then, in your condtional, check if the index of the current element being
 * iterated over (recall that this is just the second argument of our "forEach"
 * method's function) is equal to our call to "indexOf":
 *
 *    array.forEach(function(number,index){
 *      if(array.indexOf(number) === index){
 *
 *      }
 *    });
 *
 * Then all that remains is, inside the conditional, to push any number that
 * meets this condition to our "newArray" variable:
 *
 *    array.forEach(function(number,index){
 *      if(array.indexOf(number) === index){
 *        newArray.push(number);
 *      }
 *    });
 *
 * Finally, below and outside your call to "forEach", add a console log statment
 * logging your now-filled "newArray" to console, then run the program via
 * terminal/command prompt with:
 *
 *    node main.js
 *
 * If an array of *only* ten numbers shows, you've completed this challenge!
 */

 var array = [1,7,7,2,9,0,6,4,3,4,4,4,8,1,2,3,6,4,0,9,8,7,1,2,1,5,4,3,3,7,2,6,4,
              0,0,8,0,1,2,5,4,3,7,8,9,9,3,2,5,4,1,8,0,9,2,3,3,4,7,1,0,9,9,3,9,2,
              4,3,2,8,5,5,4,2,9,0,9,7,7,2,8,1,2,8,4,6,6,2,0,1,2,3,8,7,2,9,6,6,0,
              4,6,6,3,8,9,7,6,1,9,1,2,2,3,2,0,9,9,8,1,6,2,3,4,5,7,8,8,1,2,0,9,8,
              6,5,4,5,6,9,1,2,0,8,7,2,5,2,5,6,4,5,3,3,8,3,3,8,9,1,2,3,6,6,0,9,9,
              6,5,5,3,2,9,0,8,8,7,0,1,2,2,2,3,6,5,9,1,1,2,2,9,8,8,7,3,4,0,9,8,6,
              1,2,3,4,4,5,5,9,9,9,6,7,6,2,3,4,2,2,1,0,9,6,4,7,4,7,4,3,3,4,7,8,5,
              9,7,7,6,4,3,3,4,2,1,1,9,8,8,6,5,4,0,0,2,2,3,4,8,7,9,9,4,3,2,7,6,9,
              1,1,1,2,4,4,4,3,2,6,7,6,6,6,4,4,3,2,7,2,7,7,8,5,5,9,9,1,0,0,0,9,9,
              9,9,9,2,9,3,4,2,9,3,2,2,0,0,1,1,2,3,1,1,2,3,4,4,2,9,4,4,9,9,8,7,8,
              9,9,0,0,0,0,0,1,1,2,3,2,2,2,3,4,4,6,7,6,6,7,7,5,4,5,5,4,3,2,5,6,9,
              1,1,2,6,6,5,4,8,9,1,2,4,2,0,9,9,1,6,6,7,6,6,6,5,2,2,3,3,4,4,1,0,9,
              9,0,0,2,2,0,2,3,3,2,2,4,4,5,1,1,5,4,5,6,2,6,6,7,8,1,9,0,1,1,2,3,4,
              2,3,2,2,3,9,4,0,1,0,9,9,0,0,0,2,3,4,5,6,5,7,8,5,6,7,8,2,1,5,4,3,2,
              3,2,2,1,2,8,8,8,7,6,5,6,6,5,2,4,3,2,2,4,4,6,7,7,7,8,8,1,8,1,9,2,3]

// This is the array to which you will push non-duplicate numbers
var newArray = [];
array.forEach(function(number,index){
    
  })





console.log(array);
