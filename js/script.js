" use strict ";

var display = document.getElementById("display");


class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  cardDisplay() {
    return this.value + " of " + this.suit;
  }
}


class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck() {
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    for (var j = 0; j < suits.length; j++) {
      for (var i = 0; i < values.length; i++) {
        var card = new Card(values[i], suits[j]);
        this.deck.push(card);
      }
    }
    return this.deck;
  }



}

var testDeck = new Deck();
testDeck = testDeck.createDeck();


var str = testDeck;


display.innerHTML = str;
