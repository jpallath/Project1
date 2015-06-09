var Game = Game || {};
var locations = {
  "ACL" : "0px 0px",
  "KCL" : "-190px 0px",
  "QCL" : "-380px 0px",
  "JCL" : "-570px 0px",
  "TENCL" : "-760px 0px",
  "NINECL" : "-950px 0px",
  "EIGHTCL" : "-1140px 0px",
  "SEVENCL" : "-1330px 0px",
  "SIXCL" : "-1520px 0px",
  "FIVECL" : "-1710px 0px",
  "FOURCL" : "-1900px 0px",
  "THREECL" : "0px -270px",
  "TWOCL" : "-190px -270px",
  "ASP" : "-380px -270px",
  "KSP" : "-570px -270px",
  "QSP" : "-760px -270px",
  "JSP" : "-950px -270px",
  "TENSP" : "-1140px -270px",
  "NINESP" : "-1330px -270px",
  "EIGHTSP" : "-1520px -270px",
  "SEVENSP" : "-1710px -270px",
  "SIXSP" : "-1900px -270px",
  "FIVESP" : "0px -540px",
  "FOURSP" : "-190px -540px",
  "THREESP" : "-380px -540px",
  "TWOSP" : "-570px -540px",
  "ADI" : "-760px -540px",
  "KDI" : "-950px -540px",
  "QDI" : "-1140px -540px",
  "JDI" : "-1330px -540px",
  "TENDI" : "-1520px -540px",
  "NINEDI" : "-1710px -540px",
  "EIGHTDI" : "-1900px -540px",
  "SEVENDI" : "0px -810px",
  "SIXDI" : "-190px -810px",
  "FIVEDI" : "-380px -810px",
  "FOURDI" : "-570px -810px",
  "THREEDI" : "-760px -810px",
  "TWODI" : "-950px -810px",
  "AHE" : "-1140px -810px",
  "KHE" : "-1330px -810px",
  "QHE" : "-1520px -810px",
  "JHE" : "-1710px -810px",
  "TENHE" : "-1900px -810px",
  "NINEHE" : "0px -1080px",
  "EIGHTHE" : "-190px -1080px",
  "SEVENHE" : "-380px -1080px",
  "SIXHE" : "-570px -1080px",
  "FIVEHE " : "-760px -1080px",
  "FOURHE" : "-950px -1080px",
  "THREEHE" : "-1140px -1080px",
  "TWOHE" : "-1330px -1080px",
}
var $image = $("img");
$image.on("click", function (){
  Player.bet()
});
var $cash = $(".cash")
$cash.text(Player.money)
var arrayOfFirstCards = [];
var positionsOfFirstCards=locations.arrayOfFirstCards
var $firstCards = $("#player .card-one");
var $secondCards = $("#player .card-two");
var $dealersCard = $("#dealer .card-one");
var $PlayerLocation = $("#player")
var $DealerLocation = $("#dealer")
var lefty = 362;
var righty =375;
var convertCodeToCards = function(x){
  var RANKS = ["2","3","4","5",'6','7','8','9',"10"]
  var valuefinder = x.split(" ")[0]
  var rank = RANKS.indexOf(valuefinder)
  valuefinder=rank+2;
  if (valuefinder == 2){
    x=x.replace("2","TWO")}
  else if (valuefinder == 3){
    x=x.replace("3","THREE")}
  else if (valuefinder == 4){
    x=x.replace("4","FOUR")}
  else if (valuefinder == 5){
    x=x.replace("5","FIVE")}
  else if (valuefinder == 6){
    x=x.replace("6","SIX")}
  else if (valuefinder == 7){
    x=x.replace("7","SEVEN")}
  else if (valuefinder == 8){
    x=x.replace("8","EIGHT")}
  else if (valuefinder == 9){
    x=x.replace("9","NINE")}
  else if (valuefinder == 10){
    x=x.replace("10","TEN")}
  else if (valuefinder == "J" ||valuefinder == "Q" ||valuefinder == "K"){
  }
  x = x.replace(/\s+/g, '')
  positionsOfFirstCards=locations[x];
}

var bust = function(){
  console.log("loss")
}
