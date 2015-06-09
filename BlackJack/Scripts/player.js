var Game = Game || {};

var Player = {
  money : 500.00,
  handTotal : 0,
  bet : function(){
    putIn = prompt("So how much money do you want to bet?")
    if (putIn <= this.money){
      // console.log("The Player put in this much:", putIn)
      Player.money=this.money-putIn;
      $cash.text(Player.money)
      this.dealt();
    } else {
      Player.bet()
    }
  },
  hand : [],
  dealt : function(){
    deck.deal()
    this.hand.push(x[0])
    $firstCards.addClass("active")
    convertCodeToCards(x[0]);
    $firstCards.css("background-position", positionsOfFirstCards);
    // console.log("This was the first card",x[0])
    deck.deal()
    this.hand.push(x[0])
    $secondCards.addClass("active")
    convertCodeToCards(x[0]);
    // console.log("this is the second card", x[0])
    $secondCards.css("background-position", positionsOfFirstCards);
    that = this.hand
    // console.log("This is the current hand",this.hand)
    var cardValues = deck.accessValue(that)
    // console.log(cardValues)
    check=deck.checkWin(cardValues)
    if (check==true){
    Dealer.dealt()
  } else {
    bust()
  }
  },
  hit: function(){
    deck.deal()
    this.hand.push(x[0])
    convertCodeToCards(x[0])
    $newPCard = $("<div>")
    $PlayerLocation.append($newPCard)
    $newPCard.css("background-position", positionsOfFirstCards)
             .css("width","180px")
             .css("height","250px")
             .addClass("active")
             .css("position","absolute")
             .css("left",lefty)
    that=this.hand
    // console.log(Player.hand)
    Player.handTotal = deck.accessValue(that)
    check=deck.checkWin(Player.handTotal)
    lefty=lefty+180
    if (check==true){
    console.log("this was true")
    Dealer.keepPlaying()
  } else {
    bust()
  }
  }
};
