//ex 1
const arr=["hello","hi","abba","boo","data"];
makeAllCaps(arr);

function makeAllCaps(words){
  const checkStrings=new Promise((resolve,reject)=>{
  	if(words.every(elm=>typeof elm==="string")){
  		let arrUpper=words.map(elm=>elm.toUpperCase())
  		resolve(arrUpper);
  	}
  	else{
  		reject("error with the array")
  	}
  })
  checkStrings.then(elm=>sortWords(elm))
              .catch(error=>console.log(error))
}

function sortWords(arrUp){
  const arrayLength=new Promise((resolve,reject)=>{
     if(arrUp.length>4){
     	const sortedArr=arrUp.sort();
     	resolve(sortedArr);
     }
     else{
     	reject("ERROR-your array is too short")
     }
  })
  arrayLength.then(elm=>console.log(elm))
             .catch(error=>console.log(error))
}
//ex2

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
toJs();
function toJs(){
  const morseObj=JSON.parse(morse);
  const checkEmpty=new Promise((resolve,reject)=>{
  	if(Object.keys(morseObj).length === 0){
  		reject("ERROR- your morse is empty")
  	}
  	else{
  		resolve(morseObj)
  	}
  })
  checkEmpty.then(elm=>toMorse(elm))
            .catch(error=>console.log(error))
}
function toMorse(morseObj){
   const userWord=prompt("Please enter a word to convert it to morse");
   console.log(morseObj);
  
   const ifMorse=new Promise((resolve,reject)=>{
   let result=true;
   for(let i=0;i<userWord.length&&result==true;i++){
      if(Object.keys(morseObj).includes(userWord[i])){
      	result=true;
      }
      else{
      	result=false
      }
    }
    if(result===false){
       reject("ERROR-you entered a wrong character")
    }
    else{
    	const newMorseArr=[];
    	for(let i=0;i<userWord.length;i++){
    		newMorseArr.push(morseObj[userWord[i]])
    	}
    	resolve(newMorseArr);
    }
   })
   ifMorse.then(elm=>console.log(elm))
           .catch(error=>console.log(error))
}
