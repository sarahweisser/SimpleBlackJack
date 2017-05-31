" use strict ";

var display = document.getElementById("display");


class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.cardValue = 0;
  }
  setCardValue() {
    if (this.value == "A") {
      this.cardValue = 1;
    }
    else if ((this.value == "K") || (this.value == "Q") || (this.value == "J")) {
      this.cardValue = 10;
    }
    else {
      this.cardValue = Number(this.value);
    }
  }
  getCardValue() {
    return this.cardValue;
  }
  cardDisplay() {
    return this.value + " of " + this.suit;
  }

}
