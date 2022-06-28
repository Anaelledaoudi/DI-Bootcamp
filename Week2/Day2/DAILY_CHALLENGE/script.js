let sentance="The movie is not that bad, I like it";
notIndex=sentance.indexOf("not");
badIndex=sentance.indexOf("bad");

if (notIndex<badIndex) {
	sentance.substring(0,notIndex);
	sentance[notIndex]="good";
	sentance[notIndex+4]=sentance.substring(badIndex+3,sentance.length);
	console.log(sentance);
}
else{
	console.log(sentance)
}
