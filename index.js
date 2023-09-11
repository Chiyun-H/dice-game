
//第一個骰子
var randomNumber1=Math.floor(Math.random(randomNumber1)*6)+1; //*6取正整數再加1，才不會有出現0的機率
var randomSrc1="./images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", randomSrc1) //可以丟進console中檢查選到什麼東西


//第二個骰子
var randomNumber2=Math.floor(Math.random(randomNumber2)*6)+1;
var randomSrc2="./images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src", randomSrc2)//可以丟進console中檢查選到什麼東西



//比大小，顯示哪個player贏

if (randomSrc1 > randomSrc2){
    document.querySelector("h1").innerHTML=("🚩Player 1 Win!") //set property的時候記得加＝等號

} else if(randomSrc1 < randomSrc2) {
    document.querySelector("h1").innerHTML=("Player 2 Win!🚩")
} else {
    document.querySelector("h1").innerHTML=("Draw!")
}
