//ex 1-HTML Form
//on the url
//ex 2
//in the network payload
//ex3
let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
const intoObj=JSON.stringify(marioGame,null,2);
console.log(intoObj);

//its not cleaner, it's in a block
intoObj
