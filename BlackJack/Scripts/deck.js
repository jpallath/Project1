var Game = Game || {};
var deck = {
  hand : [],
  cards : ["A SP","2 SP","3 SP" ,"4 SP","5 SP","6 SP","7 SP","8 SP","9 SP","10 SP","J SP","Q SP","K SP",
  "A CL","2 CL","3 CL" ,"4 CL","5 CL","6 CL","7 CL","8 CL","9 CL","10 CL","J CL","Q CL","K CL",
  "A HE","2 HE","3 HE" ,"4 HE","5 HE","6 HE","7 HE","8 HE","9 HE","10 HE","J HE","Q HE","K HE",
  "A DI","2 DI","3 DI" ,"4 DI","5 DI","6 DI","7 DI","8 DI","9 DI","10 DI","J DI","Q DI","K DI",],
  deal : function(){
    x =  Math.floor((Math.random() * deck.cards.length));
    x = deck.cards.splice(x, 1);
    return x;
    },
  hit : function(){
    x =  Math.floor((Math.random() * deck.cards.length));
    x = deck.cards.splice(x, 1);
    return x;
    },
  accessValue : function(that){
    console.log(that)
    var total = 0;
    var logged = 0;
    var value = 0;

    for (var i = 0; i<that.length; i++){
      var accessor=that[i];
      console.log(i)
      var RANKS = ["2","3","4","5","6","7","8","9"];
      var rank = accessor.split(" ")[0];

      if (rank == "A"){
        logged=logged + 1;
        total=total+11;
        // console.log("ace was played")
      } else {
        var ranked = RANKS.indexOf(rank)+2;
        if (ranked===1){
          // console.log("greater than 9")
          value = ranked + 10;
          total=total+10
        } else {
          // console.log("ranked")
          total=total+ranked
          // console.log(total)
        }
      }
    }
  // console.log ("returned total",total)
  if (total>21){
    total=total-(logged*10)
    return total
  }
  return total
  },
    //Currently this is a player focused victory
    // thatTotal=total;
    // if (total==21){
    // } else if (total > 21) {
    //     if(logged = 1){
    //       console.log("There was an ace")
    //       total -= 10;
    //     }
    //     else if(logged > 1){
    //       total -= logged * 10
    //     }
    // }
checkWin : function(x){
  // console.log("The value of x when the checkWin function ran",x)
  if (x>21){
    return false
    // console.log("This happens when we have a value of greater than 21")
  } else if (x==21) {
    return true
    // (console.log("This happens when 21 is hit"))
  } else if (x<21) {
    return true
    // console.log("Every other situation")
  } else {
    // console.log("nothing was registered")
  }
},
countUpToWinner : function(){
  if (Player.handTotal>Dealer.handTotal){
    $image.attr("src","BlackJack/Images/Custom-Balloon-design-tool.jpg")
    Player.money=Player.money+(2*putIn)
    $cash.text(Player.money)
  } else if (Player.handTotal<Dealer.handTotal){
    $image.attr("src","BlackJack/Images/sad-kid.jpg")
  } else if (Player.handTotal==Dealer.handTotal){
    $image.attr("src","BlackJack/Images/dog.jpg")
    $body=$("body");
    $body.css("background-image","/Users/JPallath/src/Project1/BlackJack/Images/dog.jpg")
  }
}
    }
