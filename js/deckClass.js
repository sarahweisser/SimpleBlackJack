" use strict ";

var display = document.getElementById("display");


class Deck {

  constructor() {
    this.deck = [];
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
    }
  showDeck() {
    for (var i = 0; i < this.deck.length; i++) {
      this.deck[i].setCardValue();
      display.innerHTML += this.deck[i].getCardValue() + "<br/>";
    }
  }

  shuffleDeck() {
    return this.deck.reverse();
  }
}


var testDeck = new Deck();
testDeck.createDeck();

//var visCards = showDeck(testDeck.deck);



//var str = visCards;


//display.innerHTML testDeck.deck();
