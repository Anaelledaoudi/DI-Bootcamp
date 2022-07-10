const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
let userName=[];
gameInfo.forEach((element,index)=>userName.push(gameInfo[index]['username']+"!"));
console.log(userName);
let bigThanFive=[];
gameInfo.forEach((element,index)=>(gameInfo[index]['score']>5) ? bigThanFive.push(gameInfo[index]['username']):console.log("not him"));
console.log(bigThanFive);