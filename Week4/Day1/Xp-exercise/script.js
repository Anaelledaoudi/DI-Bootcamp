// //exercise 1
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // run in the console: 3
// q1()

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:0 5
// q22()
// q2()
// q22()

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console: hello 
// q3()
// q32()

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:test
// q4()

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// // run in the console: 5 5

//exercise 2
const winBattle=()=>true;
let experiencePoints;
winBattle()==true? experiencePoints=10:experiencePoints=1 ;
console.log(experiencePoints);

//exercise 3
const check=p=>((typeof p)==='string') ? true : false;
console.log(check("hello"));
//exercice 4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const displayCo=colors.forEach((element, index)=>colors[index]=(index+1)+"# choice is "+colors[index]);
console.log(colors);
//let checkIfViolet=colors.forEach((element, Violet)=>element==="Violet"?true:false);
colors.some((element)=>element==="Violet"? console.log("yes"): console.log("no"));

//exercice 5
let i=0;
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["st","nd","rd","th"];
const add=color.forEach((element,index)=>color[index]=(index+1)+ordinal[i++]+" "+color[index]);
console.log(color);
//exercice 6
let bankAmount;
const VAT=17/100;
let sum=0;
let details = ["+200", "-100", "+146", "+167", "-2900"];
const modifyExpenses=details.forEach((element,index)=>details[index]*=VAT);
let bankAccount=details.forEach((element,index)=>sum+=details[index]);
console.log(sum);
