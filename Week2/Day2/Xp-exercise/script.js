//ex 1
let x=2;
let y=4;
if(x>y){
	console.log("x is bigger");
}else{
	console.log("y is bigger");
}
//ex2
let newDog="chiwawa";
let numOfLetters=newDog.length;
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog==="chiwawa"){
	console.log("i love chwawa");
}
else{
	console.log("i dont care i prefer cats");
}

//ex 3
let num=prompt("please enter a number");
if (num%2==0){
	console.log(`${num} is an even number`);
}
else{
	console.log(`${num} is an odd number`);
}
//ex 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length===0) {
	console.log("no one is online");
}
else if (users.length===1){
	console.log(`${users[0]} is online)`);
}
else if (users.length===2){
	console.log(`${users[0]}, ${users[1]} are online`);
}
else {
	console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`);
}
