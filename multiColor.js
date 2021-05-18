var code = document.querySelector("h3");
var body = document.getElementById("gradient");
var back = document.querySelector(".TtoB");
var Clur = document.getElementById("Colourselect");
var wheel = document.querySelector(".wheel");
var degree = document.querySelector(".value");
var handle = document.querySelector(".handle");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var color7 = document.querySelector(".color7");
var color8 = document.querySelector(".color8");
var color9 = document.querySelector(".color9");
var color10 = document.querySelector(".color10");
var Dtext=0;
var num="2";
var c1 = "#018293";
var c2 = "#E61414";
var c3 = "#FFFF00";
var c4 = "#00FF00";
var c5 = "#0000FF";
var c6 = "#4B0082";
var c7 = "#FFEFFF";
var c8 = "#0BE0FF";
var c9 = "#0FF000";
var c10 = "#0000FF";

back.addEventListener("click",function(){
	window.location.href = "dio.html";
});

function css(){
	code.textContent = body.style.background + ";";
} 

handle.addEventListener("mousemove",function(){
Dtext = degree.innerText;
Dtext = Dtext.slice(0, -1);
num = Clur.value;
console.log(num);
cp(num);
timer();
});

function timer(){
var startTime = new Date().getTime();
var intervalId = window.setInterval(function(){
Dtext = degree.innerText;
Dtext = Dtext.slice(0, -1);
num = Clur.value;
cp(num);
if(new Date().getTime() - startTime > 10000){
        clearInterval(intervalId);
        return;
    }
}, 1000);	
}

Clur.addEventListener("change",function(){
num = Clur.value;
timer();
var dnum = 10-(10-num);
	for(i=3;i<=num;i++){
		document.querySelector(".color"+i).disabled = false;
	}
	for(i=dnum+1;i<=10;i++){
	document.querySelector(".color"+i).disabled = true;
	}
});

function cp(n){
if(n==="2"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c2 +" ,"+ c1 +")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c2 +" ,"+ c1 +")";
}else if(n==="3"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
}else if(n==="4"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1+")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1+")";	
}else if(n==="5"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1+")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1+")";	
}else if(n==="6"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+c1 +")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+c1 +")";	
}else if(n==="7"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
}else if(n==="8"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c8 +" ,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c8 +" ,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
}else if(n==="9"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c9 +" ,"+ c8 +" ,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c9 +" ,"+ c8 +" ,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
}else if(n==="10"){
body.style.background = "linear-gradient("+ Dtext +"deg,"+ c10 +" ,"+ c9 +" ,"+ c8 +" ,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
wheel.style.background = "linear-gradient("+ Dtext +"deg,"+ c10 +" ,"+ c9 +" ,"+ c8 +" ,"+ c7 +" ,"+ c6 +" ,"+ c5 +" ,"+ c4 +" ,"+ c3 +" ,"+ c2 +" ,"+ c1 +")";	
}
css();
}

color1.addEventListener("input",function(){	
c1 = color1.value;
cp(num);
timer();
});
color2.addEventListener("input",function(){
c2 = color2.value;
cp(num);
timer();	
});
color3.addEventListener("input",function(){
c3 = color3.value;	
cp(num);
timer();
});
color4.addEventListener("input",function(){
c4 = color4.value;
cp(num);
timer();	
});
color5.addEventListener("input",function(){
c5 = color5.value;
cp(num);
timer();	
});
color6.addEventListener("input",function(){
	c6 = color6.value;
	cp(num);
timer();
});
color7.addEventListener("input",function(){
	c7 = color7.value;
	cp(num);
timer();
});
color8.addEventListener("input",function(){
	c8 = color8.value;
	cp(num);
timer();
});
color9.addEventListener("input",function(){
	c9 = color9.value;
	cp(num);
timer();
});
color10.addEventListener("input",function(){
	c10 = color10.value;
	cp(num);
timer();
});