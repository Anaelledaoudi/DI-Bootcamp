let sentance="The movie is not that bad, I like it";
let newSentance;
wordNot=sentance.indexOf("not");
//console.log(wordNot);
wordBad=sentance.indexOf("bad");
//console.log(wordBad);

if (wordNot<wordBad) {
	newSantance=sentance.substring(0,wordNot);
	newSantance+="good";
	newSantance+=sentance.substring(wordBad+3,sentance.length);
    console.log(newSantance);
}
else{
	console.log(sentance)
}
