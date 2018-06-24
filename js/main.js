console.log("Up and running!");
// var cards = ["queen", "queen", "king", "king"]; 


var cards = [
{
rank: 'queen',
suit: 'hearts',
cardimage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardimage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardimage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardimage: 'images/king-of-diamonds.png'
}
];


var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		console.log("You found a match");
	} else {
		console.log("Sorry, try again");
	}
}

//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);

 function flipCard(cardId) { 
     
    console.log("User flipped " + cards[cardId].rank)
    cardsInPlay.push(cards[cardId].rank)
    console.log(cards[cardId].cardimage)
    console.log(cards[cardId].suit)
	cardsInPlay.length;
	if (cardsInPlay.length === 2)
	{
	checkForMatch();
	}
}

flipCard(0);
flipCard(2);
