//ex1
const sum=(a,b)=>a+b;
console.log(sum(5,3));
//ex2
// function convert(weigth){
// 	return `${weigth*1000}gr`
// }
//console.log(convert(1));

// const convert2=function(weigth){
// 	return `${weigth*1000}gr`
// }
//console.log(convert(2));
	//a function declaration is loading before the code was executed, a function expression happen just when u reach this line of code.

const convert1=weigth=>`${weigth*1000}gr`;
console.log(convert1(1));
// (function(weigth){
// 	console.log(`${weigth*1000}gr`);
// 	})(1)

//ex 3

// (function(job,location,partner,numOfKids){
// 	let sentance=document.createElement('p');
// 	sentance.textContent=`You will be a ${job} in ${location}, and married to ${partner} with ${numOfKids} kids.`
// 	document.body.appendChild(sentance);

// })("computer","jerus","?","?")

//ex 4
(function(n,profilPhoto){
	let userName=document.getElementById('userName');
	let name=document.createElement('p');
	name.textContent=n;
	name.style.fontSize="2em";
	userName.appendChild(name);
	let img=document.createElement('img');
	img.setAttribute('src',profilPhoto);
	img.style.width="4vw";
	userName.appendChild(img);
})("Anaelle",'profilImg.png')

//ex5~
//part1
// function makeJuice(size){
// 	function addIngredients(first,second,third){
// 		const p=document.createElement('p');
// 		p.textContent=`The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
// 		document.body.appendChild(p);
// 	}
// 	addIngredients("banana","strawberry","cherry");

// }
// makeJuice("medium");
//part2
function makeJuice(size){
	let ingredients=[];
	
	function addIngredients(first,sec,third){
		ingredients.push(first);
		ingredients.push(sec);
		ingredients.push(third);

       function displayJuice(){
         const p=document.createElement('p');
		    p.textContent=`The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`;
		    document.body.appendChild(p);
       }	
        displayJuice();
	}
	addIngredients("banana","strawberry","cherry");
	addIngredients("date","passiflore","orange");
}
makeJuice("medium");






