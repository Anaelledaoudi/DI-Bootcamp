//ex1
let favFood="sushi";
let favMeal="lunch";
console.log(`I eat ${favFood} at every ${favMeal} `);
//ex2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let lengthSeries=myWatchedSeries.length;
let myWatchedSeriesSentence=`${myWatchedSeries[0]}, ${myWatchedSeries[1]}and the ${myWatchedSeries[2]} `;
let newSentance=`I watched ${lengthSeries} series : ${myWatchedSeriesSentence}`;
//part ||
myWatchedSeries[myWatchedSeries.length-1]="friends";
console.log(myWatchedSeries)
myWatchedSeries.push("manifest");
console.log(myWatchedSeries)
myWatchedSeries.unshift("Emily in Paris");
console.log(myWatchedSeries)
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
//exercise 3
let temperature="25";
let farenheit=(temperature/5)*9+32;
console.log(farenheit);
//exercise 4
let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction:55
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23
    // Actual:23
    console.log(3 + 4 + '5');
    // Prediction:75
    // Actual:75

    //exemple 5
    typeof(15)
// Prediction:number
// Actual:

typeof(5.5)
// Prediction:float
// Actual:

typeof(NaN)
// Prediction:function
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2));
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamburger
// Actual:hamburger

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3");
// Prediction:-2
// Actual:-2

console.log("johnny" + 5);
// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5);
// Prediction:
// Actual:NaN

console.log(99 * "hello");
// Prediction:
// Actual:Nan

console.log(1 != 1);
// Prediction:false
// Actual:false

console.log(1 == "1");
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false

//exercise 6:
5 + "34"
// Prediction:534
// Actual:

console.log(5 - "4");
// Prediction:1
// Actual:1

console.log(10 % 5)
// Prediction:0
// Actual:0

console.log(5 % 10)
// Prediction:
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:  
// Actual:

" " + 0
// Prediction: 0
// Actual:

console.log(true + true)
// Prediction:true
// Actual:2

console.log(true + false);
// Prediction:false
// Actual:1

console.log(false + true)
// Prediction:flase
// Actual:1

console.log(false - true)
// Prediction:
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill")
// Prediction:
// Actual:Nan