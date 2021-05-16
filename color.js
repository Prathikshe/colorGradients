var code = document.querySelector("h3");
var TtoB = document.querySelector(".TtoB");
var LtoR = document.querySelector(".LtoR");
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
var more = document.querySelector(".diogR");

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

function visibleTopDown(){
	T.style.display = "block";
	D.style.display = "block";
	}
function visibleSide(){LR.style.display = "block";}

function invisibleTopDown(){
	T.style.display = "none";
	D.style.display = "none";
	}
function invisibleSide(){LR.style.display = "none";}

function apply(){
colorT.addEventListener("input",backgroundcolorB);
colorL.addEventListener("input",backgroundColorR);
colorR.addEventListener("input",backgroundColorR);
colorB.addEventListener("input",backgroundcolorB);	
}

more.addEventListener("click",function(){
	window.location.href = "dio.html";
});

TtoB.addEventListener("click",function(){
body.style.background = "linear-gradient(to bottom , #0BE000, #FBFE00)";
css();
invisibleSide();
visibleTopDown();	
});

LtoR.addEventListener("click",function(){
body.style.background = "linear-gradient(to right, #0BE000, #FFFF00)";
css();
visibleSide();
invisibleTopDown();
});
apply();