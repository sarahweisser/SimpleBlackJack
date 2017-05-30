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
