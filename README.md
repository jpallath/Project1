**Hi my name is Jerry Pallath and this is my BlackJack Project.**

##Introduction
It is *very* roughly made.  I inadvertently channeled the mind of a five year old who had a decent scissor and a variety of construction paper choices.  He sloppily put something together-- that is half baked -- if baked at all.

##Stuff I Did
The basic game of Blackjack has been implemented in this code.  I developed three objects: Player, Dealer, and Deck and made a fourth to implement all of the methods and functions within these objects (which was developed in the Game object)  The code still tends to jump around from one object to another instead of just being one seamless code.  

The code without the jquery bells and whistles starts its progression at the method of Player.bet-- where the player is asked what his initial bet out of $500 would be.  If the bet is under the maximum-- then the player can actually play.  The first method run after bet is Player.dealt which gives the player 2 cards and the next code will reveal one of the cards that the dealer would have.  

Unfortunately, I was not able to implement an insurance function at this point.  When the player gets his first two cards a checkToWin function is implemented and it is called throughout the game to check if the cards add up to 21 and if the player has won-- along with this we have an AccessValue method that will continually add up the sum of the cards in each player's hand (array).

##Implementing Graphics and Sprites

The graphics were a **b----**, none of them worked out correctly.  I used a sprite background to implement the cards and used positioning of the background to specify cards-- further refracting broke the positioning (or did nothing at all) and so I stopped trying to fix it.

The animations are not good, and break the images.

i put a dog in if you get a tie.
