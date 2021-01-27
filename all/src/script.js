//text box of newsLetter
var textBox = document.getElementById("email");
textBox.onclick = function(){textBox.setAttribute("value", "")};

//images sliding: 
var headline1 = document.getElementById("homeContent").getElementsByTagName("h1")[0];
var headline2 = document.getElementById("homeContent").getElementsByTagName("h2")[0];
var discount = document.getElementById("discountClick");
var arrowLeft = document.getElementById("button1");
var arrowRight = document.getElementById("button2");
var firstImg = document.getElementById("first");
var counter  = 0;
arrowLeft.style.color = " rgba(41, 39, 39, 0.664)";
function slide () {
    textAnimation();
    if(++counter>= 2)
    {
        counter = 0;
    }
    var result = counter * -100 ;
    firstImg.style.marginLeft = result + "%" ; 
}
function textAnimationStart (){
    headline1.setAttribute("style", "margin-left: -950px;");
    headline2.setAttribute("style", "display : none; margin-top : -80px;");
    discount.setAttribute("style", " margin-top : 300px;");
}
function textAnimationEnd() {
    headline1.setAttribute("style", "margin-left : 0px;");
    headline2.setAttribute("style", "display : block; margin-top : 10px;");
    discount.setAttribute("style", " margin-top : 20px;");

}
function textAnimation()
{
    textAnimationStart();
    setTimeout(textAnimationEnd, 1000);
}
setInterval(slide, 8000);

//click on slide button : 
arrowLeft.onclick = function()
{
   slide();
};
arrowRight.onclick = function()
{
   slide();
};

//the rotating button
var discount = document.getElementById("discountClick");
discount.onmouseover = function()
{
    discount.getElementsByTagName("i")[0].setAttribute("style", "animation : plus0 0.4s 1;");
};
discount.onmouseout = function()
{
    discount.getElementsByTagName("i")[0].setAttribute("style", "animation : plus90 0.4s 1;");
};
//arrows in slide : 

var home = document.getElementById("home");
home.onmouseover = function()
{
    arrowLeft.setAttribute("style", " display : block; margin-left : 0; animation: button1 0.5s 1;");
    arrowRight.setAttribute("style", " display : block; margin-left : 0;animation: button2 0.5s 1;");
};
home.onmouseout = function()
{
    arrowLeft.setAttribute("style", " display : none;");
    arrowRight.setAttribute("style", " display: none;");
    
};

