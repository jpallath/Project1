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
    $dealersCard.addClass("active")
    convertCodeToCards(x[0]);
    $dealersCard.css("background-position", positionsOfFirstCards);
    setTimeout(function(){Dealer.keepPlaying()},1000)
  },
  play : function (){
    // this line will reveal the dealer's hidden card which is actually just
    // dealt by the computer now.  I will be updating values eventually in the
    // code as of now the computer just keeps playing until he has four cards
    deck.deal()
    // console.log(Dealer.hand)
    this.hand.push(x[0])
    $dealerSecondCard=$("#dealer .card-two")
    $dealerSecondCard.addClass("active")
    convertCodeToCards(x[0]);
    $dealerSecondCard.css("background-position", positionsOfFirstCards);
    that = Dealer.hand
    console.log(that)
    Dealer.handTotal=deck.accessValue(that)
    check=deck.checkWin(Dealer.handTotal)
    if (check==false){
      Dealer.bust()
    }
    while (Dealer.handTotal<17){
      console.log(Dealer.handTotal)
      deck.deal()
      this.hand.push(x[0])
      convertCodeToCards(x[0])
      $newDCard=$("<div>")
      $DealerLocation.append($newDCard)
      Dealer.handTotal=deck.accessValue(that)
      $newDCard.css("background-position", positionsOfFirstCards)
               .css("width","180px")
               .css("height","250px")
               .addClass("active")
               .css("position","absolute")
               .css("right",righty)
     righty=righty+183;
     check = deck.checkWin(Dealer.handTotal)
     if (check==false){
       Dealer.bust()
       return Dealer.handTotal
     }
   } deck.countUpToWinner();
 },
 bust : function(){
   console.log("House BUSTED!")
   return
 }
}
