let arrayColors = ["#4b5bdc", "#0cd36d", "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977", "#f697c1", "#ba96ce", "#679c9d","#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" , "#f205e6" ,"#1c0365"];
// you can use an array rgba colors or hex colors


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}


addColors()

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint");
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor);
		divColor.addEventListener("mousedown",draw);
		divColor.addEventListener("mousemove",continueDrawing);
		divColor.addEventListener("mouseup",stop);
	}

}

addGrid()

let colorPicked;
let isDrawing=false;

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked);

}
function draw(){
	 isDrawing=true;
}
function continueDrawing(evt){
	if(isDrawing==true){
	 evt.target.style.backgroundColor=colorPicked;
	}
}
function mouseup(){
    if(isDrawing==true){

    }
    isDrawing=false;
}

let clearBtn=document.getElementById("clearbtn");
clearBtn.addEventListener("click",clearGrid);

function clearGrid(){
let gridPaintSection = document.getElementById("gridPaint");
let grid=gridPaintSection.childNodes;
for(let g of grid){
     g.style.backgroundColor="white";
  }
}