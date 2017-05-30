" use strict ";

var display = document.getElementById("display");


class Deck {

  constructor() {
    this.deck = [];
  }
  getFirstCard() {
    return this.deck[0].cardDisplay();
  }
  createDeck () {
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    for (var j = 0; j < suits.length; j++) {
        for (var i = 0; i < values.length; i++) {
          var card = new Card(values[i], suits[j]);
          this.deck.push(card);
        }
      }
      display.innerHTML = this.getFirstCard();
    }
}

function showDeck(deck) {
  var visibleCards = [];
  for (var i = 0; i < deck.length; i++) {
    visibleCards.push(deck[i].cardDisplay());
  }
  display.innerHTML =  visibleCards;
}

function shuffleDeck(deck) {

}
var testDeck = new Deck();
testDeck.createDeck();
//var visCards = showDeck(testDeck.deck);



//var str = visCards;


//display.innerHTML testDeck.deck();
