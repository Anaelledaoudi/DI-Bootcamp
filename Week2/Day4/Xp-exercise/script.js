//ex 1
function infoAboutMe(){
	console.log("My name is Anaelle, i'm 21 live and jerusalem");

}
infoAboutMe();
function infoAboutPerson(personName, personAge, personFavoriteColor){
	console.log(`your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);	
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
//ex 2
 
 function calculateTip(){
 let bill=prompt("whats the amount of the bill?");
 if(bill<50){
 	console.log(Number(bill*0.2)+Number(bill));
   }
   else if(bill>50&&bill<200){
 	console.log(Number(bill)+(Number(bill*0.15)));
   }
   else {
   	console.log(Number(bill)+(Number(bill*0.1)));
   }

 }
 calculateTip();

 //ex 3
 function isDivisible(){
 	let sum=0;
 	for (let i=0;i<500;i++){
 		if(i%23==0){
 			console.log(i);
            sum+=i;
 		}
 	}
 	console.log("sum is: "+sum);
 }
 isDivisible();
 //bonus
// function isDivisible(divisor){
 //	let sum=0;
 	//for (let i=0;i<500;i++){
 	//	if(i%divisor==0){
 	//		console.log(i);
      //      sum+=i;
 		//}
 	//}
 	//console.log("sum is: "+sum);
 //}
 //isDivisible(5);

 //ex 4
 let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList=["banana","orange","apple"];
let summ=0;
function myBill(){
	for(let i=0;i<shoppingList.length;i++){
		console.log(stock[shoppingList[i]]);
     if(stock[shoppingList[i]]>0){
     	stock[shoppingList[i]]--;
        summ+=prices[shoppingList[i]];
       }
   }
   return summ;
}
   console.log(myBill());
//ex 5
let amount=0;
function changeEnough(itemPrice, amountOfChange){
amount+=amountOfChange[0]/4;
amount+=amountOfChange[1]/10;
amount+=amountOfChange[2]/20;
amount+=amountOfChange[3]/100;
if(amount>itemPrice)
   return true;
return false;
   }
   console.log(changeEnough(4.25, [25, 20, 5, 0]));
//ex 6
function hotelCost(){
   let num=prompt("how many night u want to stay?");
   Number(num);
   while (typeof num!=Number||num==null) {
       num=prompt("how many night?");
   }
   return num*140;
}
function planeRideCost(){
   let destination=prompt("whats your destination?");
     while (typeof destination!=string||destination==null) {
       destination=prompt("whats your destination?");    
   }
   if (destination=="london")
   return 183;
   else if (destination=="paris")
   return 220;
   else
   return 300;
}
function rentalCarCost(){
   let car=prompt("how many days u want to rent a car?");
     Number(car);
      while (typeof car!=Number||car==null) {
       rentalCarCost=prompt("how many days u want to rent a car?");
   }
   if(car<10)
      return car*40;
   else if(car>10){
      let carSum=10*40;
      let daysDiscount=car-10
     return carsum+=car*0.5;
   }  
}
function totalVacationCost(){
   console.log(`the car cost:${rentalCarCost( )}$, the hotel cost ${hotelCost()}$, the plane tickets cost: ${planeRideCost()}$`)
}

totalVacationCost();