var Game = Game || {};

var $image = $("img");
$image.on("click", function (){
  Player.bet()
});

var $cash = $(".cash")
$cash.text(Player.money)

var $card
