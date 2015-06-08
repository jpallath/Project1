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
    // This function should be able to tell the user what the total of his cards are and if the computer/user should keep going
    var total = 0;
    var logged = 0;
    console.log("this is that:", that)
    console.log(total)
    for (var i = 0; i<that.length; i++){

      console.log("this is running")

      var accessor = that[i]
      var RANKS = ["2","3","4","5",'6','7','8','9']
      var rank = accessor.split(" ")[0];

      if (rank == "A"){
        total = total + 11
        logged = 1;
      }

      var value = RANKS.indexOf(rank)+2;
      if (value===1){
         value = 10
         }
      total = total + value;
      console.log(total)
    }
    //Currently this is a player focused victory
    thatTotal=total;
    console.log(thatTotal)
    if (total===21){
    } else if (total > 21) {
        if(logged = 1){
          total -= 10;
          console.log(this.total)
        }
        else if(logged > 1){
          total -= logged * 10
          console.log(total)
        }
    }
    return total
  },
  cardMatch : function(x){

  },
    }
