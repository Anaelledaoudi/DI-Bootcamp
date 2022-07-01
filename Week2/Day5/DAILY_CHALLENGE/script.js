function lessBottle(bottle,num){
   console.log(`we have now ${num-bottle} bottles`)
}
function printSong(num){
	let bottle=2;
	do{
		console log("Take 1 down, pass it around");
		console.log(`we have now ${--num} bottle`);
	}
	while(num!=0){
		console.log(`Take ${bottle} down, pass them around`);
		lessBottle(bottle,num);
		bottle++;
		num--;
	}
}

let userNum=prompt("Please enter a number");
printSong(userNum);
