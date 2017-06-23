
// function counter(){
//   for (var i=1; i<=12; i+=1){
//     if(i%2 == 0){
//         console.log(i,"is evenly divisible by 2!");
//     }
//   }
// }
//
// counter();

function roll(){
  return {d1:Math.floor(Math.random() * 6 + 1),
          d2: Math.floor(Math.random() * 6 +1)};
}

function checker(){
  var newRoll = roll();
  if ((newRoll.d1 + newRoll.d2 ) === 7 || (newRoll.d1 + newRoll.d2 ) === 11){
    console.log("I win!!",newRoll.d1, newRoll.d2);
  }
  else{
    console.log("I didn't win!", newRoll.d1, newRoll.d2);
  }

}
checker();
