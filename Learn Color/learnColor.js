var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 255, 255)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(0, 0, 0)"
];
var names=[
"red",
"yellow",
"white",
"light blue",
"steel blue",
"black"
];
var pickedColor;
var squares=document.querySelector(".square");
var showName=document.querySelector(".showName");
var nxtbtn=document.querySelector("#next");
var nextButton=document.querySelector(".nextButton");


function next(){
	//the selected color
	pickedColor=pickColor();
	//display the selected color
	learnColor();

}

function learnColor(){
	var newColor=colors[pickedColor];
	var newColorName=names[pickedColor];
	squares.style.backgroundColor=newColor;	
	showName.textContent=newColorName;
	showName.style.color=newColor;
}

nextButton.addEventListener("click",function(){
	next();
})

function pickColor(){
	//choose a number from array
	var random = (Math.floor(Math.random() * colors.length));
	return random;
}




