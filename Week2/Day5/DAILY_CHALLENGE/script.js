function printSong(num){
	let bottle=2;
	console.log("Take 1 down, pass it around");
	console.log(`we have now ${num-=1} bottles`);
	while(num>=0){
		console.log(`Take ${bottle} down, pass them around`);
		 if(bottle>=num){
		console.log(`we have now 0 bottle`);
		num=-1;
	    }
	    else{
		console.log(`we have now ${num-=bottle} bottles`);
		bottle++;
	   }
	}
}

let userNum=prompt("Please enter a number");
printSong(userNum);
