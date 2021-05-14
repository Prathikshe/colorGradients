var code = document.querySelector("h3");
var TtoB = document.querySelector(".TtoB");
var LtoR = document.querySelector(".LtoR");
var diogR = document.querySelector(".diogR");
var diogL = document.querySelector(".diogL");
var colorT = document.querySelector(".colorT");
var colorL = document.querySelector(".colorL");
var colorR = document.querySelector(".colorR");
var colorB = document.querySelector(".colorB");
var body = document.getElementById("gradient");
var LR = document.querySelector(".LR");
var T = document.getElementById("top");
var D = document.getElementById("down");
var L = document.getElementById("Left");
var R = document.getElementById("Right");

function css(){
	code.textContent = body.style.background + ";";
} 

function backgroundColorR(){
body.style.background = "linear-gradient(to right,"+ colorL.value +" ," + colorR.value +")";	
css();
}

function backgroundcolorB(){
body.style.background = "linear-gradient(to bottom,"+ colorT.value +" ,"+colorB.value +")";
css();
}

function backgroundcolorBR(){
body.style.background = "linear-gradient(to bottom right,"+ colorT.value +" ,"+colorR.value +")";	
css();
}

function backgroundcolorBL(){
body.style.background = "linear-gradient(to bottom left,"+ colorT.value +" ,"+colorL.value +")";
css();
}

function visibleTop(){T.style.display = "block";}
function visibleDown(){D.style.display = "block";}
function visibleSide(){LR.style.display = "block";}

function invisibleTop(){T.style.display = "none";}
function invisibleDown(){D.style.display = "none";}
function invisibleSide(){LR.style.display = "none";}

function diognalSet(){
visibleTop();
visibleSide();
invisibleDown();
}

function apply(){
colorT.addEventListener("input",backgroundcolorB);
colorL.addEventListener("input",backgroundColorR);
colorR.addEventListener("input",backgroundColorR);
colorB.addEventListener("input",backgroundcolorB);	
}


TtoB.addEventListener("click",function(){
body.style.background = "linear-gradient(to bottom , #0BE000, #FBFE00)";
invisibleSide();
visibleTop();
visibleDown();
R. disabled = false;
L. disabled = false;
apply();	
});

LtoR.addEventListener("click",function(){
body.style.background = "linear-gradient(to right, #0BE000, #FFFF00)";
visibleSide();
invisibleTop();
invisibleDown();
R. disabled = false;
L. disabled = false;
apply();
});

diogR.addEventListener("click",function(){
body.style.background = "linear-gradient(to bottom right, #0BE000, #FFFF00)";
diognalSet();
L. disabled = true;
R. disabled = false;
colorT.addEventListener("input",backgroundcolorBR);
colorR.addEventListener("input",backgroundcolorBR);
});

diogL.addEventListener("click",function(){
body.style.background = "linear-gradient(to bottom left, #0BE000, #FFFF00)";
diognalSet();
R. disabled = true;
L. disabled = false;
colorT.addEventListener("input",backgroundcolorBR);
colorL.addEventListener("input",backgroundcolorBR);
});
apply();