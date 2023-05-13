
//dice 1


var randomNumber = Math.floor(Math.random()*6 )+ 1;
var randomImg = "dice" + randomNumber +".png";
var imgSource = "images/" + randomImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource);

//dice 2 

var randomNumber1 = Math.floor(Math.random()*6 )+ 1;
var randomImg1 = "dice" + randomNumber1 +".png";
var imgSource1 = "images/" + randomImg1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSource1);

if(randomNumber > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins HURRRAAAYYYYYY✨✨✨✨";
}
else if(randomNumber < randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins HURRRRAAAAAYYYYYY🧨🧨🧨🧨"

}
else
{
document.querySelector( "h1").innerHTML = "DRAWWWWWWWW 🎃🎃🎃🎃"
}
