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

function deckMap(deckIn){
  for(var i=0; i<deckIn.length; i+=1){

  var card = '';

  if(deckIn[i] <=13){
    deckIn[i] = deckIn[i] + 'H';

  }
  else if(deckIn[i] <=26){
            //condition         if      true           or  false
    deckIn[i] = (deckIn [i]%13 !== 0) ? (deckIn[i]%13) + 'S' : '13S';

  }
  else if(deckIn[i] <= 39){
    deckIn[i] = (deckIn [i]%13 !== 0) ? (deckIn[i]%13) + 'C' : '13C';

  }
  else if(deckIn[i] <= 52){
    deckIn[i] = (deckIn [i]%13 !== 0) ? (deckIn[i]%13) + 'D' : '13D';

  }
  else{
    console.log("Too many cards!");
  }

  }
  return deckIn;
}


var deck = generateDeck();

deckMap(deck);
console.log("Mapped deck:", deck);

function shuffle(deckIn){
  for(var j=0; j<deckIn.length; j+=1){
    var currentIndex = deckIn.indexOf(deckIn[j]);
    var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random() * deckIn.length)]);

    var tempCard = deckIn[currentIndex];
    deckIn[currentIndex] = deckIn[swapIndex];
    deckIn[swapIndex] = tempCard;
  }

// console.log("DECK LENGTH", deckIn.length);
  return deckIn;
}
deck = shuffle(deck);

var checkArray = [];
deck.forEach(function(card,index){
  if(deck.indexOf(card) === index){
    checkArray.push(card);
  }
});

// console.log("CHECK ARRAY LENGTH",checkArray.length);
