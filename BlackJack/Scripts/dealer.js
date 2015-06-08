var Game = Game || {}
var Dealer = {
  handTotal : 0,
  hand : [],
  keepPlaying : function(){
    answer = prompt("Would you like to hit, stand, or surrender?")
    if (answer === "hit"){
        Player.hit()
  } else if (answer === "stand"){
        Dealer.play()
  } else if (answer === "surrender"){
        alert("oh")
  }},
  dealt : function(){
    deck.deal()
    this.hand.push(x[0]);
    this.keepPlaying()
  },
  play : function (){
    // this line will reveal the dealer's hidden card which is actually just
    // dealt by the computer now.  I will be updating values eventually in the
    // code as of now the computer just keeps playing until he has four cards
    deck.deal()
    this.hand.push(x[0])
    that = Dealer.hand
    console.log("This is the dealer's hand", that)
    deck.accessValue(that)
    console.log("This is that when we go back into dealer.play", thatTotal)
    if (thatTotal < 17){
      while (thatTotal<17){
        deck.deal()
        this.hand.push(x[0])
        that = this.hand
        deck.accessValue(that)
      }
      console.log(Player.hand, Dealer.hand)
      deck.findWinner();

    }
  }
}
