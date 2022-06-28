//ex1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[people.length-1]="Jason";
people.push("Anaelle");
console.log(people.indexOf("Mary"));
//it dont have to include myname so length-1
let newPeople=people.slice(0,people.length-1);
//console.log(people);
//console.log(newPeople);
console.log(people.indexOf("Foo"));
//because thats name doesn't appear on the array so he don't have any index and the result will be -1
let last=people[people.length-1];
//console.log(last);
//ex1-part 2
for (let i=0; i <= people.length-1; i++){
	console.log(people[i]);
}
for (let b=0; b <= people.length-1; b++){
	if(people[b]=="Jason")
		break;
	console.log(people[b]);

}
/*
let j=0;
while(people[j]!="Jason"){
console.log(people[j]);
j++;
}*/

//ex2
let colors=["pink","violet","yellow","orange","green"];
let suffix=["st","nd","rd","th","th"]
for (let a=1; a <= colors.length; a++) {
	console.log(`My #${a} choice is ${colors[a-1]}`);
}
for (let c=1; c <= colors.length; c++) {
	console.log(`My ${c}${suffix[c-1]} choice is ${colors[c-1]}`);
}

//ex3
let num=1;
while(num<10){
num=prompt("Please enter a number");
let numType=typeof num;
}
//ex 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log("1 flour: "+building.numberOfAptByFloor.firstFloor,", 3 floor: "+building.numberOfAptByFloor.thirdFloor);
console.log(`${building.nameOfTenants[1]} have ${building.numberOfRoomsAndRent.dan[0]} rooms in his appartment`);
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
	building.numberOfRoomsAndRent.dan[1]=1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

//ex 5
let family={
	familyName:"daoudi",
	country:"israel",
	numOfPeople: 6,
}
for(let fam in family){
	console.log(`${fam}: ${family[fam]}`)
}
//ex 6
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
for(let det in details){
console.log(det, details[det]);
}
//ex 7
let societyName="";
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
for(let n in names){
  societyName+=names[n][0];
}
console.log(societyName);