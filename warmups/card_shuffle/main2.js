/*
* EXERCISE 2: SHUFFLING
*
*/

//console.log("hello world");


function generateDeck(){

  var tempDeck = [];

  for(var i=1; i<=52; i+=1){
    tempDeck.push(i);
  }
  return tempDeck;
}
var deck = generateDeck();

function shuffle(deckIn){
  for(var j=0; j<deckIn.length; j+=1){
    var currentIndex = deckIn.indexOf(deckIn[j]);
    var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random() * deckIn.length)]);

    var tempCard = deckIn[currentIndex];
    deckIn[currentIndex] = deckIn[swapIndex];
    deckIn[swapIndex] = tempCard;
  }

console.log("DECK LENGTH", deckIn.length);
  return deckIn;
}
deck = shuffle(deck);

var checkArray = [];
deck.forEach(fucntion(card,index)){
  if(deck.indexOf(card) === index){
    checkArray.push(card);
  }
});

console.log("CHECK ARRAY LENGTH",checkArray.length);
