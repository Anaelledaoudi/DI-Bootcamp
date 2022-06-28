let pyramide="";
for(let i=5; i>=0 ;i--){
pyramide+="*";	
console.log(pyramide);
}

for(let row=1; row<=6; row++){
	let temp="";
  for(let col=1; col<=row; col++){
  	temp+="*";

  }
  console.log(temp);
}