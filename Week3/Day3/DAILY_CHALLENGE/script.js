let text=document.querySelector("input");
 text.addEventListener("input",check);
 function check(evt){
 	let last;
 	let word=evt.target.value;
 	if(typeof word.charAt(word.length-1)!=='string'||!(word.charAt(word.length-1) instanceof String)){
       word=word.slice(0,-1);
 	}
 	
 	console.log(word);
