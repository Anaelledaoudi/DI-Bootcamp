let sentance=prompt("hi enter severalc words");
let sentanceArr=sentance.split(" ");
function longestWord(arr){
	let bigWord=arr[0].length;
	for (let i=1; i<sentanceArr.length; i++){
	if(arr[i].length>bigWord){
		bigWord=arr[i].length;
	}
  }
  return bigWord;
}
function spaces(word,len){
if(word.length==len){
   return "";
  }
  return(" ".repeat(len-word.length))
}
function stars(){
	let bigWord=longestWord(sentanceArr);
	console.log("*".repeat(bigWord+4));
	for(let x in sentanceArr){
		console.log("* "+sentanceArr[x]+spaces(sentance[x],bigWord)+" *")
	}
	console.log("*".repeat(bigWord+4));
}
stars();

