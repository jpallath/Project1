var Game = Game || {};

var Player = {
  money : 500,
  handTotal : 0,
  bet : function(){
    putIn = prompt("So how much money do you want to bet?")
    if (putIn <= this.money){
      this.dealt()
    } else {
      Player.bet()
    }
  },
  hand : [],
  dealt : function(){
    deck.deal()
    // console.log(x)
    this.hand.push(x[0])
    deck.deal()
    this.hand.push(x[0])
    that = this.hand
    deck.accessValue(that)
    Dealer.dealt()
  },
  hit: function(){
    deck.deal()
    this.hand.push(x[0])
    that=this.hand
    deck.accessValue(that)
    Dealer.keepPlaying()
  }
};
