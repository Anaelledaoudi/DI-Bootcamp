function checkValidity(num){
   if(isNaN(num)){
     console.log("Sorry Not a number, Goodbye");
   }
   if(num<0||num>10){
   	console.log("Sorry it’s not a good number, Goodbye")
   }
}
function compareNumbers(userNumber,computerNumber){
  let chances=3;
  while(userNumber!=computerNumber&&chances!=0){
  	if(userNumber>computerNumber){
     userNumber=prompt("Your number is bigger then the computer’s, guess again");
    }
  	else if(userNumber<computerNumber){
  	 userNumber=prompt("Your number is smaller then the computer’s, guess again");
    }
    chances--;
  }
  if(chances==0){
  	alert("out of chances");
  }
  if(userNumber==computerNumber){
  	return alert("WINNER!!!");	
  }
}


function playTheGame(){
	let result=confirm("Do you want to play the game?");
    if(result==false){
    	console.log("No problem, Goodbye");
    }
    else{
       let userNumber=prompt("please enter a number between 0 and 10");
       console.log(checkValidity(userNumber));
       let computerNumber=Math.floor(Math.random() * 11);  
       console.log(computerNumber);
       compareNumbers(userNumber,computerNumber);  
    }
}
