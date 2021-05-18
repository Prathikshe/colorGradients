var code = document.querySelector("h3");
var diogR = document.querySelector(".diogR");
var diogL = document.querySelector(".diogL");
var colorT = document.querySelector(".colorT");
var colorL = document.querySelector(".colorL");
var colorR = document.querySelector(".colorR");
var body = document.getElementById("gradient");
var L = document.getElementById("Left");
var R = document.getElementById("Right");
var back = document.querySelector(".TtoB");
var more = document.querySelector(".LtoR");

function first(){
	if(code.textContent==="Hear is Your code."){
		alert("Pleace select the Diognal directions you wanted.");
	}
}

function css(){
	code.textContent = body.style.background + ";";
} 

function backgroundcolorBR(){
	first();
body.style.background = "linear-gradient(to bottom right,"+ colorT.value +" ,"+colorR.value +")";	
css();
}

function backgroundcolorBL(){
	first();
body.style.background = "linear-gradient(to bottom left,"+ colorT.value +" ,"+colorL.value +")";
css();
}

back.addEventListener("click",function(){
	window.location.href = "index.html";
});

diogR.addEventListener("click",function(){
body.style.background = "linear-gradient(to bottom right, #0BE000, #FFFF00)";
css();
L. disabled = true;
R. disabled = false;
colorR.addEventListener("input",backgroundcolorBR);
colorT.addEventListener("input",backgroundcolorBR);
});

diogL.addEventListener("click",function(){
body.style.background = "linear-gradient(to bottom left, #0BE000, #FFFF00)";
css();
R. disabled = true;
L. disabled = false;
colorT.addEventListener("input",backgroundcolorBL);
colorL.addEventListener("input",backgroundcolorBL);
});

more.addEventListener("click",function(){
	window.location.href = "multipleColor.html"
});

colorT.addEventListener("click",first);
colorL.addEventListener("click",first);
colorR.addEventListener("click",first);
